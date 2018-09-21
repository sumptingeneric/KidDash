import React from 'react';

import Header from './header.jsx';
import Admin from './admin.jsx';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.setUsername = this.setUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setUsername(event) {
    this.setState({ username: event.target.value });
  }

  getInitialState(event) {
    return { submitted: false };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    if (this.state.submitted) {
      return (
        <Admin username={this.state.username} changeView={this.changeView} />
      );
    } else {
      return (
        <div
          style={{ width: 250, marginLeft: 'auto', marginRight: 'auto' }}
          className="Login"
        >
          <Paper
            style={{
              maxWidth: 350,
              height: 260,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Typography style={{ marginLeft: 20 }} variant="title">
              <h2>Admin Log In: </h2>
              <form onSubmit={this.handleSubmit}>
                <label>
                  {' '}
                  Username: &nbsp;
                  <input
                    style={{ width: 200, display: 'flex' }}
                    type="text"
                    value={this.state.value}
                    onChange={this.setUsername}
                  />
                </label>
                <br />
                <div>
                  <label>
                    {' '}
                    Password: &nbsp;
                    <input
                      style={{ width: 200, display: 'flex' }}
                      type="text"
                      id="schoolcode"
                      name="schoolcode"
                    />
                  </label>
                </div>
                <Button
                  style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 15,
                    marginBottom: 15,
                    display: 'flex'
                  }}
                  variant="contained"
                  type="submit"
                  value="Submit"
                >
                  {' '}
                  Submit{' '}
                </Button>
              </form>
            </Typography>
          </Paper>
        </div>
      );
    }
  }
}

export default Login;

/**
 * NOTES:
 * Login Page
 * Material UI was used to create the styling for the form box.
 * This login page is rendered on the click event in the hamburger menu when Admin is clicked.
 * Once the username and password is input it will automatically refresh to the admin page.
 * This compenet adds the username to the Admin page.
 */
