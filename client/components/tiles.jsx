import React, { Component } from "react";
import Modal from "./modal.jsx";

const moment = require('moment');
const axios = require('axios');

//Material UI Imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import Bookmark from '@material-ui/icons/Bookmark';


class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPinned: this.props.tile.pinnedBy.includes("currentUserId"),
      isUseful: this.props.tile.likedBy.includes("currentUserId"), 
      showModal: false
    }
    this.updatePin = this.updatePin.bind(this);
    this.updateUseful = this.updateUseful.bind(this);
    this.togglePin = this.togglePin.bind(this);
    this.toggleUseful = this.toggleUseful.bind(this);
    this.toggleShowModal = this.toggleShowModal.bind(this);
  }

  updatePin(tile) {
    let pinnedBy = tile.pinnedBy;
    if (!this.state.isPinned) {
      pinnedBy.push("currentUserId");
    } else {
      let indexOfUserToRemove = pinnedBy.indexOf("currentUserId");
      pinnedBy.splice(indexOfUserToRemove, 1);   
    }
    axios.put('/api/file', {
      id: tile._id,
      update: {
        pinnedBy: pinnedBy
      }
    })
      .then(res => {
        this.togglePin();
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateUseful(tile) {
    let likedBy = tile.likedBy;
    if (!this.state.isUseful) {
      likedBy.push("currentUserId");
    } else {
      let indexOfUserToRemove = likedBy.indexOf("currentUserId");
      likedBy.splice(indexOfUserToRemove, 1);   
    }
    axios.put('/api/file', {
      id: tile._id,
      update: {
        likedBy: likedBy
      }
    })
      .then(res => {
        this.toggleUseful();
      })
      .catch(err => {
        console.log(err);
      });    
  }

  togglePin() {
    if (!this.state.isPinned) {
      this.setState({
        isPinned: true
      });  
    } else {
      this.setState({
        isPinned: false
      });  
    }  
  }  
 
  toggleUseful() {
    if (!this.state.isUseful) {
      this.setState({
        isUseful: true
      });  
    } else {
      this.setState({
        isUseful: false
      });  
    }  
  }  

  toggleShowModal() {
    if (!this.state.showModal) {
      this.setState({
        showModal: true
      });  
    } else {
      this.setState({
        showModal: false
      });  
    }      
  }

  render() {
    return (
      <Card title={this.props.tile.category} className="card" style={{maxWidth: 345}} elevation={4}>
        <CardActionArea style={{display:'flex', justifyContent: "space-around"}} >
          <CardMedia 
            className="media" 
            style={{height: 190, width: 345, objectFit: 'cover'}} 
            image={this.props.tile.imgUrl} 
            component="img"
            onClick={this.toggleShowModal}
          />
        </CardActionArea>
        <CardContent>
          <Typography id='cardCaption' gutterBottom variant="headline" component="h2">
            {this.props.tile.caption}
          </Typography>
          <Typography component="p">
            {moment(this.props.tile.timeStamp).format("MMMM Do YYYY")}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={this.props.tile.docUrl}>
            Open Document
          </Button>
          <IconButton aria-label="Add to favorites" onClick={() => this.updateUseful(this.props.tile)} >
            {this.state.isUseful ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
          <IconButton aria-label="Bookmark Border" onClick={() => this.updatePin(this.props.tile)} >
            {this.state.isPinned ? <Bookmark /> : <BookmarkBorder />}
          </IconButton>
        </CardActions>
      </Card>  
    );
  }
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