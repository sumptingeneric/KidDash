import React from "react";
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      schoolcode: ""
    }
  }

  render() {
    return (
      <div className="Login">
        <h1>Log In</h1>
        <form>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username"></input>
          </div>
          <div>
            <label htmlFor="schoolcode">School Code: </label>
            <input type="text" id="schoolcode" name="schoolcode"></input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      )
  }
}
export default Login;