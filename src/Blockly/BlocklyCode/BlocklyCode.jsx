 import React, {useState} from 'react';
 import './BlocklyCode.css';
 import downloadCode from './downloadCode.js';

 function BlocklyCode({code}) {

  const downloadHandler = (event) => {
    event.preventDefault();
    downloadCode(code);
  };

  return (
    <div className='BlocklyCode'>
      <button onClick={downloadHandler}>DOWNLOAD</button>
      <div className='blockly-current-code'>
        {code}
      </div>
    </div>
  );
}

export default BlocklyCode;
