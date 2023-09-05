import React from 'react';

const CalculatorButtons = ({ onClick }) => {
    const buttons = [ '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '=', 'C' ]

    return (
        <div className='calculator-buttons'>
            {buttons.map((button) => (
                <button key={button} onClick={() => onClick(button)}>
                    {button}
                </button>
            ))}
        </div>
    );
};

export default CalculatorButtons;