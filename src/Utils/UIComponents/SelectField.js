/*
 SelectField component
*/
import { withRouter } from "react-router-dom";
import React from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { selectFieldStyles } from "./uiStyles";
import Select from "@mui/material/Select";
import SvgIcon from "../SvgIcon";
import Images from "../Images";
import MenuItem from "@mui/material/MenuItem";
import clsx from "clsx";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CustomSvgIcon(props) {
  return null;
}

@observer
class SelectField extends React.Component {
  state = {
    open: false,
  };

  onClickSelect = () => {
    if (this.props.onClick !== undefined) this.props.onClick();
    this.setState({ open: !this.state.open });
  };

  onChangeSelect = (e) => {
    this.props.onChange(e);
    this.setState({ open: false });
  };

  renderValidationField = () => {
    const {
      options,
      value,
      style,
      disabled,
      label,
      classes,
      multiple,
      className,
      placeholder,
      onClick,
      type,
      key,
      index,
      error,
    } = this.props;
    return (
      <div style={{ marginRight: "1vw", width: "15%" }}>
        {index > 0 ? null : (
          <div className={`${classes.selectLabel} xsFont`}>{label}</div>
        )}
        <div
          className={clsx({
            [classes.selectBox]: true,
            [classes.errorHighlight]: error,
          })}
        >
          <Select
            className={className}
            key={key}
            value={value}
            multiple={multiple}
            disabled={disabled}
            fullWidth={true}
            style={style}
            disableUnderline
            onClick={this.onClickSelect}
            onBlur={this.props.onBlur}
            open={this.state.open}
            classes={{
              icon: "selectIcon",
              select: clsx({
                [classes.select_min]: true,
                [classes.placeholderValue]: value === " ",
                [classes.select_minPadding]: true,
              }),
              disabled: classes.disabled,
            }}
            style={style}
            onChange={this.onChangeSelect}
            IconComponent={CustomSvgIcon}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              getContentAnchorEl: null,
              classes: { paper: classes.menuPaper },
            }}
          >
            {placeholder ? (
              <MenuItem className={classes.menuItem} disabled={true} value=" ">
                {" "}
                <div className={"rowFlex"}>
                  Select Workflow<div style={{ color: "red" }}>*</div>{" "}
                </div>{" "}
              </MenuItem>
            ) : null}
            {options}
            {type === "validationRhs" ? (
              <MenuItem className="sFont" value={"STATIC_VALUE"}>
                Static Value
              </MenuItem>
            ) : null}
          </Select>
          <div className={classes.selectMinIcon}>
            <ExpandMoreIcon
              onClick={() => this.setState({ open: true })}
              fontSize="small"
              style={{ color: this.props.theme.palette.headerGray }}
            />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const {
      options,
      value,
      style,
      disabled,
      label,
      classes,
      multiple,
      className,
      placeholder,
      onClick,
      type,
      key,
      error,
    } = this.props;
    return type === "validation" || type === "validationRhs" ? (
      this.renderValidationField()
    ) : (
      <div className={type === "mapping" ? "fullWidth" : ""}>
        {type === "api" || type === "workflow" ? null : (
          <div className={`${classes.selectLabel} sFont`}>{label}</div>
        )}
        <div
          className={clsx({
            [classes.selectBox]: true,
            [classes.errorHighlight]: error,
          })}
        >
          <Select
            className={className}
            key={key}
            value={value}
            multiple={multiple}
            disabled={disabled}
            fullWidth={true}
            style={style}
            disableUnderline
            onClick={this.onClickSelect}
            open={this.state.open}
            classes={{
              icon: "selectIcon",
              select: clsx({
                [classes.select]: true,
                [classes.placeholderValue]: value === " ",
              }),
              disabled: classes.disabled,
            }}
            style={style}
            onChange={this.onChangeSelect}
            IconComponent={CustomSvgIcon}
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              getContentAnchorEl: null,
              classes: { paper: classes.menuPaper },
            }}
          >
            {placeholder ? (
              <MenuItem className={classes.menuItem} disabled={true} value=" ">
                {" "}
                <div className={"rowFlex"}>
                  Select Workflow<div style={{ color: "red" }}>*</div>{" "}
                </div>{" "}
              </MenuItem>
            ) : null}
            {options}
          </Select>
          <div className={classes.selectIcon}>
            <ExpandMoreIcon
              onClick={() => this.setState({ open: true })}
              fontSize="small"
              style={{ color: this.props.theme.palette.headerGray }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(selectFieldStyles, { withTheme: true })(
  withRouter(SelectField),
);
