import React, { Component } from "react";
const moment = require('moment');


//Material UI Imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import Bookmark from '@material-ui/icons/Bookmark';


const Tile = props => {
  return (
    <Card title={props.tile.category} className="card" style={{maxWidth: 345}} elevation={4}>
      <CardActionArea style={{display:'flex', justifyContent: "space-around"}} >
        <CardMedia className="media" style={{height: 190, width: 345, objectFit: 'cover'}} image={props.tile.img_url} component="img"/>
      </CardActionArea>
      <CardContent>
        <Typography id='cardCaption' gutterBottom variant="headline" component="h2">
          {props.tile.caption}
        </Typography>
        <Typography component="p">
          {moment(props.tile.timeStamp).format("MMMM Do YYYY")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={props.tile.doc_url}>
          Open Document
        </Button>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Bookmark Border">
          {props.isPinned ? <Bookmark /> : <BookmarkBorder />}
        </IconButton>
      </CardActions>
    </Card>  
  );
}


export default Tile;


/**
 * NOTES: 
 * Tile Component
 * Material UI was used to create the styling for the Card. 
 * Images for the card can be updated by the user (or default images by the app). 
 * Card Actions include Open Document to open the doc_url on a seperate page and Favorite Icon 
 * * Currently the favorite icon does not function 
 * to change september to sept change from "MMMM Do YYYY" to "MMM Do YYYY"
 */