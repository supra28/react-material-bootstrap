import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const style = {
  minHeight: 50,
  padding: 10,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};


export default class Login extends Component {
 state={username:'',password:''}
  handleSubmit=(e)=>{
    console.log(this.state);
    e.preventDefault();
  }
  handleChange=(e)=>{
    const value =  e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
        <div className='container'>
          <div className='col-sm-4 col-sm-offset-4'>
        <Paper style={style} zDepth={3}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="username"
            hintText="Username"
            floatingLabelText="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          /><br />
          <TextField
            name="password"
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          /><br/>
        <RaisedButton primary type="submit" label="Submit"/>
        </form>
      </Paper>
      </div>
    </div>
    );
  }
}
