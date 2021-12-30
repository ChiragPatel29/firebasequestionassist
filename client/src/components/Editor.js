import React, { Component } from 'react';
import AceEditor from "react-ace";
import "brace/mode/java";
import "brace/theme/monokai";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import ReactAce from 'react-ace-editor';

function onChange(newValue) {
  console.log("change", newValue);
}
export default class Editor extends Component {

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue, e) {
    console.log(newValue, e);

    const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(editor.getValue()); // Outputs the value of the editor
  }
  render() {
    return (
      <ReactAce
        mode="javascript"
        theme="monokai"
        setReadOnly='false'
        onChange={this.onChange}
        style={{ height: '400px', width:'600px' }}
        ref={instance => { this.ace = instance; }} // Let's put things into scope
      />
    );
  }
}