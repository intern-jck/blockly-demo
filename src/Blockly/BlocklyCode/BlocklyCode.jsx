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
      <div className='blockly-current-code'>
        {code}
      </div>
      <button onClick={downloadHandler}>DOWNLOAD</button>
    </div>
  );
}

export default BlocklyCode;
