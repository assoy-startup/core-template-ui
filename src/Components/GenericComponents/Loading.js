import React from "react";
import { withStyles } from "@mui/styles";
import { homeStyles } from "../../Styles/homeStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";

const Loading = observer((props) => {
  const { classes } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Backdrop
        sx={{ 
          opacity: 0.8, 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: "#fff",
        }}
        open={true}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="40%" height="40%">
            <circle fill="#54d4dd" stroke="#54d4dd" strokeWidth="15" r="15" cx="30" cy="50">
              <animate attributeName="cy" calcMode="spline" dur="2s" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4s"></animate>
            </circle>
            <circle fill="#54d4dd" stroke="#54d4dd" strokeWidth="15" r="15" cx="90" cy="50">
              <animate attributeName="cy" calcMode="spline" dur="2s" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2s"></animate>
            </circle>
            <circle fill="#54d4dd" stroke="#54d4dd" strokeWidth="15" r="15" cx="150" cy="50">
              <animate attributeName="cy" calcMode="spline" dur="2s" values="50;120;50;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0s"></animate>
            </circle>
          </svg>
          <div style={{ fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', marginTop: '1rem' }}>Loading...</div>
        </div>
      </Backdrop>
    </div>
  );
});

export default withStyles(homeStyles, { withTheme: true })(withRouter(Loading));
