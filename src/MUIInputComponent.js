import React from 'react';
import TextField from 'material-ui/TextField';

const MUIInputComponent = ({input}) => {
  return (
    <div>
    <h1>Test Text Input: {input}</h1>
    <TextField
      id="test-text-input"
    />
    </div>
  );
}

export default MUIInputComponent;