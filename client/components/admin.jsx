import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: '',
      placeholder: 'file to be uploaded',
      value: '',
      categroy: 'Newsletter'      
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCategroy = this.setCategroy.bind(this);

  }

  setCategroy(event) {
    this.setState({ categroy: event.target.value})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick() {
    let fileInfo = {}
    fileInfo.url = this.state.value;
    fileInfo.categroy = this.state.categroy

    console.log(`i was clicked to send off-->: ${fileInfo.file}`);
    console.log(`this selected item-->: ${fileInfo.categroy}`);

    axios.post('/api/docs', { fileInfo })
    .then(res => {
      console.log(res)
    })
  }

  render() {
    return (
    <div>

    <h2>Hello admin select which subject you like to upload to then click the submint button</h2>

        Please input Document name -> <input type='text' value={this.state.caption}></input>

    Pick upload Categroy: <select onChange={this.setCategroy}>
      <option value="Newsletter">Newsletter</option>
      <option value="Sports">sports</option>
      <option value="Teacher_Notes">Teacher_Notes</option>
      <option value="FAQ">FAQ</option>
      <option value="School_Events">School_Events</option>
      <option value="After_School">After_School</option>
    </select>

    URL for google Doc -> <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.state.placeholder} />
    <button onClick={this.handleClick}>SUBMINT</button>

    Or upload file <input type='file'></input>
    </div>
    )
  }
}


export default Admin;


