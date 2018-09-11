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
      files:[]
    }
    this.getFilesFromDatabase = this.getFilesFromDatabase.bind(this);
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
      })
      .catch (function (error) {
        console.log(error);
      })
  };

  componentDidMount() {
    this.getFilesFromDatabase();
  }


  render () {
    return (
      <div>
        <Header />
        <FilterBar getFiles={this.getFilesFromDatabase} />
        <Container files={this.state.files} />
      </div>
    );
  }
};
ReactDOM.render(<App />, document.getElementById('App'));