import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TestComponent from './components/MUI/TestComponent';
import InputComponent from './components/MUI/InputComponent';

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
          <TestComponent />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <div onChange={this.onTextInputChange}>
          <InputComponent input={this.state.input}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;