import React, { useState } from 'react';
import axios from 'axios';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const sendDataToPython = async () => {
    try {
      const response = await axios.post('http://localhost:5000/process', { data: code });
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea
        style={{ width: '99%', resize: 'none', outline: 'none' }}
        value={code}
        onChange={handleCodeChange}
        rows={20}
        placeholder="Enter your code here..."
      />
      <button className="click" onClick={sendDataToPython}>
        Click To Translate
      </button>
      <p>Result: {result}</p>
    </div>
  );
};

export default CodeEditor;
