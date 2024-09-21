/* eslint-disable react-hooks/exhaustive-deps */
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useDocument } from '../../models/Document';

export default function List () {

    const {
        fetchDocumentsByCitizen,
    } = useDocument();

    const {
        getUser,
    } = useAuth();



    useEffect(() => {
    }, []);




    return (<>
        
        <div>
            {
                
            }         
        </div>
    </>)
}