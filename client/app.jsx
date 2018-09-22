import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Header from "./components/header.jsx";
import FilterBar from "./components/filterBar.jsx";
import Container from "./components/container.jsx";
import Admin from "./components/admin.jsx";
import Login from "./components/login.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "Home",
      files: []
    };
    this.getFilesFromDatabase = this.getFilesFromDatabase.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
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
          <Header changeView={this.changeView} />
          <Admin />
        </div>
      );
    } else if (view === "Login") {
      return (
        <div>
          <Header changeView={this.changeView} />
          <Login />
        </div>
      );
    } else if (view === "Home") {
      return (
        <div>
          <Header
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
