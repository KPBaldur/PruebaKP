import React from 'react';
import { useRouter } from 'next/router';

const HistoryPage = ( ) => {
    const router = useRouter();
    const { query } = router.query;
    
    const history = query ? query.split(',') : [];
    
    return (
        <div>
            <h2>Historial de Calculos</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default HistoryPage;