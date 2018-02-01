import React from 'react';
import TextField from 'material-ui/TextField';

const InputComponent = ({input}) => {
  return (
    <div style={{paddingLeft: '1.2em'}}>
        <h1>Test Text Input: {input}</h1>
        <TextField
          id="test-text-input"
          hintText="Enter test text here"
        />
    </div>
  );
}

export default InputComponent;