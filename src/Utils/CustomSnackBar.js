import React, { useState } from "react";
import { observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { snackbarStyles } from "../Styles/commonStyles";
import { useStores } from "../stores";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/lab/Alert";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackBar = observer((props) => {
  //Initialising state variables
  const [vertical] = useState("top");
  const [horizontal] = useState("center");

  const { classes } = props;

  //Mobx store
  const { commonStore, trainingStore } = useStores();
  const { open, message, type, from } = commonStore.snackbarOptions;
  const { batchId } = useParams();

  const handleCloseSnackBar = () => {
    commonStore.handleCloseSnackBar();
  };

  const closeSnackBar = () => {
    switch (from) {
      case "upload":
        props.history.push("/home/upload/page/1");
        break;
      case "fileList":
        props.history.push(`/home/document-api/page/1/completed`);
        break;
      case "api":
        props.history.push("/home/api/batch/page/1");
        break;
      case "trialApproval":
        props.history.push("/home/admin-panel/manageUsers/trial/1");
        break;
    }
    handleCloseSnackBar();
  };

  const renderMessage = () => {
    switch (from) {
      case "upload":
        return (
          <div className="rowFlex">
            Upload successful! You can view these files under&nbsp;
            <div
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={closeSnackBar}
            >
              Bulk Uploads
            </div>
            .
          </div>
        );
      case "fileList":
        return (
          <div className="rowFlex">
            Review completed! You can view these files under&nbsp;
            <div
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={closeSnackBar}
            >
              Review Completed
            </div>
            .
          </div>
        );
      case "api":
        return (
          <div className="rowFlex">
            Success! You can now view your Batch in&nbsp;
            <div
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={closeSnackBar}
            >
              Training Batches
            </div>
            .
          </div>
        );
      case "trialApproval":
        return (
          <div className="rowFlex">
            Approved! You can now view this user in &nbsp;
            <div
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "500",
              }}
              onClick={closeSnackBar}
            >
              Trial Users
            </div>
            .
          </div>
        );
      default:
        return <div className="xxlFont">{message}</div>;
    }
  };

  return (
    <div key={commonStore.snackbarOptions.open}>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        classes={{ root: from === "doc" ? classes.root : "" }}
        onClose={handleCloseSnackBar}
      >
        <Alert
          severity={type}
          className={classes[`${type}`]}
          onClose={handleCloseSnackBar}
        >
          {renderMessage()}
        </Alert>
      </Snackbar>
    </div>
  );
});

export default withStyles(snackbarStyles, { withTheme: true })(
  withRouter(CustomSnackBar),
);
