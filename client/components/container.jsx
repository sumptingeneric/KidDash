import React, { Component } from "react";
import Admin from "./admin.jsx";
import TilesList from "./tilesList.jsx";

const Container = props => {
  return (
    <div>
      <TilesList
        files={props.files}
        deleteFile={props.deleteFile}
        role={props.role}
      />
    </div>
  );
};

export default Container;

/**
 * NOTES:
 * Container is used to send all of our documents to titlesList to be render each document to the page
 */
