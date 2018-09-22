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
    this.props.handleSignIn(
      profile.getName(),
      profile.getEmail(),
      profile.getImageUrl()
    );

    axios
      .get("http://localhost:8079/login?email=" + profile.getEmail())
      .then(res => {
        console.log("REQUEST SENT");
      })
      .catch(err => {
        throw err;
      });
    // this.props.handleSignIn(profile.getEmail());
    this.props.changeView("Home");
  }

  render() {
    return (
      <div>
        <div id="my-signin2" data-onsuccess={this.onSignIn} />
      </div>
    );
  }
}

export default SignIn;
