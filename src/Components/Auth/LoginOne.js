import React, { useState } from "react";
import { observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { loginStyles } from "../../Styles/loginStyles";
import { useStores } from "../../stores";
import Images from "../../Utils/Images";
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginOne = observer((props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [pwdError, setPwdError] = useState(undefined);
  const [showPassword, setShowPassword] = useState(false);
  const search = useLocation().search;
  const { classes } = props;

  const { userStore } = useStores();
  const { inProgress, loginFailed, statusText, captchaImg, captchaProgress } = userStore;

  const validateFields = () => {
    let valid = true;
    if (!email) {
      setEmailError("Please enter a valid Email");
      valid = false;
    } else setEmailError(undefined);
    if (!password || password.length < 4 || password.length > 25) {
      setPwdError("Please enter a valid password with min. 6 and max. 25 characters");
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

  const onLoginButtonClick = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please enter valid credentials.");
      return;
    } else {
      setErrorMessage(undefined);
      if (validateFields()) {
        setErrorMessage(undefined);
        userStore.login(email, password).then((data) => {
          if (!inProgress && data && data.status === "success") {
            props.history.push("/app/manualbooking");
          }
        });
      } else return;
    }
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex flex-column min-vh-100 p-4 border rounded shadow-sm" style={{ backgroundImage: 'conic-gradient(#343c48, #1c343c, #242c34, #243434, #344444)', height: '100vh', width: '100vw' }}>
      <Container className="d-flex flex-grow-1 align-items-center justify-content-center">
        <Row className="w-100">
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <div className="text-center mb-4">
              <img src={Images.loginimage} alt="Logo" className="img-fluid" style={{ maxWidth: '150px' }} />
            </div>
            <form onSubmit={onLoginButtonClick} >
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Mobile No"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <div className="text-danger">{emailError}</div>}
              </div>
              <div className="form-group mb-3 position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span onClick={onClickShowPassword} className="position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)', cursor: 'pointer' }}>
                  {showPassword ? <i class="bi bi-eye-fill"></i> : <i class="bi bi-eye-slash-fill"></i>}
                </span>
                {pwdError && <div className="text-danger">{pwdError}</div>}
              </div>
              {errorMessage && <div className="text-danger text-center mb-3">{errorMessage}</div>}
              <div className="d-flex justify-content-center mb-3">
                <button type="submit" className="btn btn-primary btn-block">{inProgress ?"Wait":"Login"}</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <Row className="text-center">
        <Col>
          <div className="marathi-text">
            <span className="red">भा</span>
            <span className="orange">ऊ</span>
            <span className="yellow">राया</span>
            <span className="green"> आर्ट</span>
          </div>
        </Col>
      </Row>
      <div className="text-center text-white py-3 mt-auto">
        &copy; 2024 Developed by ASSOY Team
      </div>
    </div>
  );
});

export default withStyles(loginStyles)(LoginOne);
