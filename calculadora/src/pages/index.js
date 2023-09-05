import React, { useState } from 'react'
import CalculatorInput from '../components/CalculatorInput';
import CalculatorButtons from '../components/CalculatorButtons';
import History from '../components/History';

import Link from 'next/link';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [currentOperation, setCurrentOperation] = useState(''); // Agrega el estado para la operación actual
  
    const handleInputChange = (value) => {
      setInput(value);
    };
  
    const handleButtonClick = (button) => {
      if (button === '=') {
        try {
          const result = eval(input);
          const operation = `${input} = ${result}`;
          setHistory([...history, operation]);
          setCurrentOperation(operation); // Actualiza la operación actual
          setInput(result.toString());
        } catch (error) {
          setInput('Error');
        }
      } else if (button === 'C') {
        setInput('');
        setCurrentOperation(''); // Borra la operación actual al borrar el input
      } else {
        setInput(input + button);
        setCurrentOperation(currentOperation + button); // Actualiza la operación actual al ingresar dígitos
      }
    };
  
    const handleHistoryClick = (index) => {
      setInput(history[index].split('=')[0]);
      setCurrentOperation(history[index]); // Actualiza la operación actual al hacer clic en el historial
    };
  
    return (
      <div className="calculator">
        <p>{currentOperation}</p> {/* Muestra la operación actual */}
        <CalculatorInput value={input} onChange={handleInputChange} />
        <CalculatorButtons onClick={handleButtonClick} />
        <History history={history} onClick={handleHistoryClick} />

        <Link href={`/history?${history.join(',')}`} legacyBehavior>
            <a>Ver Historial</a>
        </Link>
      </div>
    );
  };

export default Calculator;