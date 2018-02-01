import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MUITestComponent from './MUITestComponent';
import MUIInputComponent from './MUIInputComponent';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onTextInputChange = this.onTextInputChange.bind(this);
  }

  onTextInputChange(evt) {
    this.setState({input: evt.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MuiThemeProvider>
          <MUITestComponent />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div onChange={this.onTextInputChange}>
          <MUIInputComponent input={this.state.input}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;