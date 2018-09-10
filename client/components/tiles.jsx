import React, { Component } from "react";



const Tile = tile => { 
    return (
      <div className="tile" title={tile.catagory}>
        <div className="date">{tile.timeStamp}</div>
        <div className="linkimg">
          <a href={tile.doc_url}>
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
