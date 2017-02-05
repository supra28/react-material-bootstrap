import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import styles from './App.css'

injectTapEventPlugin();




class App extends Component {
  state = { greetData: "Hello" }
  render() {
    var {greetData} = this.state;
    return (
      <MuiThemeProvider>
      <div className="app">
        <div className={styles.AppHeader}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {greetData}, To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RaisedButton label="Default"/>
      </div>
    </MuiThemeProvider>
    );
  }
}
export default App;
