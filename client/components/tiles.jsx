import React, { Component } from "react";
const moment = require('moment');

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Tile = tile => {
  return (
    <Card title={tile.category} className="card" style={{height: 325, maxWidth: 345, justifyContent: "space-around"}} elevation={8}>
      <CardActionArea style={{display:'flex', justifyContent: "space-around"}} >
        <CardMedia className="media" height="140" component="img" style={{marginLeft: 15, marginTop: 18, objectFit: 'cover', justify: 'center', position: 'relative'}}image={tile.img_url}>
        </CardMedia>
      </CardActionArea>
      <Typography style={{display:'flex', justifyContent: "space-around"}} gutterBottom variant="headline" component="h2">
        {tile.caption}
      </Typography>
      <Typography style={{display:'flex', justifyContent: "space-around"}} component="p">
        {moment(tile.timeStamp).format("MMMM Do YYYY")}
      </Typography>
      <CardActions>
        <Button href={tile.doc_url} size="small" color="primary">
          Open Document
        </Button>
      </CardActions>
    </Card>  
    );
}

export default Tile;

/**
 * to change september to sept change from "MMMM Do YYYY" to "MMM Do YYYY"
 */