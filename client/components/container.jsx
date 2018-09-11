import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tiles from './tiles.jsx'
import Admin from './admin.jsx';
import TilesList from './tilesList.jsx';


const Container = props => {
  return (
    <div>
      <TilesList files={props.files} />
      {/* <Admin /> */}
    </div> 
  ) 
}


export default Container;

{/* <div className='admin-page'>
  <Admin />
</div> */}