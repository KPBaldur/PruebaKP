import React from 'react';

const History = ({ history, onClick}) => {
    return (
        <div className='history'>
            <h2>Historial de Calculos</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                        <button onClick={() => onClick(index)}>Ver</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;