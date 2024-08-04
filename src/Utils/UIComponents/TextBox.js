/*
 TextBox component
*/
import { withRouter } from "react-router-dom";
import React from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { textBoxStyles } from "./uiStyles";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import clsx from "clsx";
import Loader from "react-loader-spinner";
import { TextField } from "@mui/material";

@observer
class TextBox extends React.Component {
  textBoxWithoutLabel = () => {
    const {
      classes,
      label,
      required,
      value,
      style,
      disabled,
      multiline,
      maxRows,
      rows,
      placeholder,
      type,
      maxLength,
      autoFocus,
    } = this.props;
    return (
      <TextField
        className={classes.inputMargin}
        style={style}
        required={required}
        id={label}
        type={type ? type : "text"}
        autoFocus={autoFocus}
        disabled={disabled ? disabled : false}
        autoComplete={value}
        placeholder={placeholder}
        fullWidth
        margin="normal"
        variant="filled"
        value={value}
        onChange={this.props.onChange}
        placeholder={placeholder ? placeholder : ""}
        inputProps={{ maxLength: maxLength }}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.textFieldInputSansLabel,
            root: classes.textFieldRoot,
            disabled: classes.disabledText,
          },
        }}
        InputLabelProps={{
          classes: {
            root: classes.label,
            focused: classes.labelFocused,
          },
        }}
      />
    );
  };

  render() {
    const {
      classes,
      key,
      label,
      required,
      value,
      style,
      disabled,
      multiline,
      maxRows,
      endAdornment,
      rows,
      placeholder,
      type,
      maxLength,
      autoFocus,
      from,
      error,
      index,
    } = this.props;
    return (
      <div className={from === "mapping" ? "fullWidth" : ""}>
        {from === "validation" && index > 0 ? null : (
          <div className={`${classes.selectLabel} mFont`}>{label}</div>
        )}
        <div
          className={clsx({
            [classes.selectBox]: true,
            [classes.errorHighlight]: error,
          })}
        >
          <TextField
            className={classes.inputMargin}
            required={required}
            id={label}
            name={label}
            autoFocus={autoFocus}
            key={key}
            onKeyUp={this.props.onKeyUp}
            onBlur={this.props.onBlur}
            type={type ? type : "text"}
            disabled={disabled ? disabled : false}
            fullWidth
            margin="normal"
            variant="filled"
            value={value}
            multiline={multiline}
            maxRows={maxRows}
            minRows={1}
            onChange={this.props.onChange}
            placeholder={placeholder ? placeholder : ""}
            inputProps={{ maxLength: maxLength }}
            InputProps={{
              disableUnderline: true,
              classes: {
                input: classes.textFieldInput,
                root:
                  from === "validation"
                    ? classes.textFieldRootMin
                    : classes.textFieldRoot,
                disabled: classes.disabledText,
              },
            }}
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.labelFocused,
              },
            }}
            style={style}
          />
        </div>
      </div>
    );
  }
}
export default withStyles(textBoxStyles, { withTheme: true })(
  withRouter(TextBox),
);
