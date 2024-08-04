import React from "react";
import Images from "./Images";
import SvgIcon from "./SvgIcon";
import Pnf from "../Assets/Images/pageNotFound.png";
export default function PageNotFound(props) {
  const { message } = props;
  return (
    <div style={{ height: "80%" }} className="rowFlex flexCenter">
      <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={Pnf} />
    </div>
  );
}
