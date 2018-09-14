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
    // make an else to handle a single tile view
  } // close renderView

  return (
    <div>
      {renderView()}
    </div>
  )
}


export default Container;

{/* <div className='admin-page'>
  <Admin />
</div> */}