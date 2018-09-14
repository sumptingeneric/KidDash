import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import Header from './components/header.jsx';
import FilterBar from './components/filterBar.jsx';
import Container from './components/container.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      view: 'home'
    }
    this.getFilesFromDatabase = this.getFilesFromDatabase.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  getFilesFromDatabase(category) {
    let endpoint = '/api/docs/';
    if (category !== undefined) {
      endpoint += category;
      console.log(endpoint);
    }
    axios.get(endpoint)
      .then((response) => {
        this.setState({
          files: response.data
        });
        console.log(this.state.files);
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  componentDidMount() {
    this.getFilesFromDatabase();
  }

  changeView(option) {
    this.setState({
      view: option
    })
  }

  render() {
    return (
      <div>
        <Header changeView={this.changeView} getFiles={this.getFilesFromDatabase} view={this.state.view} />
        <Container files={this.state.files} view={this.state.view} />
      </div>
    );
  }
};
ReactDOM.render(<App />, document.getElementById('App'));