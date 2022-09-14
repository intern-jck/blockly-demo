 import React, {useEffect, useRef, useCallback}  from 'react';
 import Blockly from 'blockly/core';
 import BlocklyJS from 'blockly/javascript';
 import locale from 'blockly/msg/en';
 import 'blockly/blocks';

 import './BlocklyComponent.css';


 Blockly.setLocale(locale);

 function BlocklyComponent({config, codeHandler, children}) {

  const blocklyDiv = useRef();
  const toolbox = useRef();
  let primaryWorkspace = useRef();

  const generateCode = (event) => {
    var code = BlocklyJS.workspaceToCode(
      primaryWorkspace.current
    );
    codeHandler(code);
  };

  useEffect(() => {
    console.log('new block')

    const { initialXml, children, ...rest } = config;

    primaryWorkspace.current = Blockly.inject(
      blocklyDiv.current,
      {
        toolbox: toolbox.current,
        ...rest
      },
    );

    if (initialXml) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), primaryWorkspace.current);
    }

    primaryWorkspace.current.addChangeListener(generateCode);

  }, [primaryWorkspace, toolbox, blocklyDiv, config]);

  return (
    <div className='BlocklyComponent'>
      {/* <button onClick={generateCode}>Convert</button> */}
      <div
        ref={blocklyDiv}
        id="blocklyDiv">
      </div>
      <div
        className='blockly-toolbox'
        style={{ display: 'none' }}
        ref={toolbox}>
          {children}
      </div>
    </div>
  );
}

export default BlocklyComponent;
