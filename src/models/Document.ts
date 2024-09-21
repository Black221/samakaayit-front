import useAxios from "../hooks/useAxios";
import serverInstance from "../api/server";


export interface IDocument {
    _id?: string;
    originalname: string;
    mimetype: string;
    size: number;
    buffer: any;
    name: string;
    path?: string;
    date?: string;
    uploadedBy: string;
}

export const useDocument = () => {
    const { client, response, error, loading, invalidateCache, clearCache } = useAxios(serverInstance);

    const fetchDocumentById = async (id: string) => {
        await client.get(`/documents/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    };

    const fetchDocumentFile = async (id: string) => {
        await client.get(`/documents/file/${id}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    }

    const fetchDocumentsByCitizen = async (citizenId: string) => {
        await client.get(`/documents/user/${citizenId}`, {}, { staleTime: 5000, retryConfig: { retries: 3, delay: 1000 } });
    };

    const createDocument = async (documentData: IDocument) => {
        await client.post('/documents', documentData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }, { retryConfig: { retries: 3, delay: 1000 } });
    };


    const deleteDocument = async (id: string) => {
        await client.delete(`/documents/${id}`, {}, { retryConfig: { retries: 3, delay: 1000 } });
    };

    return {
        fetchDocumentById,
        fetchDocumentsByCitizen,
        fetchDocumentFile,
        createDocument,
        deleteDocument,
        data: response?.data,
        error,
        loading,
        invalidateCache,
        clearCache
    };

}