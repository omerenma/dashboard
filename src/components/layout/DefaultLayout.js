import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  createTheme,
} from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Switch, Route } from "react-router-dom";
import {
  DashboardOutlined,
  Person,
  SettingsApplications,
  AccessTimeSharp,
  CalendarTodaySharp,
} from "@material-ui/icons";
import { listItem } from "../MenuList";
import route from "../routes";
import { DashboardIcon2 } from "../icons/icons";
import PopperComponent from "../pages/Popper";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    position: "relattive",
    top: "-10px",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // padding: "0 8px",
    // ...theme.mixins.toolbar,
  },
  bar: {
    backgroundColor: "#fff",
  },
  collapse: {
    color: "#fff",
  },
  customBadge: {
    backgroundColor: "#2196f3",
    color: "red",
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
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    background: "#2196f3",
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(6),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  listItemName: {
    //marginLeft: -10,
    color: "#fff",
    position: "relative",
    left: "-20px",
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [state, setState] = useState({
    open: false,
    openNest: "",
    prevNest: "",
  });
  const [currentTime, setTime] = useState("");
  const [currentDate, setDate] = useState("");
  const { location } = props;
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClicks = (item, index) => {
    if (item.children && state.openNest === index) {
      setState((prev) => ({
        ...prev,
        openNest: "",
      }));
    } else if (item.children) {
      setState((prev) => ({
        ...prev,
        openNest: index,
      }));
      !state.open && handleDrawerOpen();
    } else {
      props.history.push(item.link);
      // // eslint-disable-next-line no-unused-expressions
      state.open
        ? state.open && handleDrawerClose()
        : !state.open && handleDrawerOpen();
    }
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { openNest } = state;

  let time = () => {
    let today = new Date();

    let myTime = today.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let thisMonth = months[today.getMonth()];
    let myDate = today.getDate() + " " + thisMonth + ", " + today.getFullYear();

    // this.setState({ currentTime: myTime, currentDate: myDate });
    setTime(myTime);
    setDate(myDate);
  };

  useEffect(() => {
    time();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(
          classes.bar,
          classes.appBar,
          open && classes.appBarShift
        )}
        style={{ height: "49px" }}
        elevation={1}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            //color="#161677"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <div style={{ display: "flex" }}>
            <div>
              <AccessTimeSharp
                style={{
                  color: "#2196f3",
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  top: 2,
                  right: 5,
                }}
              />
              <span style={{ color: "#2196f3" }}>{currentTime}</span>
            </div>
            <div style={{ marginLeft: 20 }}>
              <CalendarTodaySharp
                style={{
                  color: "#2196f3",
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  top: 2,
                  right: 5,
                }}
              />
              <span className={classes.momentDate} style={{ color: "#2196f3" }}>
                {currentDate}
              </span>
            </div>
          </div>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <Badge
            badgeContent={4}
            color="secondary"
            style={{
              marginRight: 50,
              marginTop: 20,
            }}
          >
            <NotificationsIcon style={{ color: "#161677" }} />
            {/* <NotificationsIcon /> */}
          </Badge>
          <Avatar
            name="Foo bar"
            size="20"
            // round={true}
            src='"https://pixabay.com/get/gc92730262960c5b7f860a6a0cc62cd2f66269f1162a0e2fd5c59b32f33c9a31322c4d7921425ea28c83309010fbd3731b600a23a493ee9981bc5d678830d95d5_640.jpg'
            color="#161677"
            style={{ marginRight: 20 }}
          />
          <PopperComponent />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <div
            style={{
              display: "flex",
              position: "relative",
              bottom: "10px",
              // right: "-20px",
            }}
          >
            <div style={{ position: "relative", right: "110px", top: 15 }}>
              <DashboardIcon2 />
            </div>
            <div
              style={{
                position: "relative",
                right: "49px",
                top: "20px",
                color: "#fff",
              }}
            >
              Dashboard
            </div>
          </div>
          <IconButton onClick={handleDrawerClose} style={{ color: "white" }}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        <List>
          {listItem.map((item, index) => {
            return (
              <span key={index}>
                <ListItem
                  button
                  onClick={() => handleClicks(item, index)}
                  selected={location.pathname === item.link}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    className={(classes.collapse, classes.listItemName)}
                  >
                    <Typography style={{ fontSize: "13px" }}>
                      {item.name}
                    </Typography>
                  </ListItemText>
                  {item.children && open && (
                    <ListItemIcon
                      className={(classes.nestedIcon, classes.collapse)}
                    >
                      {openNest === index ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                  )}
                </ListItem>
                <Collapse
                  in={openNest === index}
                  timeout="auto"
                  unmountOnExit
                  className={classes.bar}
                >
                  <List
                    style={{ backgroundColor: "white" }}
                    component="div"
                    disablePadding
                  >
                    {item.children &&
                      item.children.map((item, index) => (
                        <ListItem
                          onClick={() => handleClicks(item, index)}
                          selected={location.pathname === item.link}
                          key={item.link}
                          style={{ cursor: "pointer" }}
                        >
                          <ListItemIcon style={{ marginLeft: 5 }}>
                            {item.icon}
                          </ListItemIcon>

                          {
                            <ListItemText key={item.name}>
                              <Typography
                                style={{
                                  fontSize: 11,
                                  color: "#161677",
                                  marginLeft: -7,
                                }}
                              >
                                {item.name}
                              </Typography>{" "}
                            </ListItemText>
                          }
                        </ListItem>
                      ))}
                  </List>
                </Collapse>
              </span>
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          {route.map((route, index) => {
            return route.component ? (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => <route.component {...props} />}
              />
            ) : null;
          })}
        </Switch>
        {/* <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            Chart
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            Recent Deposits
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            Recent Orders
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container> */}
      </main>
    </div>
  );
}
