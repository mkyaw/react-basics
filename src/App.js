import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabComponent from './components/MUI/TabComponent';

// ** TEST COMPONENT
// import TestComponent from './components/TestComponent';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'starter input - controlled component',
      users: [
                {id: '001', name: 'myo', email: 'myo@gmail.com'}, 
                {id: '002', name: 'john', email: 'john@gmail.com'}, 
                {id: '003', name: 'jack', email: 'jack@gmail.com'}
              ]
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
          <div onChange={this.onTextInputChange}>
            <TabComponent input={this.state.input} users={this.state.users} />
          </div>
        </MuiThemeProvider>
        
        {/* TEST COMPONENT */}
        {/*
        <MuiThemeProvider>
          <TestComponent users={this.state.users}/>
        </MuiThemeProvider>
        */}
      </div>
    );
  }
}

export default App;