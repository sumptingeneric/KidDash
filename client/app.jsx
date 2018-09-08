import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './components/header.jsx';
import FilterBar from './components/filterBar.jsx';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files:[]
    }
    this.getFilesFromDatabase = this.getFilesFromDatabase.bind(this);
  }

  getFilesFromDatabase() {
    var self = this;
  //   axios.get(
  //     '/api/docs'),
  //     .then(response) => {
  //       self.setState({
  //         files: response;
  //       })
  //     }
  //   )
  // }
    axios.get('/api/docs') 
      .then (function (response) { 
        self.setState({
          files: response.data
        });
        //console.log(response.data)
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
      <div><Header />
      <FilterBar /></div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('App'));