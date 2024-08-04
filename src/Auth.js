import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useStores } from "./stores";
import userStore from "./stores/userStore";

export const Auth = ({ component: Component, roles, ...rest }) => (
  console.log("Main Auth Component Redirected ...!"),
  <Route
    {...rest}
    render={(props) => {
      const { user, token } = userStore;
      if (userStore.token) {
       /* if (roles && roles.indexOf(user.role_name) === -1) {
          // role not authorised so redirect to unauthorized
          return <Redirect to={{ pathname: "/home/unauthorized" }} />;
        }*/
        return <Component {...props} key={Date.now()} />;
      }else{
        console.log("User Token Not Found ...!");
        return <Component {...props} key={Date.now()} />;
      }

      // check if route is restricted by role
      // return (
      //   <Redirect
      //     to={{ pathname: "/login", state: { initPath: props.location } }}
      //   />
      // );
      return <Component {...props} key={Date.now()} />;
    }}
  />
);
