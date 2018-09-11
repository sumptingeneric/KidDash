import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tiles from './tiles.jsx'


const TilesList = props => {
  return (
    <div className="tilesListPage">
    
      {props.files.map((tile) => (
          <Tiles {...tile} key={tile._id} />
        ))}
    </div>
  );
};


export default TilesList;