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
      category: 'Newsletters'      
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setcaption = this.setcaption.bind(this);

  }

  setcaption(event) {
    this.setState({caption: event.target.value})
  }

  setCategory(event) {
    this.setState({ category: event.target.value})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick() {
    let fileInfo = {};
    fileInfo.category = this.state.category;
    fileInfo.caption = this.state.caption;
    fileInfo.doc_url = this.state.value;
    // fileInfo.img_url = 'uurlto somewere'

    console.log(`this selected category-->: ${fileInfo.category}`);
    console.log(`this selected caption-->: ${fileInfo.caption}`);
    console.log(`i was clicked to send off url-->: ${fileInfo.doc_url}`);

    axios.post('/api/docs', { fileInfo })
    .then(res => {
      console.log(res)
    });
  }

  render() {
    return (
    <div>

      <h1>Hello Admin</h1>

      <h2>Please follow the steps to upload document.</h2>

      <h3>STEP 1</h3>
      <label>
          Pick upload Category:
        <select onChange={this.setCategory}>
          <option value="Newsletters">Newsletter</option>
          <option value="Sports">sports</option>
          <option value="Teacher_Notes">Teacher_Notes</option>
          <option value="FAQ">FAQ</option>
          <option value="School_Events">School_Events</option>
          <option value="After_School">After_School</option>
          </select>
      </label>

        <br></br>
      
      <h3>STEP 2</h3>
      <label>
        Please input Document name: 
        <input type='text' onChange={this.setcaption}></input>
      </label>
      
      <br></br>

      <h3>STEP 3</h3>
      <label>
        URL for google Doc:
        <input type="text" 
        value={this.state.value} 
        onChange={this.handleChange} 
        placeholder={this.state.placeholder} />
      </label>

      <br></br>
      
      <h3>FINAL STEP</h3>
      <button onClick={this.handleClick}>FINAL STEP</button>

      {/* <br></br>

      comming soon!
      <label>
        Or upload file 
        <input type='file'></input> 
      </label> */}
    </div>
    )
  }
}


export default Admin;


