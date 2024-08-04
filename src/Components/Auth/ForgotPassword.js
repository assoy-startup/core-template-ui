import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { loginStyles } from "../../Styles/loginStyles";
import { useStores } from "../../stores";
import Images from "../../Utils/Images";
import SvgIcon from "../../Utils/SvgIcon";
import ErrorMessage from "../../Utils/ErrorMessage";
import SimpleButton from "../../Utils/UIComponents/SimpleButton";
import bgImage from "../../../Assets/Images/Visionera-Background.jpg";
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = observer((props) => {
  //Initialising state variables
  const [email, setEmail] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showError, setShowError] = useState(false);
  const [emailError, setEmailError] = useState(undefined);
  const [showSuccess, setShowSuccess] = useState(false);

  const { classes } = props;

  //Mobx store
  const { userStore } = useStores();
  const { inProgress, loginFailed, statusText } = userStore;

  const validateFields = () => {
    let valid = true;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Please enter a valid Email");
      valid = false;
    } else setEmailError(undefined);
    if (valid) {
      setEmailError(undefined);
    }
    userStore.resetUserErrors();
    return valid;
  };

  useEffect(() => {
    setShowSuccess(false);
    userStore.resetUserErrors();
  }, []);
  //login - on click of login button
  const onLoginButtonClick = (e) => {
    e.preventDefault();
    setShowError(false);
    if (!email) {
      setErrorMessage("Please enter email before proceeding.");
      return;
    } else {
      setErrorMessage(undefined);
      if (validateFields()) {
        setErrorMessage(undefined);
        userStore.forgotPassword(email).then((res) => {
          if (res && res.status === "success") {
            setShowSuccess(true);
            setShowError(true);
          }
        });
      } else return;
    }
  };

  return (
    <div className="loginContainer">
      <div className={classes.loginForm}>
        {/* <img src={logo} className={classes.logo} />*/}
        {showSuccess ? (
          <div className={`lFont ${classes.form}`}>
            <div className="bold loginHeading" style={{ fontFamily: "Roboto" }}>
              Forgot Password?
            </div>
            <br />
            Instructions to reset your password have been shared on your
            registered email address.
            <br />
            <br />
            <div className="rowFlex flexCenter">
              <span
                onClick={() => props.history.push("/login")}
                className="pointer underline"
              >
                Click here to login
              </span>
            </div>
          </div>
        ) : (
          <form className={classes.form}>
            <div className="bold loginHeading" style={{ fontFamily: "Roboto" }}>
              Forgot Password?
            </div>
            <div className={`xlFont ${classes.loginText}`}>
              We will send you an email to reset your password.{" "}
            </div>
            <br />
            <div className={classes.loginField}>
              <div className={"xlFont colFlex flexCenter"}>E-mail</div>
              <div style={{ width: "70%" }}>
                <TextField
                  onDrop={(e) => e.preventDefault()}
                  variant="filled"
                  placeholder="Registered E-mail address"
                  value={email}
                  className={classes.formField}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{ classes: { input: classes.input } }}
                  classes={{ root: classes.inputRoot }}
                />
                {emailError ? <ErrorMessage message={emailError} /> : null}
              </div>
            </div>

            {loginFailed ? <ErrorMessage message={statusText} /> : null}
            {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
            <div className={`${classes.actionContainer} spaceBetween`}>
              <div
                className={classes.forgotPwd}
                onClick={(e) => props.history.push("/login")}
              >
                Back to Home
              </div>

              <SimpleButton
                label="Send Reset Link"
                type="login"
                onClick={(e) => onLoginButtonClick(e)}
                className={classes.button}
                progress={inProgress}
              />
            </div>
          </form>
        )}
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

export default withStyles(loginStyles)(ForgotPassword);
