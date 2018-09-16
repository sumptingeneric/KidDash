import React from "react";
import FilterBar from './filterBar.jsx';
import Container from './container.jsx'
import Admin from "./admin.jsx";
import Login from "./login.jsx";
// Material UI
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';


import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 740;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: 'left',
      view: 'home'
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  };

  handleDrawerClose() {
    this.setState({ open: false });
  };

  render() {
      const { anchor, open } = this.state;
      const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        style={{width: 750}}
        classes={{
          paper: styles.drawerPaper,
        }}
      >

      <div className={styles.drawerHeader}>
        <IconButton onClick={this.handleDrawerClose}>
          {styles.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
        <List style={{width: 200, "marginLeft": 20, color: this.props.view === 'Home' ? 'blue' : 'black'}}
          onClick={() => {
            this.props.changeView('Home');
            this.handleDrawerClose();
          }
        }>{'Home'}</List>
        <List style={{width: 200, "marginLeft": 20, color: this.props.view === 'Admin' ? 'blue' : 'black'}}
          onClick={() => {
              this.props.changeView('Login');
              this.handleDrawerClose();
            }
        }>{'Admin'}</List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    }
    return (
      <div className={styles.root}>
        <div className={styles.appFrame}>
          <div className="Header"style={{ display: "flex", alignItems: 'flex-end', marginBottom: 75}}>
            <AppBar style={{backgroundColor: "Blue"}} className={classNames(styles.appBar, {
              [styles.appBarShift]: open,
              [styles[`appBarShift-${anchor}`]]: open,
            })}>
              <Toolbar disableGutters={!open}>
                <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerOpen} className={classNames(styles.menuButton, open && styles.hide)}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" className="AppName" noWrap>
                  Kid Dash
                </Typography>
                <div style={{ marginLeft: 20}}>
                  <FilterBar getFiles={this.props.getFiles}/>
                </div>
              </Toolbar>
            </AppBar>
            {before}
            <main
              className={classNames(styles.content, styles[`content-${anchor}`], {
                [styles.contentShift]: open,
                [styles[`contentShift-${anchor}`]]: open,
              })}>
              <div className={styles.drawerHeader} />
            </main>
          </div>
        </div>
      </div>);
  }
}

export default Header;
