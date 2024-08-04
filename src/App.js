import React from "react";
import "./index.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import CustomSnackBar from "./Utils/CustomSnackBar";
import ErrorMessage from "./Utils/Error";
import PageNotFound from "./Utils/PageNotFound";
import LoginOne from "./Components/Auth/LoginOne";
import ResetForgotPassword from "./Components/Auth/ResetForgotPassword";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import MainHome from "./Components/MainHome";

function App() {
  return (
    <div id="app-root">
      <Switch>
        <Route path="/" component={MainHome} exact />
        {/* <Route path="/" component={Home} exact /> */}
        {/* <Route path="/" component={Services} exact /> */}
        {/* <Route path="/error" component={ErrorMessage} exact />
        <Route path="/login" component={LoginOne} exact />
        <Route path="/password/:token" component={ResetForgotPassword} />
        <PrivateRoute path="/app" component={MainHome} />
        <Route path="/*" component={PageNotFound} exact /> */}
      </Switch>
      <CustomSnackBar />
    </div>
  );
}

export default App;
