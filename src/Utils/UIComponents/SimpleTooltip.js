/*
 SimpleTooltip component
*/
import { withRouter } from "react-router-dom";
import React from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { tooltipStyles } from "./componentStyles";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

class SimpleTooltip extends React.Component {
  render() {
    const { classes, title, content, style, trigger } = this.props;
    return (
      <Tooltip
        style={style}
        theme="dark"
        position="bottom-end"
        trigger={trigger ? trigger : "mouseenter"}
        html={<div className={classes.tooltip}>{title}</div>}
      >
        {content}
      </Tooltip>
    );
  }
}
export default withStyles(tooltipStyles, { withTheme: true })(
  withRouter(SimpleTooltip),
);
