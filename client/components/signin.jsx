import React from "react";
import axios from "axios";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
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
        this.props.handleSignIn(
          profile.getName(),
          profile.getEmail(),
          profile.getImageUrl()
        );
        this.props.changeView("Home");

        console.log(res.data);
        console.log("REQUEST SENT");
      })
      .catch(err => {
        throw err;
      });
    // this.props.handleSignIn(profile.getEmail());
  }

  render() {
    return (
      <div>
        <div id="my-signin2" />
      </div>
    );
  }
}

export default SignIn;
