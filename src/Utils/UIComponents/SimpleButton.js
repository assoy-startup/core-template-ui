/*
 SimpleButton component
*/
import { withRouter } from "react-router-dom";
import React from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { buttonStyles } from "./componentStyles";
import Button from "@mui/material/Button";
import clsx from "clsx";

@observer
class SimpleButton extends React.Component {
  render() {
    const {
      classes,
      label,
      variant,
      width,
      progress,
      disabled,
      style,
      type,
      id,
      tooltip,
    } = this.props;
    return (
      <div className={'rowFlex'}>
        <Button
          data-tip={id}
          data-for={id}
          type={type === "login" ? "submit" : ""}
          disabled={disabled ? disabled : false}
          classes={{ disabled: classes.disabled }}
          onClick={progress ? null : this.props.onClick}
          className={clsx({
            [classes.button]: true,
            [classes.cancelButton]: variant === "cancel",
            [classes.loginButton]: type === "login",
            'sFont': true
          })}
          style={style}
        >
          {progress ? "Loading..." : label}
        </Button>
       
      </div>
    );
  }
}
export default withStyles(buttonStyles, { withTheme: true })(
  withRouter(SimpleButton),
);
