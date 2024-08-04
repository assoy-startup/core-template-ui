import React from "react";
import Images from "./Images";
import SvgIcon from "./SvgIcon";
import "../Styles/loader.scss";
export default function Loader(props) {
  return props.mini ? (
    <div className="mini-loader-5">
      <span></span>
    </div>
  ) : (
    <div className="loader-5">
      <span></span>
    </div>
  );
}
