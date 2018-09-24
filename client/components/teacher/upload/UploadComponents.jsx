import React from "react";
import Admin from "../../admin.jsx";
import axios from "axios";

class UploadComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  componentDidMount() {
    axios.get("/session").then(res => {
      console.log("RES", res.data[0].username);
      this.setState({
        username: res.data[0].username
      });
    });
  }
  render() {
    return (
      <div>
        <Admin username={this.state.username} />
      </div>
    );
  }
}

export default UploadComponents;
