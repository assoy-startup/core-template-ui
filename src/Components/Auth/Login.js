import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { loginStyles } from "../../Styles/loginStyles";
import { useStores } from "../../stores";
import Images from "../../Utils/Images";
import SvgIcon from "../../Utils/SvgIcon";
import ErrorMessage from "../../Utils/ErrorMessage";
import SimpleButton from "../../Utils/UIComponents/SimpleButton";
import { TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import Loading from "../GenericComponents/Loading";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = observer((props) => {
  //Initialising state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [pwdError, setPwdError] = useState(undefined);
  const [showPassword, setShowPassword] = useState(false);
  const search = useLocation().search;
  const { classes } = props;
  //Mobx store
  const { userStore } = useStores();
  const { inProgress, loginFailed, statusText, captchaImg, captchaProgress } =
    userStore;

  const validateFields = () => {
    let valid = true;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Please enter a valid Email");
      valid = false;
    } else setEmailError(undefined);
    if (!password || password.length < 4 || password.length > 25) {
      setPwdError(
        "Please enter a valid password with min. 6 and max. 25 characters",
      );
      valid = false;
    } else setPwdError(undefined);
    if (valid) {
      setEmailError(undefined);
      setPwdError(undefined);
    }
    userStore.resetUserErrors();
    setErrorMessage(undefined);
    return valid;
  };

  // useEffect(() => {
  //   if (userStore.token) {
  //     //If user is already logged in, redirect user to home page
  //     props.history.push("/app/home");
  //   }
  //   else {
  //     let username = new URLSearchParams(search).get("username")
  //     let sessionId = new URLSearchParams(search).get("sessionId")
  //     if (username && sessionId)
  //       userStore.login(username, sessionId).then((data) => {
  //         if (!inProgress && data && data.status === "success") {
  //           userStore.getServiceId()
  //             .then(() => {
  //               if (!userStore.serviceProgress)
  //                 props.history.push("/app/home");
  //             })
  //         }

  //       });
  //   }

  // }, []);

  // return <Loading />

  //login - on click of login button
  const onLoginButtonClick = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter valid credentials.");
      return;
    } else {
      setErrorMessage(undefined);
      if (validateFields()) {
        setErrorMessage(undefined);
        // console.log("Email Case Conversion:", email);
        userStore.login(email, password).then((data) => {
          if (!inProgress && data && data.status === "success")
            props.history.push("/app/home");
        });
      } else return;
    }
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginContainer">
      <div className={classes.loginForm}>
        <form>
          <div className="bold loginHeading" style={{ fontFamily: "Roboto" }}>
            Welcome
          </div>
          {/*  <div className={`xxlFont ${classes.loginText}`}>Welcome back </div>*/}
          <br />
          <div className={classes.loginField}>
            <div className={`${classes.loginLabel} xlFont colFlex flexCenter`}>
              E-mail
            </div>
            <div>
              <TextField
                onDrop={(e) => e.preventDefault()}
                variant="filled"
                id="login-email"
                placeholder="E-mail"
                value={email}
                className={classes.formField}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <SvgIcon src={Images.email} onClick={onClickShowPassword} />
                  ),
                  classes: {
                    input: `${classes.input} xlFont`,
                    root: classes.inputRoot,
                    focused: classes.focusedInput,
                  },
                  disableUnderline: true,
                }}
                classes={{ root: classes.inputRoot }}
              />
              {emailError ? <ErrorMessage message={emailError} /> : null}
            </div>
          </div>

          <div className={classes.loginField}>
            <div className={`${classes.loginLabel} xlFont colFlex flexCenter`}>
              Password
            </div>
            <div>
              <TextField
                onDrop={(e) => e.preventDefault()}
                variant="filled"
                id="login-pwd"
                placeholder="Password"
                value={password}
                className={classes.formField}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <SvgIcon
                      src={Images.password}
                      onClick={onClickShowPassword}
                    />
                  ),
                  endAdornment: (
                    <SvgIcon
                      src={
                        !showPassword
                          ? Images.showPassword
                          : Images.hidePassword
                      }
                      onClick={onClickShowPassword}
                    />
                  ),
                  classes: {
                    input: `${classes.input} xlFont`,
                    root: classes.inputRoot,
                    focused: classes.focusedInput,
                  },
                  disableUnderline: true,
                }}
                classes={{ root: classes.inputRoot }}
              />
              {pwdError ? <ErrorMessage message={pwdError} /> : null}
            </div>
          </div>
          {loginFailed ? <ErrorMessage message={statusText} /> : null}
          {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
          <div className={`${classes.actionContainer} spaceBetween`}>
            {/*<div className={classes.forgotPwd} onClick={(e) => props.history.push('/forgot-password')}>Forgot Password?</div>*/}
            <SimpleButton
              label="Sign In"
              type="login"
              onClick={(e) => onLoginButtonClick(e)}
              className={classes.button}
              progress={inProgress}
            />
          </div>
          <div className="container">
            {/* <img className="logoCore" src={Images.loginimage} alt="task" /> */}
          </div>
        </form>
      </div>
    </div>
  );
});

export default withStyles(loginStyles)(Login);
