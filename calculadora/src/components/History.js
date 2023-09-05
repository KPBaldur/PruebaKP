import React from 'react';

const History = ({ history, onClick, onClearAll, onDelete }) => {
  return (
    <div className="history">
      <h2>Historial de Cálculos</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => onDelete(index)}>Borrar</button>
            <button onClick={() => onClick(index)}>Ver</button>
          </li>
        ))}
      </ul>
      <button onClick={onClearAll}>Borrar Todo</button>
    </div>
  );
};
  
  export default History;