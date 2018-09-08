import React, { Component } from "react";
import ReactDOM from "react-dom";
import Container from './components/container.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }
  render () {
    return (
      <div>Hello World! <Container /> </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('App'));