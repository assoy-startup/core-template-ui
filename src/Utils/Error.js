import React from "react";
import { withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import error500 from "../Assets/Images/error500.png";
import { useStores } from "../stores";

const ErrorMessage = observer((props) => {
  const { userStore } = useStores();

  const goToHome = () => {
    props.history.push("/home/upload-api/page/1/all");
    window.location.reload();
  };
  return (
    <div className="fullHeight colFlex flexCenter">
      <div className="rowFlex flexCenter">
        <img src={error500} />
      </div>
      <br />
      {userStore.user && userStore.user.role === "SUPER_ADMIN" ? (
        <div className="rowFlex flexCenter lFont">
          <div
            className="underline pointer"
            onClick={() =>
              props.history.push(
                "/home/admin-panel/ocr-statistics/OCR_PENDING/1",
              )
            }
          >
            Click here
          </div>
          &nbsp;for home page
        </div>
      ) : (
        <div className="rowFlex flexCenter lFont">
          <div className="underline pointer" onClick={goToHome}>
            Click here
          </div>
          &nbsp;for home page
        </div>
      )}
    </div>
  );
});

export default withRouter(ErrorMessage);
