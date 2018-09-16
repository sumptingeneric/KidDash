import React from "react";
//import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Admin from './admin.jsx';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'; 
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }
    this.setUsername = this.setUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setUsername(event) {
    this.setState({username: event.target.value});
  }

  getInitialState(event) {
    return {"submitted": false}
  }


  handleSubmit(event) {
    //Go to admin page
   event.preventDefault();
   this.setState({"submitted": true});
    //return <Admin />
    //alert('Hello: ' + this.state.username);
  }


  render() {
    if (this.state.submitted) {
      return <Admin username={this.state.username} changeView= {this.changeView}/>
    }
    else {
      return (
        <div style={{width: 350, marginLeft: 'auto', marginRight: 'auto'}}className="Login">
        <Paper style={{maxWidth: 350, height: 140, display: 'flex', alignItems: 'center'}}>
          <Typography style={{marginLeft: 20}} variant="title">
          <h2>Log In</h2>
          <form onSubmit={this.handleSubmit}>
              <label> Username:
                <input type="text" value={this.state.value} onChange={this.setUsername} />
              </label>
              <Button style={{marginLeft: 10}}variant="contained" type="submit" value="Submit"> Submit </Button>
          </form>
          </Typography>
        </Paper>
        </div>
      );
    }
  }
}


export default Login;

 //schoolcode: ""
 // <div>
 //            <label htmlFor="schoolcode">School Code: </label>
 //            <input type="text" id="schoolcode" name="schoolcode"></input>
 //          </div>