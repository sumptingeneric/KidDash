import React from "react";
import Container from "../../container.jsx";
import axios from "axios";

class MyBoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      role: "teacher"
    };
    this.getFilesFromDatabase();
    this.deleteFile = this.deleteFile.bind(this);
  }

  getFilesFromDatabase() {
    axios
      .get("/api/files")
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
      .delete("/api/file", {
        data: { id: fileString }
      })
      .then(() => this.getFilesFromDatabase());
  }

  render() {
    return (
      <div>
        <Container
          files={this.state.files}
          deleteFile={this.deleteFile}
          role={this.state.role}
        />
      </div>
    );
  }
}

export default MyBoardContainer;
