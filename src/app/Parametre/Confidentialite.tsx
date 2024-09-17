import useAxios from "../../hooks/useAxios";
import serverInstance from "../../api/server";
import { useEffect } from "react";


export default function Confidentialité() {

    const {
        client, response, error, loading
    } = useAxios(serverInstance);



    useEffect(() => {
        // Make a GET request
        client.get('/users/', )
        client.post('/users', { name: 'John Doe' })
        client.put('/users/123', { name: 'John Doe' })
        client.delete('/users/123')
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <div>Response: {JSON.stringify(response)}</div>;
}