import React from "react";
import Container from "../../container.jsx";
import axios from "axios";

class MyBoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
    this.getFilesFromDatabase();
    this.deleteFile = this.deleteFile.bind(this);
  }

  getFilesFromDatabase() {
    axios
      .get("http://localhost:8079/api/files")
      .then(response => {
        this.setState({
          files: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  deleteFile(file) {
    let fileString = file + "";
    axios
      .delete("http://localhost:8079/api/file", {
        data: { id: fileString }
      })
      .then(() => this.getFilesFromDatabase());
  }

  render() {
    return (
      <div>
        <Container files={this.state.files} deleteFile={this.deleteFile} />
      </div>
    );
  }
}

export default MyBoardContainer;
