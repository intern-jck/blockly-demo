 import React, {useState} from 'react';
 import './BlocklyCode.css';

 function BlocklyCode({code}) {
  return (
    <div className='BlocklyCode'>
      <div className='blockly-current-code'>
        {code}
        {/* {code.split().map()} */}
      </div>
    </div>
  );
}

export default BlocklyCode;
