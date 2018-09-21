import React, { Component } from 'react';
import Admin from './admin.jsx';
import TilesList from './tilesList.jsx';


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPinned: true
    }
    this.togglePin = this.togglePin.bind(this);
  }

  togglePin() {
    if (!this.state.isPinned) {
      this.setState({
        isPinned: true
      });
    } else {
      this.setState({
        isPinned: false
      });
    }
  }

  render() {
    return (
      <div>
        <TilesList 
          files={this.props.files} 
          isPinned={this.state.isPinned}
          togglePin={this.togglePin}
        />
      </div>
    );
  }
}

export default Container;

/**
 * NOTES:
 * Container is used to send all of our documents to titlesList to be render each document to the page
 */