import React, { useState } from "react";
import { withStyles } from "@mui/styles";
import { homeStyles } from "../../Styles/homeStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import {ChevronLeftIcon} from '@mui/icons-material';
import { Chart } from "react-google-charts";
import { useLocation } from "react-router-dom";
import MainHome from "../MainHome";


const Services = observer((props) => {
  const { userStore } = useStores();
  const { classes } = props;

  return (
     <>
     <div className="fullWidth">
        I Am Services Componet
     </div>
     </>
  );
});

export default withStyles(homeStyles, { withTheme: true })(withRouter(Services));
