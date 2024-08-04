import React from "react";
import { utilStyles } from "../Styles/commonStyles";
import { withStyles } from "@mui/styles";
import SvgIcon from "./SvgIcon";
import Images from "./Images";
const CheckboxIcon = (props) => {
  const { checked } = props;
  return <SvgIcon src={checked ? Images.check : Images.uncheck} />;
};

export default withStyles(utilStyles)(CheckboxIcon);
