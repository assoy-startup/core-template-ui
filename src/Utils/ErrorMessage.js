import React from "react";
import Images from "./Images";
import SvgIcon from "./SvgIcon";

export default function ErrorMessage(props) {
  const { message, from, fontSize } = props;
  return from === "createBatch" ? (
    <div className="errorMessage mFont" style={props.style}>
      <div style={{ marginTop: "3px" }}>
        <SvgIcon className="colFlex flexStart" src={Images.error} />
      </div>
      <div style={{ paddingLeft: "0.5vw" }}>{message}</div>
    </div>
  ) : (
    <div
      className={`errorMessage  ${fontSize === undefined ? "sFont" : fontSize}`}
      style={props.style}
    >
      <div className="colFlex flexCenter">
        {" "}
        <SvgIcon className="colFlex flexCenter" src={Images.error} />
      </div>
      <div style={{ paddingLeft: "0.5vw" }}>{message}</div>
    </div>
  );
}
