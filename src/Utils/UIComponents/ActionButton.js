/*
 ActionButton component
*/
import { withRouter } from "react-router-dom";
import React from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { buttonStyles } from "../Styles/commonStyles";
import clsx from "clsx";
import Loader from "react-loader-spinner";
@inject("userStore", "commonStore")
@observer
class ActionButton extends React.Component {
  render() {
    const {
      classes,
      label,
      variant,
      width,
      progress,
      disabled,
      style,
      className,
    } = this.props;
    return (
      <div
        disabled={disabled ? disabled : false}
        style={style}
        classes={{ disabled: "ac-btn-disabled" }}
        onClick={progress ? null : this.props.onClick}
        className={clsx({
          "ac-btn": true,
          "ac-btn-cancel": variant === "cancel",
        })}
      >
        {progress ? (
          <Loader
            type={"ThreeDots"}
            height={20}
            width={20}
            color={this.props.theme.palette.white}
          />
        ) : (
          label
        )}
      </div>
    );
  }
}
export default withStyles(buttonStyles, { withTheme: true })(
  withRouter(ActionButton),
);
