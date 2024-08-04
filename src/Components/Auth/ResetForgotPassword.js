import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { loginStyles } from "../../Styles/loginStyles";
import SvgIcon from "../../Utils/SvgIcon";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import { useStores } from "../../stores";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { dialogStyles } from "../../Styles/dialogStyles";
import FormControl from "@mui/material/FormControl";
import { ReactSVG } from "react-svg";
import Images from "../../Utils/Images";
import Loader from "react-loader-spinner";
import InputAdornment from "@mui/material/InputAdornment";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import SimpleButton from "../../Utils/UIComponents/SimpleButton";
import ErrorMessage from "../../Utils/ErrorMessage";
import { useParams } from "react-router-dom";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const bounceInAnim = keyframes`${fadeIn}`;
const AnimatedDiv = styled.div`
  animation: 1s ${bounceInAnim};
`;

const ResetForgotPassword = observer((props) => {
  const { classes, open } = props;
  const { commonStore, userStore } = useStores();
  const { inProgress } = userStore;
  const [showPassword1, setShowPassword1] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword2, setShowPassword2] = useState("");
  const [errorMessage, setErrorMsg] = useState(undefined);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const { token } = useParams(); // get the 'page' router param

  useEffect(() => {
    userStore.resetUserErrors();
  }, []);

  const resetPassword = (e) => {
    e.preventDefault();
    let passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    userStore.resetUserErrors();

    let inValid = /\s/;
    if (password1 !== password2) {
      setErrorMsg("Passwords do not match");
      return;
    }
    if (inValid.test(password1) || inValid.test(password2)) {
      setErrorMsg("Password should not contain spaces.");
      return;
    }
    if (!password1 || !password2) {
      setErrorMsg("Please enter new password before proceeding.");
      return;
    }
    /* if (!(password1 == password2)) {
             setErrorMsg('Passwords do not match.')
             return;
         }*/
    if (!(password1.length >= 6)) {
      setErrorMsg("Password should contain at least 6 characters.");
      return;
    }
    setErrorMsg(undefined);
    userStore.resetForgotPassword(token, password1).then((data) => {
      if (data && data.status === "success") {
        commonStore.handleOpenSnackBar(
          "Password reset successfully",
          "success",
        );
        props.history.push("/login");
      }
    });
    // if (this.state.type.toLowerCase() == 'resetpassword')
    //      this.props.userStore.resetPassword(this.state.token, password1)
    // else
    /*this.props.userStore.resetPassword(password1)
            .then(() => {
                if (!inProgress) {
                    if (this.props.userStore.user && this.props.userStore.user.registrationFlag) {
                        this.props.userStore.resetPasswordDialog(false)
                        this.props.history.push("/home/dashboard")
                    }
                    else
                        this.props.history.push("/")
                }

            });*/
  };

  return (
    <div className="loginContainer">
      <div className={classes.loginForm}>
        {/* <img src={logo} className={classes.logo} />*/}

        <form className={classes.form}>
          <div className="bold loginHeading" style={{ fontFamily: "Roboto" }}>
            Reset your password
          </div>
          <br />
          <div className={classes.loginField}>
            <div className={"xlFont colFlex flexCenter"}>New Password</div>
            <div style={{ width: "70%" }}>
              <TextField
                onDrop={(e) => e.preventDefault()}
                variant="filled"
                id="login-pwd1"
                placeholder="New Password"
                value={password1}
                className={classes.formField}
                onChange={(e) => setPassword1(e.target.value)}
                type={showPassword1 ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <SvgIcon
                      src={
                        !showPassword1
                          ? Images.showPassword
                          : Images.hidePassword
                      }
                      onClick={(e) =>
                        setShowPassword1(!showPassword1 ? true : false)
                      }
                    />
                  ),
                  classes: {
                    input: `${classes.input} xlFont`,
                    root: classes.inputRoot,
                    focused: classes.focusedInput,
                  },
                }}
                classes={{ root: classes.inputRoot }}
              />
            </div>
          </div>
          <div className={classes.loginField}>
            <div className={"xlFont colFlex flexCenter"}>Re-Enter Password</div>
            <div style={{ width: "70%" }}>
              <TextField
                onDrop={(e) => e.preventDefault()}
                variant="filled"
                id="login-pwd2"
                placeholder="Enter Password again"
                value={password2}
                className={classes.formField}
                onChange={(e) => setPassword2(e.target.value)}
                type={showPassword2 ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <SvgIcon
                      src={
                        !showPassword2
                          ? Images.showPassword
                          : Images.hidePassword
                      }
                      onClick={(e) =>
                        setShowPassword2(!showPassword2 ? true : false)
                      }
                    />
                  ),
                  classes: {
                    input: `${classes.input} xlFont`,
                    root: classes.inputRoot,
                    focused: classes.focusedInput,
                  },
                }}
                classes={{ root: classes.inputRoot }}
              />
            </div>
          </div>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <div className={`${classes.actionContainer} spaceBetween`}>
            <div
              className={classes.forgotPwd}
              onClick={(e) => props.history.push("/login")}
            >
              Back to Home
            </div>
            <SimpleButton
              style={{ width: "100%", marginLeft: "0" }}
              label="Reset Password"
              type="login"
              onClick={(e) => resetPassword(e)}
              className={classes.button}
              progress={inProgress}
            />
          </div>
        </form>
      </div>
      <div className={classes.loginBg}>
        <div className={classes.appSummary}>
          <div style={{ marginRight: "2%" }}>
            <div className={"bold loginHeading"}>VisionERA</div>
            {/*<img className={'loginLogo'} src={logo}/>*/}
            <div className={`xlFont ${classes.loginAppText}`}>
              A 100% Performance Guarantee with AI Powered Data Processing
              Technology for end-to-end Process Automation.
            </div>
          </div>
          <div className={classes.appPreview}>
            <img style={{ width: "100%", height: "100%" }} src={appPreview} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default withStyles(loginStyles, { withTheme: true })(
  withRouter(ResetForgotPassword),
);
