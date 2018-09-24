import React, { Component } from "react";
import Tiles from "./tiles.jsx";

//Material UI
import Grid from "@material-ui/core/Grid";

const TilesList = props => {
  return (
    <div>
      <div className="tilesListPage">
        <Grid container spacing={40}>
          {props.files.map(tile => (
            <Grid key={tile._id} item sm={6} md={4} lg={3}>
              <Tiles
                tile={tile}
                key={tile._id}
                deleteFile={props.deleteFile}
                role={props.role}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default TilesList;

/**
 * NOTES:
 * Tiles List Component
 * Material UI was used to create the Grid for all of the cards to render neatly on the page.
 * The grid is set to adjust the amount of cards on the screen depending on the size of th window.
 *
 */
