import React, { Component } from "react";
const moment = require('moment');

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';



const Tile = tile => {
  return (
    <Card title={tile.category} className="card" style={{maxWidth: 345}} elevation={4}>
      <CardActionArea style={{display:'flex', justifyContent: "space-around"}} >
        <CardMedia className="media" 
          style={{height: 190, width: 345, objectFit: 'cover'}}
          image={tile.img_url}
          component="img"
          />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {tile.caption}
        </Typography>
        <Typography component="p">
          {moment(tile.timeStamp).format("MMMM Do YYYY")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={tile.doc_url}>
          Open Document
        </Button>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>  
    );
}

export default Tile;

/**
 * to change september to sept change from "MMMM Do YYYY" to "MMM Do YYYY"
 */