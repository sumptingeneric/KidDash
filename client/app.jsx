import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import Header from './components/header.jsx';
import FilterBar from './components/filterBar.jsx';
import Container from './components/container.jsx'
import Admin from "./components/admin.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'main',
      files: []
    }
    this.getFilesFromDatabase = this.getFilesFromDatabase.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
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
      .catch(function (error) {
        console.log(error);
      })
  };

  componentDidMount() {
    this.getFilesFromDatabase();
  }

  changeView(option) {
    this.setState({
      view: option,
    })
  }

  renderView() {
    const {view} = this.state;
    if (view === 'Admin') {
      return <Admin />
    } else if (view === 'main') {
      return ( 
        <div>
          <Header getFiles = {this.getFilesFromDatabase}/> 
          <Container files = {this.state.files}/> 
        </div>
      );
    }
  }

  render() {
    return ( 
      <div>
        <button type='button' onClick={() => this.changeView('Admin')}> Admin </button> 
        <button type='button'onClick={() => this.changeView('main')}> Home </button> 
          {this.renderView()}
      </div>
    );
  }
};


ReactDOM.render( < App / > , document.getElementById('App'));