import React from "react";
import TilesList from "./tilesList.jsx";

const Container = props => {
  return (
    <div>
      <TilesList
        files={props.files}
        role={props.role}
        deleteFile={props.deleteFile}
      />
    </div>
  );
};

export default Container;

/**
 * NOTES:
 * Container is used to send all of our documents to titlesList to be render each document to the page
 */
