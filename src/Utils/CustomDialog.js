import React, { useState } from "react";
import { observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { dialogStyles } from "../Styles/commonStyles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Loader from "react-loader-spinner";
import Button from "@mui/material/Button";
import SimpleButton from "./UIComponents/SimpleButton";
import { roleAccess } from "./utils";
import SimpleTextBox from "./UIComponents/SimpleTextBox";
import { TextField } from "@mui/material";
import ErrorMessage from "./ErrorMessage";

const CustomDialog = observer((props) => {
  const [reason, setReason] = useState("");
  const [showError, setShowError] = useState(false);
  const onClickOk = () => {
    props.submit();
    if (props.type === "cReview") return;
    props.cancel();
    setShowError(false);
    setReason("");
  };

  const onClickForceSubmit = () => {
    if (reason === "" || reason.trim().length === 0) {
      setShowError(true);
      return;
    }
    setShowError(false);
    props.submit(true, reason);
    if (props.type === "cReview") return;
    setReason("");
    props.cancel();
  };

  const cancelForceSubmit = () => {
    props.cancel();
    setReason("");
    setShowError(false);
  };

  const {
    classes,
    title,
    message,
    progress,
    from,
    labelYes,
    labelNo,
    singleButton,
    disallowSubmit,
    role,
  } = props;

  return (
    <Dialog
      disableEscapeKeyDown={true}
      classes={{
        paper:
          from === "feedback" ||
          from === "usermgmt" ||
          from === "classification"
            ? classes.medDialog
            : props.largeDialog
            ? classes.largeDialog
            : classes.dialog,
      }}
      open={props.open}
      BackdropProps={{ classes: { root: classes.backdrop } }}
    >
      <DialogTitle classes={{ root: classes.titleRoot }}>
        <div>
          {title ? (
            <Typography className={classes.dialogHeading}>{title}</Typography>
          ) : null}
          <Typography
            className={classes.dialogSubHeading}
            style={{ paddingTop: title ? "" : "3vh" }}
          >
            {message}
          </Typography>
        </div>
      </DialogTitle>
      <DialogContent>
        {disallowSubmit ? (
          roleAccess.admin.findIndex((x) => x === role) > -1 ? (
            <div>
              <div className="sFont">
                <div className={`${classes.dialogSubHeading} xsFont`}>
                  Reason for force submission*
                </div>
                <textarea
                  className="sFont"
                  style={{
                    border: "none",
                    width: "calc(100% - 2vh)",
                    maxWidth: "100%",
                    boxShadow: "none",
                    outline: "solid 1px lightGray",
                    padding: "1vh",
                    resize: "none",
                    fontFamily: "Roboto",
                  }}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                {showError ? (
                  <div style={{ marginTop: "4px" }}>
                    <ErrorMessage
                      fontSize="xsFont"
                      message={"Please give a valid reason before proceeding"}
                    />
                  </div>
                ) : null}
              </div>
              <br />
              <div className={classes.buttonContainer}>
                <SimpleButton
                  label={"Cancel"}
                  onClick={cancelForceSubmit}
                  variant="cancel"
                />
                <SimpleButton
                  label={"Force Submit"}
                  onClick={onClickForceSubmit}
                  progress={progress}
                />
              </div>
            </div>
          ) : (
            <div className={classes.buttonContainer}>
              {<SimpleButton label={"OK"} onClick={props.cancel} />}
            </div>
          )
        ) : (
          <div className={classes.buttonContainer}>
            {singleButton ? null : (
              <SimpleButton
                type="table"
                label={labelNo ? labelNo : "Cancel"}
                onClick={props.cancel}
                variant="cancel"
                style={{ marginRight: "1vw" }}
              />
            )}
            {
              <SimpleButton
                type="table"
                label={labelYes ? labelYes : "OK"}
                onClick={onClickOk}
                progress={progress}
              />
            }
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
});

export default withStyles(dialogStyles)(CustomDialog);
