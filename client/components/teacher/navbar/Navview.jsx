import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { AppBar, Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@reach/router";
import Upload from "@material-ui/icons/CloudUpload";
import Chart from "@material-ui/icons/InsertChart";
import axios from "axios";

const drawerWidth = 740;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  }
});

const Navview = props => {
  function signOut() {
    if(gapi.auth2 === undefined) {
      console.log("User signed out.");
      axios.get("/logout").then(() => {
        props.handleLogOut();
        document.location.reload(true);
      });
    } else {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function() {
        console.log("User signed out.");
        axios.get("/logout").then(() => {
          props.handleLogOut();
          document.location.reload(true);
        });
      });
    }
  }
  return (
    <div className={styles.root}>
      <div className={styles.appFrame}>
        <div
          className="Header"
          style={{ display: "flex", alignItems: "flex-end", marginBottom: 75 }}
        >
          <AppBar
            style={{ backgroundColor: "Teal" }}
            className={classNames(styles.appBar, {
              [styles.appBarShift]: open,
              [styles["appBarShift-left"]]: open
            })}
          >
            <Toolbar disableGutters={!open}>
              <IconButton />
              <Typography
                variant="title"
                color="inherit"
                className="AppName"
                noWrap
              >
                Kid Dash
              </Typography>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  style={{ marginLeft: 20 }}
                  className="showAll"
                  type="button"
                >
                  MyBoard
                </Button>
              </Link>
              <Link to="bulletinboard" style={{ textDecoration: "none" }}>
                <Button
                  style={{ marginLeft: 20, color: "black" }}
                  className="showAll"
                  type="button"
                >
                  Bulletin Board
                </Button>
              </Link>
              <Button onClick={() => signOut()}>Logout</Button>
              <Link to="upload" style={{ textDecoration: "none" }}>
                <Upload
                  color="action"
                  style={{ marginLeft: 80 }}
                  className="large material-icons cyan-text text-darken-4"
                />
              </Link>

              <Link to="analytics" style={{ textDecoration: "none" }}>
                <Chart
                  color="action"
                  style={{ marginLeft: 40 }}
                  className="large material-icons cyan-text text-darken-4"
                />
              </Link>
            </Toolbar>
          </AppBar>

          <main
            className={classNames(styles.content, styles["content-left"], {
              [styles.contentShift]: open,
              [styles["contentShift-left"]]: open
            })}
          >
            <div className={styles.drawerHeader} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Navview;
