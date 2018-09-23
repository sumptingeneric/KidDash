import React from "react";
import FilterBar from "./filterBar.jsx";
import Container from "./container.jsx";
import Admin from "./admin.jsx";
import Login from "./login.jsx";
// Material UI
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createMuiTheme } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { Drawer, AppBar, Toolbar } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Typography, TextField, Divider } from "@material-ui/core";
import { ChevronLeft, Home, Email, Edit, Favorite } from "@material-ui/icons";

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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: "left",
      view: "home"
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    const drawer = (
      <Drawer
        variant="persistent"
        open={open}
        classes={{
          paper: styles.drawerPaper
        }}
      >
        <div className={styles.drawerHeader} style={{ textAlign: "right" }}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          <ListItem
            button
            selected={this.props.view === "Home"}
            onClick={() => {
              this.props.changeView("Home");
              this.handleDrawerClose();
            }}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem
            button
            selected={
              this.props.view === "Admin" || this.props.view === "Login"
            }
            onClick={() => {
              this.props.changeView("Login");
              this.handleDrawerClose();
            }}
          >
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              this.handleDrawerClose();
            }}
          >
            <ListItemIcon>
              <Email />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              this.handleDrawerClose();
            }}
          >
            <ListItemIcon>
              <Favorite />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </List>
      </Drawer>
    );

    return (
      <div className={styles.root}>
        <div className={styles.appFrame}>
          <div
            className="Header"
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: 75
            }}
          >
            <AppBar
              style={{ backgroundColor: "Teal" }}
              className={classNames(styles.appBar, {
                [styles.appBarShift]: open,
                [styles["appBarShift-left"]]: open
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(styles.menuButton, open && styles.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="title"
                  color="inherit"
                  className="AppName"
                  noWrap
                >
                  Kid Dash
                </Typography>
                {this.props.getFiles !== undefined ? (
                  <div style={{ marginLeft: 20 }}>
                    <FilterBar
                      handleLogOut={this.props.handleLogOut}
                      changeView={this.props.changeView}
                      getFiles={this.props.getFiles}
                    />
                  </div>
                ) : null}
              </Toolbar>
            </AppBar>
            {drawer}
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
  }
}

export default Header;
