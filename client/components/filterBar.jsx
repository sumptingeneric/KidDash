import React, { Component } from "react";
import ReactDOM from "react-dom";


class FilterBar extends React.Component {
  showAlert() {
    alert("Im an alert");
  }


  render() {

    return (
      <nav className="FilterBar">
        <button onClick={this.showAlert}>Show All</button>
        <button onClick={this.showAlert}>Newsletters</button>
        <button onClick={this.showAlert}>Sports</button>
        <button onClick={this.showAlert}>Teachers Notes</button>
        <button onClick={this.showAlert}>School Events</button>
        <button onClick={this.showAlert}>School Events</button>
        <button onClick={this.showAlert}>FAQ</button>
      </nav>
    )
  }
}

export default FilterBar;