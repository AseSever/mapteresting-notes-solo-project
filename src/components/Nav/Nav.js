import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NavList from './NavMenuItems'
import useStyles from './NavStyles'

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// MATERIAL-UI CORE
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
} from '@material-ui/core';

/* Colors for project 

Portland Orange #F46036
Space Cadet #2E294E
Persian Green #1B998B
Rose Madder #E71D36
June Bud #C5D86D
*/

const NavDrawer = ({ history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar style={{ marginTop: '.5em' }}>
          <Typography variant="h5" style={{ margin: 'auto', color: '#EDE7D9' }}>
            Mapteresting Locations
          </Typography>
          <IconButton
            color="#EDE7D9"
            aria-label="open drawer"
            
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon style={{ alignItems: "right", color: "#EDE7D9" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon style={{ color: "#EFF1F3"}}/>
            ) : (
                <ChevronRightIcon style={{ color: "#EFF1F3"}}/>
              )}
          </IconButton>
        </div>
        <Divider />
        <NavList handleDrawerClose={handleDrawerClose} />
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>

  );
}


export default connect(mapStoreToProps)(NavDrawer);