import React, {useEffect, useRef}  from 'react';
import Blockly from 'blockly/core'; // Blockly API
import BlocklyJS from 'blockly/javascript'; // Blockly Code Generation
import locale from 'blockly/msg/en'; // Language
import 'blockly/blocks'; // Block type definitions
import {Block, Category, Value, Field, Shadow} from '../blockHelpers.js';
import './BlocklyComponent.css';

// Can change this to update dynamically with a dropdown input.
Blockly.setLocale(locale);

const BlocklyComponent = ({config, codeHandler}) => {
  const blocklyDiv = useRef();
  const toolbox = useRef();
  const primaryWorkspace = useRef();

  // Generates JavaScript from blocks.
  const generateCode = (event) => {
    var code = BlocklyJS.workspaceToCode(
      primaryWorkspace.current
    );
    codeHandler(code);
  };

  // Watch the workspace for changes.
  useEffect(() => {
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
    // Generate code when a new block is added.
    primaryWorkspace.current.addChangeListener(generateCode);
  }, [primaryWorkspace, toolbox, blocklyDiv, config]);

  return (
    <div className='BlocklyComponent'>

      {/* Create empty div to contain blocks. */}
      <div ref={blocklyDiv} id="blocklyDiv" />

      {/* Toolbox contains all starting blocks. */}
      {/* These only get displayed when dragged into the workspace. */}
      <div
        className='blockly-toolbox'
        style={{ display: 'none' }}
        ref={toolbox}>

        <Category name='Logic' colour='200'>
          <Block type="controls_if" class='block'/>
          <Block type="logic_boolean" />
          <Block type="logic_compare" />
          <Block type="logic_operation" />
        </Category>

        <Category name='Loops' colour='100'>
          <Block type="controls_repeat_ext">
            <Value name="TIMES">
              <Shadow type="math_number">
                <Field name="NUM">10</Field>
              </Shadow>
            </Value>
          </Block>
        </Category>

        {/* Easiest to just create the category for these two and include everything inside. */}
        <Category name="Text" categorystyle="text_category">
          <Block type="text_print" />
          <Block type="text"></Block>
        </Category>

        <Category name="Variables" categorystyle="variable_category" custom="VARIABLE"></Category>
        <Category name='Functions' categorystyle="procedure_category" custom="PROCEDURE">
        </Category>
      </div>
    </div>
  );
}

export default BlocklyComponent;
