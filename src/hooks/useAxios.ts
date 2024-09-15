import { useEffect, useState, useRef } from 'react';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Client interface 
interface Client {
    get: (
        url: string,
        config?: AxiosRequestConfig,
        options?: { staleTime?: number; retryConfig?: { retries: number; delay: number } }
    ) => Promise<void>;
    post: (
        url: string,
        data: any,
        config?: AxiosRequestConfig,
        options?: { retryConfig?: { retries: number; delay: number } }
    ) => Promise<void>;
    put: (
        url: string,
        data: any,
        config?: AxiosRequestConfig,
        options?: { retryConfig?: { retries: number; delay: number } }
    ) => Promise<void>;
    patch: (
        url: string,
        data: any,
        config?: AxiosRequestConfig,
        options?: { retryConfig?: { retries: number; delay: number } }
    ) => Promise<void>;
    delete: (
        url: string,
        config?: AxiosRequestConfig,
        options?: { retryConfig?: { retries: number; delay: number } }
    ) => Promise<void>;
}

// Define retry configuration
interface RetryConfig {
    retries: number;
    delay: number;
}

// Define the shape of the cached data
interface CacheData {
    data: any;
    timestamp: number;
}

// Define the shape of the hook's return type
interface UseAxiosReturn {
    client : Client;
    response: any;
    error: string;
    loading: boolean;
    invalidateCache: (url: string) => Promise<void>;
    clearCache: () => Promise<void>;
}

// Define the shape of IndexedDB database schema
interface CacheDB extends DBSchema {
    cache: {
        key: string;
        value: CacheData;
    };
}

// Open IndexedDB database
const dbPromise = openDB<CacheDB>('cache-db', 1, {
    upgrade(db: IDBPDatabase<CacheDB>) {
        db.createObjectStore('cache', { keyPath: 'url' });
    },
});

const useAxios = (
    axiosInstance: AxiosInstance | any,
    defaultRetryConfig: RetryConfig = { retries: 3, delay: 1000 }
): UseAxiosReturn => {
    const [response, setResponse] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [controller, setController] = useState<AbortController | null>(null);
    const [pendingRequests, setPendingRequests] = useState<Map<string, boolean>>(new Map());
    const retryCountRef = useRef<number>(0);

    const isStale = (cachedData: CacheData | undefined, staleTime: number): boolean => {
        if (!cachedData) return true;
        const { timestamp } = cachedData;
        return Date.now() - timestamp > staleTime;
    };

    const retryRequest = async (
        operation: () => Promise<any>,
        retryConfig: { retries: number; delay: number }
    ) => {
        const { retries, delay } = retryConfig;
        let attempt = 0;
    
        while (attempt < retries) {
            try {
                return await operation();  // Execute the provided operation
            } catch (err) {
                attempt += 1;
                if (attempt >= retries) {
                    throw new Error('Maximum retries reached');
                }
                console.log(`Retrying... attempt ${attempt}/${retries}`);
                await new Promise(resolve => setTimeout(resolve, delay));  // Wait before retrying
            }
        }
    };
    

    const getCachedData = async (url: string): Promise<CacheData | undefined> => {
        const db = await dbPromise;
        return db.get('cache', url);
    };

    const setCachedData = async (url: string, data: CacheData): Promise<void> => {
        const db = await dbPromise;
        const newEntry = { url, ...data };
        await db.put('cache', newEntry);
    };

    const invalidateCache = async (url: string): Promise<void> => {
        const db = await dbPromise;
        await db.delete('cache', url);
    };

    const clearCache = async (): Promise<void> => {
        const db = await dbPromise;
        const tx = db.transaction('cache', 'readwrite');
        await tx.objectStore('cache').clear();
        await tx.done;
    };

    const axiosFetch = async (
        configObj: {
            method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
            url: string;
            requestConfig?: AxiosRequestConfig;
        },
        { staleTime = 5000, retryConfig = defaultRetryConfig }: { staleTime?: number; retryConfig?: RetryConfig }
    ) => {
        setLoading(true);
        setError('');
    
        const { method, url, requestConfig = {} } = configObj;
    
        // Prevent duplicate requests by checking pending requests
        if (pendingRequests.has(url)) {
            console.log(`Request for ${url} is already pending`);
            return;
        }
    
        // Add request to pending requests
        setPendingRequests(prev => new Map(prev).set(url, true));
    
        const ctrl = new AbortController();
        setController(ctrl);
    
        // Check cache first (only for GET requests)
        if (method === 'GET') {
            console.log('Checking cache for data...');
            const cachedData = await getCachedData(url);
            if (cachedData && !isStale(cachedData, staleTime)) {
                console.log('Returning cached data from IndexedDB');
                setResponse(cachedData.data);
                setLoading(false);
                setPendingRequests(prev => {
                    const updated = new Map(prev);
                    updated.delete(url);
                    return updated;
                });
                return;
            }
        }
    
        // Function to fetch data (used in retry)
        const fetchData = async () => {
            const res: AxiosResponse<any> = await axiosInstance[method.toLowerCase()](url, {
                signal: ctrl.signal,
                ...requestConfig,
            });
    
            // Cache data only for GET requests
            if (method === 'GET') {
                const dataToCache: CacheData = { data: res.data, timestamp: Date.now() };
                await setCachedData(url, dataToCache);
            }
    
            setResponse(res.data);
            retryCountRef.current = 0;
    
            // Remove URL from pending requests
            setPendingRequests(prev => {
                const updated = new Map(prev);
                updated.delete(url);
                return updated;
            });
        };
    
        try {
            // Use the retryRequest function to retry the fetch operation
            await retryRequest(fetchData, retryConfig);
        } catch (err: any) {
            setError(err.message || 'Server Error');
        } finally {
            setLoading(false);
            // Ensure the pending request is cleared
            setPendingRequests(prev => {
                const updated = new Map(prev);
                updated.delete(url);
                return updated;
            });
        }
    };

    // Client object with methods for all HTTP requests
    const client = {
        get: (url: string, config: AxiosRequestConfig = {}, options: { staleTime?: number; retryConfig?: RetryConfig } = {}) => {
            return axiosFetch({ method: 'GET', url, requestConfig: config }, options);
        },
        post: (url: string, data: any, config: AxiosRequestConfig = {}, options: { retryConfig?: RetryConfig } = {}) => {
            return axiosFetch({ method: 'POST', url, requestConfig: { ...config, data } }, options);
        },
        put: (url: string, data: any, config: AxiosRequestConfig = {}, options: { retryConfig?: RetryConfig } = {}) => {
            return axiosFetch({ method: 'PUT', url, requestConfig: { ...config, data } }, options);
        },
        patch: (url: string, data: any, config: AxiosRequestConfig = {}, options: { retryConfig?: RetryConfig } = {}) => {
            return axiosFetch({ method: 'PATCH', url, requestConfig: { ...config, data } }, options);
        },
        delete: (url: string, config: AxiosRequestConfig = {}, options: { retryConfig?: RetryConfig } = {}) => {
            return axiosFetch({ method: 'DELETE', url, requestConfig: config }, options);
        }
    };
    

    useEffect(() => {

        if (controller)
            return () => controller.abort()

    }, [controller]);

    // Automatic cache invalidation
    useEffect(() => {
        const interval = setInterval(async () => {
            await clearCache(); // Clear the cache every 5 minutes (300000 ms)
        }, 300000);

        return () => clearInterval(interval);
    }, []);

    return { response, error, loading, client, invalidateCache, clearCache };
};

export default useAxios;
