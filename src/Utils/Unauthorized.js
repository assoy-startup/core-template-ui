import React from "react";
import { useStores } from "../stores";
import { useHistory } from "react-router-dom";
import SvgIcon from "./SvgIcon";
import Images from "./Images";
export default function Unauthorized(props) {
  const { message } = props;
  const { userStore } = useStores();
  const history = useHistory();

  return (
    <div style={{ height: "80%" }} className="colFlex flexCenter">
      <div className="rowFlex flexCenter">
        <div className="colFlex flexCenter">
          <SvgIcon src={Images.unauthorized} />
        </div>
      </div>
      <br />
      <br />
      <div className="rowFlex flexCenter bold">
        <div className="colFlex flexCenter">No Access</div>
      </div>
      <br />
      <div
        className=" rowFlex xxlFont xlFont flexCenter"
        style={{
          whiteSpace: "normal",
          wordWrap: "break-word",
          textAlign: "center",
        }}
      >
        Sorry you are not authorised to access this.
      </div>
      <br />
      <div className=" rowFlex xxlFont  flexCenter">
        <div className="colFlex flexCenter">
          <div
            className="underline pointer"
            onClick={() => history.push("/home/dashboard/page/1")}
          >
            Go Back
          </div>
        </div>
      </div>
    </div>
  );
}
