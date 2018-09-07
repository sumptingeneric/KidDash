import React, { Component } from "react";
import ReactDOM from "react-dom";


var buttonStyle = {
  margin: '10px 10px 10px 0'
};

class FilterBar extends React.Component {
  render() {
    return (
      <nav className="FilterBar">
        <button>Home</button>
        <button>Newsletters</button>
        <button>Sports</button>
        <button>Teachers Notes</button>
        <button>School Events</button>
        <button>School Events</button>
        <button>FAQ</button>
      </nav>
    )
  }
}

export default FilterBar;