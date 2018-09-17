import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const FilterBar = props => {
  return (
    <nav className="filterBar">
      <Button style={{"marginLeft": 20}}color="inherit" className="showAll" onClick={() => props.getFiles()} >Show All</Button>
      <Button style={{"marginLeft": 20}}color="inherit" className="newsletters" onClick={() => props.getFiles("Newsletters")} >Newsletters</Button>
      <Button style={{"marginLeft": 20}}color="inherit" className="sports" onClick={() => props.getFiles("Sports")} >Sports</Button>
      <Button style={{"marginLeft": 20}}color="inherit" className="teachersNotes" onClick={() => props.getFiles("Teachers_Notes")} >Teachers Notes</Button>
      <Button style={{"marginLeft": 20}}color="inherit" className="schoolEvents" onClick={() => props.getFiles("School_Events")} >School Events</Button>
      <Button style={{"marginLeft": 20}}color="inherit" className="faq" onClick={() => props.getFiles("FAQ")} >FAQ</Button>
    </nav>
  );
};


export default FilterBar;