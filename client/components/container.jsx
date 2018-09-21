import React, { Component } from 'react';
import Admin from './admin.jsx';
import TilesList from './tilesList.jsx';


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPinned: false,
      isUseful: false
    }
    this.togglePin = this.togglePin.bind(this);
    this.toggleUseful = this.toggleUseful.bind(this);
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
 
  toggleUseful() {
    if (!this.state.isUseful) {
      this.setState({
        isUseful: true
      });
    } else {
      this.setState({
        isUseful: false
      });
    }
  }

  render() {
    return (
      <div>
        <TilesList 
          files={this.props.files}
          isUseful={this.state.isUseful}
          toggleUseful={this.toggleUseful} 
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