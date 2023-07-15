'use client';
import React, { useState } from 'react';

const relu = (x) => Math.max(0, x);

const ReLUDynamic = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (e) => {
    const input = parseFloat(e.target.value);
    setInputValue(input);
    setOutputValue(relu(input));
  };

  return (
    <div>
      <h1>Rectified Linear Unit (ReLU) Function</h1>
      <div>
        <label htmlFor="input">Enter a value: </label>
        <input className='text-black'
          type="number"
          id="input"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <p>Input: {inputValue}</p>
        <p>Output (ReLU): {outputValue}</p>
      </div>
    </div>
  );
};

export default ReLUDynamic;