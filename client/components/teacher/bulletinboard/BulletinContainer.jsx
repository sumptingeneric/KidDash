import React from "react";
import Container from "../../container.jsx";
import axios from "axios";

//should only render bulletinBOard
class BulletinContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
    this.getFilesFromDatabase();
  }

  getFilesFromDatabase() {
    axios
      .get("/api/files")
      .then(response => {
        this.setState({
          files: response.data
        });
        console.log("test");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Container files={this.state.files} />
      </div>
    );
  }
}

export default BulletinContainer;
