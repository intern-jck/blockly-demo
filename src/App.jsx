import React from 'react';
import './App.css';

import BlocklyComponent from './Blockly/BlocklyComponent.jsx';
import { Block, Value, Field, Shadow } from './Blockly/index.js';

// import './blocks/customblocks';
import './generator/generator';

function App(props) {
  return (
    <div className="App">
      <div className="app-header">
        blockly
      </div>
        {/* <BlocklyComponent
          readOnly={false}
          trashcan={true}
          media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          initialXml={`<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_ifelse" x="0" y="0"></block></xml>`} >
          <Block type="controls_ifelse" />
        </BlocklyComponent> */}
    </div>
  );
}

export default App;
