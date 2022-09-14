import React, {useState, useEffect} from 'react';
import BlocklyComponent from './Blockly/BlocklyComponent.jsx';
import { Block, Value, Field, Shadow } from './Blockly/index.js';

// import './blocks/customblocks';
import './generator/generator';

import './App.css';

import BlocklyJS from 'blockly/javascript';

const blocklyComponentConfig = {
  readOnly: false,
  trashcan: true,
  media: 'media/',
  move: {
    scrollbars: true,
    drag: true,
    wheel: true,
  },
  initialXml: `<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_ifelse" x="0" y="0"></block></xml>`,
};



const App = () =>{
  const [currentCode, setCurrentCode] = useState('');

  const getCode = (code) => {
    console.log(code);
    setCurrentCode(code);
  };

  return (
    <div className='App'>
      <div className='app-header'>
        <h1>
          Blockly React
        </h1>
      </div>

      <div className='app-content'>
        {/* <button onClick={generateCode}>Convert</button> */}
        <BlocklyComponent config={blocklyComponentConfig} codeHandler={getCode}>
          <Block type="controls_ifelse" />

          <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_operation" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
        </BlocklyComponent>
      </div>

    </div>
  )
}

export default App;
