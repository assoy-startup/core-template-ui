/*
 HomeSidebar component
 url match: / or /home
 Displays overview 
*/
import { withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import clsx from "clsx";
import { sidebarStyles } from "../Styles/commonStyles";
import { Tooltip } from "@mui/material";
import { withStyles } from "@mui/styles";
import SvgIcon from "../Utils/SvgIcon";
import { observer } from "mobx-react";
import Images from "../Utils/Images";
import miniLogo from "../Assets/Images/miniLogo.png";
import whiteLogo from "../Assets/Images/whiteLogo.png";
import { useParams } from "react-router-dom";
import { useStores } from "../stores";
const HomeSidebar = observer((props) => {

  //Mobx store
  const {
    userStore,
    commonStore,
  } = useStores();
  const {  sideDrawer } = commonStore;
  const { classes } = props;

  useEffect(() => {
    let mounted = true;
    return () => (mounted = false);
  }, []);

 


  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: sideDrawer,
        [classes.drawerClose]: !sideDrawer,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: sideDrawer,
          [classes.drawerClose]: !sideDrawer,
        }),
      }}
    >
      <div
        className={clsx({
          [classes.toolbar]: true,
          [classes.openDrawer]: sideDrawer,
        })}
      >
        {sideDrawer ? (
          <div className={classes.burgerIcon}>
            <img
              src={whiteLogo}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        ) : null}
        {!sideDrawer ? (
          <div className={classes.miniBurgerIcon}>
            <img src={miniLogo} style={{ maxWidth: "100%" }} />
          </div>
        ) : null}
      </div>
    </Drawer>
  );
});

export default withStyles(sidebarStyles)(withRouter(HomeSidebar));
