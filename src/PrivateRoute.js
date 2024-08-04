import { useStores } from "./stores";
import { observer } from "mobx-react";

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = observer((props) => {
  //Mobx store
  const { userStore } = useStores();
  const { restProps } = props;
  const { user } = userStore;

  if (userStore.token) {
    return (
      <div style={{ overflow: "hidden" }} className='fullHeight fullWidth'>
        <Route path={props.path} component={props.component} />
      </div>
    );
  }
  return (
    <Redirect
      to={{
        pathname: "/login",
        state: { initPath: location.pathname },
      }}
    />
  );
});

export default PrivateRoute;
