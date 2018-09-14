import React, { Component } from 'react';
import Tiles from './tiles.jsx'

import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});


const TilesList = props => {
  return (
    <React.Fragment>
      <div className="tilesListPage">
        <Grid container spacing={40}>
        {props.files.map((tile) => (
            <Grid key={tile._id} item sm={6} md={4} lg={3}>
               <Tiles {...tile} key={tile._id} />
            </Grid>
            ))}
        </Grid>   
      </div>
    </React.Fragment>
  
  );
};


export default TilesList;