import React, { useState } from 'react';

import Button from './Button';

import Display from './Display';


const Calculator = () => {

  const [displayValue, setDisplayValue] = useState('');

  const [operator, setOperator] = useState(''); 

  const [num1, setNum1] = useState('');

    
  const handleNumberClick = (value) => {

    setDisplayValue(displayValue + value);

  };


  const handleOperatorClick = (operator) => {

    setOperator(operator);

    setNum1(displayValue);

     setDisplayValue('');

  };


  const handleEqualsClick = () => {

    let result;

    switch (operator) {

      case '+':

        result = parseInt(num1) + parseInt(displayValue);

        break;

      case '-':

        result = parseInt(num1) - parseInt(displayValue);

        break;

      case '*':

        result = parseInt(num1) * parseInt(displayValue);

        break;

      case '/':

        result = parseInt(num1) / parseInt(displayValue);

        break;

      default:

        result = displayValue;

    }

    setDisplayValue(result);

  };


  const handleClearClick = () => {

    setDisplayValue('');

    setOperator('');

    setNum1('');
       
  };


  return (

    <div className="flex flex-col items-center justify-center h-screen">

      <Display value={displayValue} />

      <div>

        <Button value="7" onClick={() => handleNumberClick('7')} />

        <Button value="8" onClick={() => handleNumberClick('8')} />

        <Button value="9" onClick={() => handleNumberClick('9')} />
          
        <Button value="/" onClick={() => handleOperatorClick('/')} />

<br></br>
        <Button value="4" onClick={() => handleNumberClick('4')} />

        <Button value="5" onClick={() => handleNumberClick('5')} />

        <Button value="6" onClick={() => handleNumberClick('6')} />

        <Button value="*" onClick={() => handleOperatorClick('*')} />

<br></br>
        <Button value="1" onClick={() => handleNumberClick('1')} />

        <Button value="2" onClick={() => handleNumberClick('2')} />

        <Button value="3" onClick={() => handleNumberClick('3')} />

        <Button value="-" onClick={() => handleOperatorClick('-')} />

<br></br>
        <Button value="0" onClick={() => handleNumberClick('0')} />

        <Button value="." onClick={() => handleNumberClick('.')} />

        <Button value="+" onClick={() => handleOperatorClick('+')} />

        <Button value="C" onClick={handleClearClick} />
        <br></br>
        <Button value="=" onClick={handleEqualsClick} />
       
      </div>

    </div>

  );

};


export default Calculator;