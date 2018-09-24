import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Teacher from "./teacher/index.jsx";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: ""
    };
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      gapi.signin2.render("my-signin2", {
        scope: "profile email",
        width: 250,
        height: 50,
        longtitle: true,
        theme: "light",
        onsuccess: this.onSignIn
      });
    }, 0);
  }

  onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    axios
      .get("/login", {
        params: {
          username: profile.getName(),
          email: profile.getEmail()
        }
      })
      .then(res => {
        console.log("TYPE:", res.data[0].type);
        console.log("REQUEST SENT");
        if (res.data[0].type === "Parent") {
          this.props.handleSignIn(
            profile.getName(),
            profile.getEmail(),
            profile.getImageUrl()
          );
          this.props.changeView("Home");
        } else {
          ReactDOM.render(
            <Teacher handleLogOut={this.props.handleLogOut} />,
            document.getElementById("App")
          );
        }
      })
      .catch(err => {
        throw err;
      });
  }

  // render login or parent view or teacher view.
  renderView() {
    axios.get("/session").then(res => {
      if (res.data[0] === undefined) {
        console.log("No SESSION!");
      } else {
        console.log("IN SESSION!");
        if (res.data[0].type === "Parent") {
          this.props.handleSignIn(
            res.data[0].username,
            res.data[0].email,
            null
          );
          this.props.changeView("Home");
        } else {
          ReactDOM.render(
            <Teacher handleLogOut={this.props.handleLogOut} />,
            document.getElementById("App")
          );
        }
      }
    });
  }

  render() {
    return (
      <div>
        <div id="my-signin2" />
        {this.renderView()}
      </div>
    );
  }
}

export default SignIn;
