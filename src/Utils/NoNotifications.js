import React from "react";
import TrialRequestList from "../Components/AdminPanel/TrialRequestList";
import TrialNotifications from "../Components/TrialNotifications";
import Images from "./Images";
import SvgIcon from "./SvgIcon";
import { trialUserCheck } from "./utils";
export default function NoNotifications(props) {
  const { message } = props;

  return (
    <div
      style={{ height: "80%", textAlign: "center" }}
      className="colFlex flexCenter"
    >
      <div className="rowFlex flexCenter">
        {" "}
        <SvgIcon src={Images.noNotifications} />
      </div>
      <br />
      <div className="xlFont">You're all caught up!</div>
      <div className="xxlFont bold">No new notifications.</div>
    </div>
  );
}
