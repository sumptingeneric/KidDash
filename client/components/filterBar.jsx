import React, { Component } from "react";
import ReactDOM from "react-dom";


class FilterBar extends React.Component {

  showAll() {
    alert("Show All");
  }

  showNewsletters() {
    alert("Show only Newsletters");
  }

  showSports() {
    alert("Show only Sports");
  }

  showTeachersNotes() {
    alert("Show only Teachers Notes");
  }

  showSchoolEvents() {
    alert("Show only School Events");
  }

  showFAQ() {
    alert("Show only FAQ");
  }

  render() {
    return (
      <nav className="FilterBar">
        <button class="showall" onClick={this.showAll}>Show All</button>
        <button class="newsletters" onClick={this.showNewsletters}>Newsletters</button>
        <button class="sports" onClick={this.showSports}>Sports</button>
        <button class="teachersnotes" onClick={this.showTeachersNotes}>Teachers Notes</button>
        <button class="schoolevents" onClick={this.showSchoolEvents}>School Events</button>
        <button class="faq" onClick={this.showFAQ}>FAQ</button>
      </nav>
    );
  }
};


export default FilterBar;