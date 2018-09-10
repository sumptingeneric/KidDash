import React, { Component } from "react";
import ReactDOM from "react-dom";


class Header extends React.Component {
  showAdmin() {
    alert("Go to admin page");
  }
  render() {
    return (
      <div className="Header">
        <button onClick={this.showAdmin}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/32px-Hamburger_icon.svg.png"></img></button>
        <h1>Kid Dash</h1>
      </div>
    );
  }
};


export default Header;
