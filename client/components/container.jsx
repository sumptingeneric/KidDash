import React, { Component } from 'react';
import Admin from './admin.jsx';
import TilesList from './tilesList.jsx';


const Container = props => {
  const renderView = () => {
    if (props.view === "home") {
      return <TilesList files={props.files} />
    }
    else if (props.view === "admin") {
      return <Admin />
    }
  } 
  return (
    <div>
      <TilesList files={props.files} />
    </div>
  );
}


export default Container;