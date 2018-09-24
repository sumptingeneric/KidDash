import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Header from "./components/header.jsx";
import Container from "./components/container.jsx";
import Admin from "./components/admin.jsx";
import Login from "./components/login.jsx";
import SignIn from "./components/signin.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "",
      files: [],
      username: "",
      email: "",
      image: ""
    };
    this.getFilesFromDatabase = this.getFilesFromDatabase.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  getFilesFromDatabase(category) {
    let endpoint = "/api/files/";
    if (category !== undefined) {
      endpoint += category;
      console.log(endpoint);
    }
    axios
      .get(endpoint)
      .then(response => {
        this.setState({
          files: response.data
        });
        console.log(this.state.files);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleSignIn(fullName, email, imageUrl) {
    this.setState({
      username: fullName,
      email: email,
      image: imageUrl
    });
    this.changeView("Home");
  }
  handleLogOut() {
    this.setState({
      username: "",
      email: "",
      image: ""
    });
  }

  componentDidMount() {
    this.getFilesFromDatabase();
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "Admin") {
      return (
        <div>
          <Header
            handleLogOut={this.handleLogOut}
            changeView={this.changeView}
          />
          <Admin />
        </div>
      );
    } else if (this.state.username === "") {
      return (
        <div>
          <Header
            handleLogOut={this.handleLogOut}
            changeView={this.changeView}
          />
          <SignIn
            handleLogOut={this.handleLogOut}
            handleSignIn={this.handleSignIn}
            changeView={this.changeView}
          />
        </div>
      );
    } else if (view === "Login") {
      return (
        <div>
          <Header
            handleLogOut={this.handleLogOut}
            changeView={this.changeView}
          />
          <Login />
        </div>
      );
    } else if (view === "Home") {
      return (
        <div>
          <Header
            handleLogOut={this.handleLogOut}
            getFiles={this.getFilesFromDatabase}
            view={this.state.view}
            changeView={this.changeView}
          />
          <Container files={this.state.files} />
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("App"));

/**
 * NOTES:
 * render in app is used for our base and where our view switcher lives and renders based on
 * the value of view
 * we pass our fetched data to other components
 */
