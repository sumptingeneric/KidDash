import React from "react";


const FilterBar = props => {
  return (
    <nav className="filterBar">
      <button className="showAll" onClick={() => props.getFiles()} >Show All</button>
      <button className="newsletters" onClick={() => props.getFiles("Newsletters")} >Newsletters</button>
      <button className="sports" onClick={() => props.getFiles("Sports")} >Sports</button>
      <button className="teachersNotes" onClick={() => props.getFiles("Teachers_Notes")} >Teachers Notes</button>
      <button className="schoolEvents" onClick={() => props.getFiles("School_Events")} >School Events</button>
      <button className="faq" onClick={() => props.getFiles("FAQ")} >FAQ</button>
    </nav>
  );
};


export default FilterBar;