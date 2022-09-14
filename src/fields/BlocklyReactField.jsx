import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import * as Blockly from 'blockly/core';

class BlocklyReactField extends Blockly.Field {

  // SERIALIZABLE = true

  static fromJson(options) {
    return new BlocklyReactField(options['text']);
  }

  showEditor_() {
    this.div_ = Blockly.DropDownDiv.getContentDiv();

    // ReactDOM.render(this.render(), this.div_);
    this.div_.render(this.render());

    var border = this.sourceBlock_.style.colourTertiary;
    border = border.colourBorder || border.colourLight;
    Blockly.DropDownDiv.setColour(this.sourceBlock_.getColour(), border);

    Blockly.DropDownDiv.showPositionedByField(
      this, this.dropdownDispose_.bind(this));
  }

  dropdownDispose_() {
    ReactDOM.unmountComponentAtNode(this.div_);
  }

  render() {
    return <FieldRenderComponent />
  }
}

class FieldRenderComponent extends React.Component {

  render() {
    return <div style={{ color: '#fff' }}>
      Hello from React!
        </div>;
  }
}

Blockly.fieldRegistry.register('field_react_component', BlocklyReactField);

export default BlocklyReactField;
