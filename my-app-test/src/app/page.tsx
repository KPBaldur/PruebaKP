import React from 'react'

function Calculator() {
  const estilo = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
  }
  
  return (
    <div style={estilo}>

      <h3> Ejercicio realizado </h3>
      <input type='number'></input>
      
      <hr />
      <button>AC</button>
      <button>Del</button>
      <button>/</button>
      <button>*</button>
      <br />
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <br />
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <br />
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <br />
      <button>%</button>
      <button>0</button>
      <button>.</button>
      <button>=</button>
    </div>
  )
}

export default Calculator