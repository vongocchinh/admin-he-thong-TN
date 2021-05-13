/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CategoryIcon from '@material-ui/icons/Category';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

import './../components/home/styles.scss'
// import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as action from './../action/login';
const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

 function App(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  var {LoginAdminStore } = props;
  useEffect(() => {
    if(LoginAdminStore){
      props.GET_USER_ID(LoginAdminStore);
    }
  }, [1]);
  if(!LoginAdminStore){
    return <Redirect to="/login" />
  }
  const Logout=()=>{
    props.Logout(LoginAdminStore);
  }
  return (
  <>
   <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" noWrap>
            Home
          </Typography>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <Typography  variant="subtitle1" noWrap>
            <p className="logout" onClick={Logout}>Logout</p>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className="link-category-router" to="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>

          <Link className="link-category-router" to="/category">
            <ListItem button>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={"Category"} />
            </ListItem>
          </Link>
          <Link className="link-category-router" to="/user">
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"User"} />
            </ListItem>
          </Link>
          <Link className="link-category-router" to="/course">
            <ListItem button>
              <ListItemIcon>
                <ConfirmationNumberIcon />
              </ListItemIcon>
              <ListItemText primary={"Course"} />
            </ListItem>
          </Link>
          <Link className="link-category-router" to="/introducer">
            <ListItem button>
              <ListItemIcon>
                <ArtTrackIcon />
              </ListItemIcon>
              <ListItemText primary={"Introducer"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      {/* <main className={classes.content}> */}

        {/* <Router/> */}
      {/* </main> */}
  </>
  );
}

const mapStateToProps=(state)=>{
  return {
    LoginAdminStore:state.LoginAdminStore
  }
}

const dispatchToProps=(dispatch,props)=>{
  return {
    GET_USER_ID:(id)=>{
      dispatch(action.GET_USER_ID(id));
    },
    Logout:(id)=>{
      dispatch(action.LOGOUT_ADMIN(id));
    }
  }
}
export default (connect(mapStateToProps,dispatchToProps)) (App);