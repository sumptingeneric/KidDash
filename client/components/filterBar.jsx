import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const FilterBar = props => {
  return (
    <nav className="filterBar">
      <Button variant="contained" style={{"marginLeft": 20}}color="primary" className="showAll" onClick={() => props.getFiles()} >Show All</Button>
      <Button variant="contained" style={{"marginLeft": 20}}color="primary" className="newsletters" onClick={() => props.getFiles("Newsletters")} >Newsletters</Button>
      <Button variant="contained" style={{"marginLeft": 20}}color="primary" className="sports" onClick={() => props.getFiles("Sports")} >Sports</Button>
      <Button variant="contained" style={{"marginLeft": 20}}color="primary" className="teachersNotes" onClick={() => props.getFiles("Teachers_Notes")} >Teachers Notes</Button>
      <Button variant="contained" style={{"marginLeft": 20}}color="primary" className="schoolEvents" onClick={() => props.getFiles("School_Events")} >School Events</Button>
      <Button variant="contained" style={{"marginLeft": 20}}color="primary" className="faq" onClick={() => props.getFiles("FAQ")} >FAQ</Button>
    </nav>
  );
};


export default FilterBar;