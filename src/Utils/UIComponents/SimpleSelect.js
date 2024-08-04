/*
 SimpleSelect component
*/
import { withRouter } from "react-router-dom";
import React from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { selectStyles } from "./componentStyles";
import TextField from "@mui/material/TextField";

@observer
class SimpleSelect extends React.Component {
  render() {
    const { classes, label, required, options, value, style, disabled } =
      this.props;
    return (
      <TextField
        className="inputMargin"
        style={style}
        required={required}
        select
        id={label}
        type="text"
        name={label}
        disabled={disabled ? disabled : false}
        label={label}
        fullWidth
        margin="normal"
        variant="filled"
        value={value}
        onChange={this.props.handleChange}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: "textFieldInput",
            root: "textFieldRoot",
            disabled: "disabledText",
          },
        }}
        InputLabelProps={{
          classes: {
            root: "label",
            focused: classes.labelFocused,
          },
        }}
      >
        {options}
      </TextField>
    );
  }
}
export default withStyles(selectStyles, { withTheme: true })(
  withRouter(SimpleSelect),
);
