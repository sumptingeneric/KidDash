import React, { Component } from "react";
const moment = require('moment');


const Tile = tile => { 
    return (
      <div className="tile" title={tile.catagory}>
        <div className="date">{moment(tile.timeStamp).format("MMMM Do YYYY")}</div>
        <div className="linkimg">
          <a src={tile.url}>
            
            <img
              className="imglink"
              alt="happycoding"
              src={tile.img_url}
              width="100"
              height="100"
            />
          </a>
        </div>
        <h3 className="tileCaption">{tile.caption}</h3>
      </div>
    );
  };


export default Tile;

/**
 * to change september to sept change from "MMMM Do YYYY" to "MMM Do YYYY"
 */