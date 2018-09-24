import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { defaultFormatUtc } from "moment";
import Login from "./login.jsx";

// ---------material-ui
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const menuItems = [
  {
    display: "Newsletters",
    value: "Newsletters"
  },
  {
    display: "Sports",
    value: "Sports"
  },
  {
    display: "Teacher Notes",
    value: "Teachers_Notes"
  },
  {
    display: "FAQ",
    value: "FAQ"
  },
  {
    display: "School Events",
    value: "School_Events"
  }
];

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: "",
      value: "",
      category: "Subject",
      imgUrl:
        "https://www.thetruthaboutcars.com/wp-content/uploads/2015/08/free-candy-610x235.jpg",
      pickImg: "",
      anchor: null,
      setImg: false,
      ourImg: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setcaption = this.setcaption.bind(this);
    this.setUrl = this.setUrl.bind(this);
    this.selectImg = this.selectImg.bind(this);
    this.renderImgInput = this.renderImgInput.bind(this);
    this.setAnchor = this.setAnchor.bind(this);
    this.unsetAnchor = this.unsetAnchor.bind(this);
    this.renderOurImgInput = this.renderOurImgInput.bind(this);
    this.setOurImg = this.setOurImg.bind(this);
  }

  setAnchor(event) {
    this.setState({ anchor: event.currentTarget });
  }

  unsetAnchor() {
    this.setState({ anchor: null });
  }

  setcaption(event) {
    this.setState({ caption: event.target.value });
  }

  setCategory(value) {
    let newThis = this;
    return function() {
      newThis.setState({
        category: value,
        anchor: null
      });
    };
  }

  setUrl(event) {
    this.setState({ imgUrl: event.target.value });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  selectImg() {
    this.setState({
      pickImg: "pickImg",
      setImg: !this.state.setImg
    });
  }

  setOurImg() {
    this.setState({
      pickImg: "our",
      ourImg: !this.state.ourImg
    });
  }

  renderImgInput() {
    const { pickImg, setImg } = this.state;

    if (pickImg === "pickImg" && setImg === true) {
      return (
        <p>
          Paste url to the right:
          <input
            style={{
              marginLeft: 5,
              maxWidth: 300,
              height: 8,
              padding: 5,
              borderRadius: 5
            }}
            type="text"
            placeholder="Your image url link"
            onChange={this.setUrl}
          />
        </p>
      );
    }
  }

  renderOurImgInput() {
    const { pickImg, ourImg } = this.state;

    if (pickImg === "our" && ourImg === true)
      return <p>We will upload a image for you</p>;
  }

  handleClick() {
    let fileInfo = {};
    fileInfo.board = this.state.category;
    fileInfo.caption = this.state.caption;
    fileInfo.docUrl = this.state.value;
    fileInfo.imgUrl = this.state.imgUrl;

    console.log(`send off category-->: ${fileInfo.category}`);
    console.log(`send off caption-->: ${fileInfo.caption}`);
    console.log(`send off url-->: ${fileInfo.doc_url}`);
    console.log(`send off img_url-->: ${fileInfo.img_url}`);

    axios
      .post("/api/file", {
        board: this.state.category,
        caption: this.state.caption,
        docUrl: this.state.value,
        imgUrl: this.state.imgUrl
      })
      .then(res => {
        console.log(res);
        alert("Document uploaded have a good day.");
      });
  }

  render() {
    const { anchor } = this.state;

    return (
      <div>
        <Paper
          style={{
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 15
          }}
        >
          <Typography variant="Headline" gutterBottom>
            <h1>Hello {this.props.username},</h1>
            <h2>Please follow the steps to upload a document.</h2>

            <h3>Step 1:</h3>
            <label>
              Pick a category:
              <div>
                <Button
                  aria-owns={anchor ? "simple-menu" : null}
                  aria-haspopup="true"
                  onClick={this.setAnchor}
                >
                  {this.state.category}
                </Button>
                <Menu
                  id="Category"
                  anchorEl={anchor}
                  open={Boolean(anchor)}
                  onClose={this.unsetAnchor}
                >
                  {menuItems.map(item => (
                    <MenuItem onClick={this.setCategory(item.value)}>
                      {item.display}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </label>
            <br />
            <h3>Step 2</h3>
            <label>
              Add the document title:
              <input
                style={{
                  marginLeft: 5,
                  maxWidth: 300,
                  height: 8,
                  padding: 5,
                  borderRadius: 5
                }}
                type="text"
                placeholder="Input document name"
                onChange={this.setcaption}
              />
            </label>
            <br />
            <h3>Step 3</h3>
            <label>
              Upload the document URL:
              <input
                style={{
                  marginLeft: 5,
                  maxWidth: 300,
                  height: 8,
                  padding: 5,
                  borderRadius: 5
                }}
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="File url for upload"
              />
            </label>
            <br />
            <h4>Step 4</h4>
            <label>
              <input
                style={{
                  marginLeft: 5,
                  height: 20,
                  width: 20,
                  margin: "auto",
                  verticalAlign: "bottom"
                }}
                type="checkBox"
                onClick={this.selectImg}
              />
              &nbsp; Upload my own image
            </label>
            {this.renderImgInput()}
            <div>
              <br />
              <label>
                <input
                  style={{
                    marginLeft: 5,
                    height: 20,
                    width: 20,
                    margin: "auto",
                    verticalAlign: "bottom"
                  }}
                  type="checkBox"
                  onClick={this.setOurImg}
                />
                &nbsp; Let us pick an image
              </label>
              {this.renderOurImgInput()}
            </div>
            <br />
            <h3>Final Step</h3>
            <Button onClick={this.handleClick} variant="contained">
              Submit document
            </Button>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Admin;

/**
 * NOTES:
 * material-ui was used to create the category menu and the final step button
 * menuItems object is used to render the menu items in the Category popout menu
 * renderImgInput and renderOurImgInput are the check boxed in step 4 based on what is click
 * setCategory sets a varable this to newThis because 'this' was losing value and thats how i fixed it
 */
