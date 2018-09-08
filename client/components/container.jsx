import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tiles from './tiles.jsx'
import Admin from './admin.jsx';

class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Admin /> 
      </div>
    )
  }
}

export default Container;