/*
 SelectBox component
*/
import { withRouter } from "react-router-dom";
import React from "react";
import { inject, observer } from "mobx-react";
import { withStyles } from "@mui/styles";
import { selectStyles } from "./componentStyles";
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
class SelectBox extends React.Component {
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
      addOption,
      addLabel,
      userField,
      required,
    } = this.props;
    return (
      <div className={type === "mapping" || placeholder ? "fullWidth" : ""}>
        {type === "api" || type === "workflow" ? null : (
          <div className={`${classes.selectLabel} mFont rowFlex`}>
            {label}
            {required && userField ? (
              <div style={{ color: "red" }}> {"*"}</div>
            ) : null}
          </div>
        )}
        <div
          className={type === "api" ? classes.apiSelectBox : classes.selectBox}
          style={
            type === "workflow"
              ? { border: "solid 1px black" }
              : type === "mapping"
              ? { border: "1px solid rgba(138, 136, 134, 0.6)" }
              : {}
          }
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
                [classes.select_select]: true,
                [classes.placeholderValue]: value === " ",
                [classes.select_padding]: type === "mapping",
                [classes.select_minPadding]: type === "workflow",
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
                  Workflow<div style={{ color: "red" }}>*</div>{" "}
                </div>{" "}
              </MenuItem>
            ) : null}
            {options}
            {/*addOption? <MenuItem className={classes.menuItem} onClick={this.props.onClickAdd}> <div className={'rowFlex bold'}>{addLabel} </div> </MenuItem> : null*/}
          </Select>
          <div
            className={clsx({
              [classes.selectIcon]: true,
              [classes.selectMinIcon]: type === "workflow",
            })}
          >
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
export default withStyles(selectStyles, { withTheme: true })(
  withRouter(SelectBox),
);
