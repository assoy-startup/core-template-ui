import React, { useEffect ,useState } from "react";
import { inject, observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { homeStyles } from "../Styles/commonStyles";
import ErrorBoundary from "./ErrorBoundary";
import PageNotFound from "../Utils/PageNotFound";
import Error from "../Utils/Error";
import { useStores } from "../stores";
import { headerTabs, roleAccess } from "../Utils/utils";
import { Auth } from "../Auth";
// import Unauthorized from "../Utils/Unauthorized";
import Unauthorized from "../Utils/Unauthorized";
import HomeSidebar from "./HomeSidebar";
import { fadeIn } from "react-animations";
// import styled, { keyframes } from "styled-components";
import RouteToPage from "./RouteToPage";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Chart } from "react-google-charts";
import { secondaryListItems,mainListItems } from "./HomeComponent/Tabslist";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useLocation } from "react-router-dom";
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PopUpViewDelivery from "./GenericComponents/PopUpViewDelivery";
import Home from "./Home/Home";


const MainHome = observer((props) => {
  const { commonStore,userStore,orderStore} = useStores();



  const logout = () => {
    console.log("Logout");
    let temp = JSON.parse(JSON.stringify(userStore.user))
    userStore.removeLocalStorage()
    window.location.reload()
    props.history.push('/login')
    // window.location.href = 'None';
    window.localStorage.setItem('from', temp && temp.role_id)
  }


  return (
    <> 
        <Home/>
         {/* <ErrorBoundary>
              <Switch>
                <Auth
                  // roles={roleAccess.all}
                  path={props.match.url + "/:type"}
                  exact={true}
                  component={() => <RouteToPage />}
                />
                <Auth
                  // roles={roleAccess.all}
                  path={props.match.url + "/error"}
                  exact={true}
                  component={() => <Error key={Date.now()} />}
                />
                <Auth
                  // roles={roleAccess.all}
                  path={props.match.url + "/unauthorized"}
                  exact={true}
                  component={() => <Unauthorized key={Date.now()} />}
                />
                <Auth
                  // roles={roleAccess.all}
                  path={props.match.url + "/error"}
                  component={Error}
                />
                <Auth
                  // roles={roleAccess.all}
                  path={"*"}
                  component={PageNotFound}
                />
              </Switch>
         </ErrorBoundary> */}
    </>
  );
});

export default withStyles(homeStyles, { withTheme: true })(
  withRouter(MainHome)
);
