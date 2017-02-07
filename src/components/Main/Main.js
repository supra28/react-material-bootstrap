import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from '../Login'

injectTapEventPlugin();



export default class Main extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
        <Login/>
    </div>
  </MuiThemeProvider>
    );
  }
}
