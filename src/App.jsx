import React, {useState, useEffect} from 'react';
import BlocklyComponent from './Blockly/BlocklyComponent/BlocklyComponent.jsx';
import BlocklyCode from './Blockly/BlocklyCode/BlocklyCode.jsx';
import './App.css';

import Blockly from 'blockly/core';

// Can create custom styling themes
const myTheme = {
  'base': Blockly.Themes.Classic,
  'componentStyles': {
    'workspaceBackgroundColour': 'white',
    'toolboxBackgroundColour': 'lightgrey',
    'toolboxForegroundColour': 'black',
    'flyoutBackgroundColour': 'lightgrey',
    'flyoutForegroundColour': 'black',
    'flyoutOpacity': 1,
    'insertionMarkerColour': '#fff',
    'insertionMarkerOpacity': 0.8,
    'scrollbarColour': 'black',
    'scrollbarOpacity': 0.9,
    'cursorColour': 'lightgreen',
  },
  // This should work but doesn't.  Not sure why....
  // Can style in css file.
  // 'fontStyle': {
  //   "family": "Georgia, serif",
  //   "weight": "bold",
  //   "size": 20,
  // },
}

const blocklyComponentConfig = {
  readOnly: false,
  trashcan: true,
  media: 'media/',
  move: {
    scrollbars: true,
    drag: true,
    wheel: true,
  },
  initialXml: `<xml xmlns="http://www.w3.org/1999/xhtml"></xml>`,
  theme: myTheme,
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true
  },
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
        <BlocklyComponent config={blocklyComponentConfig} codeHandler={getCode} />
        <BlocklyCode code={currentCode}/>
      </div>
    </div>
  )
}

export default App;
