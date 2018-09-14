import React, { Component } from 'react';
import Admin from './admin.jsx';
import TilesList from './tilesList.jsx';


const Container = props => {
  return (
    <div>
      <TilesList files={props.files} />
    </div>
  );
}


export default Container;
