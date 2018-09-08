import React, { Component } from "react";


  function Tile(props) {
    return (
      <div className="tile" title={props.catagory}>
        <div className="date">{props.timeStamp}</div>
        <div className="linkimg">
          <a href={props.doc_url}>
            <img
              className="imglink"
              alt="happycoding"
              src={props.img_url}
              width="100"
              height="100"
            />
          </a>
        </div>
        <h3 className="tileCaption">{props.caption}</h3>
      </div>
    );
  };


export default Tile;
