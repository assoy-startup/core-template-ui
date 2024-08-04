import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { accountStyles } from "../Styles/loginStyles";
import { useStores } from "../stores";
import SelectBox from "../Utils/UIComponents/SelectBox";
import {
  documentCategories,
  modifyText,
  nameRegex,
  trialUserCheck,
} from "../Utils/utils";
import MenuItem from "@mui/material/MenuItem";
import clsx from "clsx";
import SvgIcon from "../Utils/SvgIcon";
import SimpleTextBox from "../Utils/UIComponents/SimpleTextBox";
import Images from "../Utils/Images";
import SimpleButton from "../Utils/UIComponents/SimpleButton";
import CheckboxIcon from "../Utils/CheckboxIcon";
import Checkbox from "@mui/material/Checkbox";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { Tooltip } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Moment from "moment";
import CustomDialog from "../Utils/CustomDialog";
import { MAdminStore } from "../stores/mAdminStore";

const MyAccount = observer((props) => {
  //Initialising state variables
  const { classes } = props;
  const [errors, setErrors] = useState([]);
  const [keyDialog, setKeyDialog] = useState(false);
  //Mobx store
  const { apiStore, teamStore, mAdminStore, commonStore, userStore } =
    useStores();
  const { saveProgress, inProgress, createProgress, apiKey } = apiStore;
  const { userDetails } = mAdminStore;
  const { user } = userStore;

  useEffect(() => {
    //  if (userDetails.role === 'ENTERPRISE_SUPERVISOR') {

    mAdminStore.getUserDetails();

    // }
  }, []);

  const onWhitelistAllIps = (value) => {
    if (!value) apiStore.setIps([""]);
    else apiStore.setIps([]);
  };

  const cancel = () => {
    props.history.push("/home/configuration");
  };

  const saveWhiteListing = () => {
    let temp = [false, false, false, false, false];
    if (apiKey.whiteListIp === []) {
      apiStore.updateWhitelisting();
      return;
    }
    apiKey.whiteListIp.map((row, index) => {
      let ip = row.split(".");
      if (ip.length !== 4) {
        temp[index] = true;
      } else {
        for (let i = 0; i < ip.length; i++) {
          if (parseInt(ip[i]) < 0 || parseInt(ip[i]) > 255) {
            temp[index] = true;
            break;
          }
        }
      }
    });
    setErrors(temp);
    if (temp.findIndex((x) => x === true) > -1)
      commonStore.handleOpenSnackBar(
        "Please enter valid IP addresses before proceeding ",
        "error",
      );
    else apiStore.updateWhitelisting();
  };

  const onClickDelete = (index) => {
    apiStore.deleteIp(index);
  };

  const generateApiKey = () => {
    apiStore.generateApiKey().then((data) => {
      if (data === "success") {
        commonStore.handleOpenSnackBar(
          "API key generated successfully",
          "success",
        );
        setKeyDialog(false);
      }
    });
  };

  const cancelKeyDialog = () => {
    setKeyDialog(false);
  };

  return (
    <div className="fullHeight" style={{ position: "relative" }}>
      <div className={classes.container}>
        <div className={classes.infoBox}>
          <div className="xlFont semiBold">Basic Info</div>
          <br />
          <div>
            <div className={classes.infoRow}>
              <div className={`sFont ${classes.infoLabel}`}>Name</div>
              <div className={`lFont`}>{`${userDetails.firstName} `}</div>
            </div>
            <div className={classes.infoRow}>
              <div className={`sFont ${classes.infoLabel}`}>Email</div>
              <div className={`lFont`}>{userDetails.email}</div>
            </div>
            <div className={classes.infoRow}>
              <div className={`sFont ${classes.infoLabel}`}>Role</div>
              <div className={`lFont`}>{user.role}</div>
            </div>
            <div className={classes.infoRow}>
              <div className={`sFont ${classes.infoLabel}`}>Teams</div>
              <div className={`lFont`}>
                {userDetails.teams && userDetails.teams.length ? (
                  <div>
                    {userDetails.teams.map((row, tin) => (
                      <div key={"myTeam" + tin} className="rowFlex">
                        <div className={classes.teamName}>
                          <span className="bold">{row.teamName}</span>
                          &nbsp;-&nbsp;
                          {row.customersArray && row.customersArray.length
                            ? row.customersArray.map((cust, custIn) => (
                                <span
                                  key={"custos" + tin + custIn}
                                  className={"custId"}
                                >
                                  {cust}
                                </span>
                              ))
                            : "-"}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  "-"
                )}
              </div>
            </div>
            {user.role === "ENTERPRISE_SUPERVISOR" ||
            user.role === "ENTERPRISE_INDEXER" ? (
              <div className={classes.infoRow}>
                <div className={`sFont ${classes.infoLabel}`}>
                  {user.role === "ENTERPRISE_SUPERVISOR"
                    ? "Indexers"
                    : "Supervisors"}
                </div>
                <div className={`lFont rowFlex`}>
                  {userDetails[
                    `${
                      user.role === "ENTERPRISE_SUPERVISOR"
                        ? "indexerArray"
                        : "superVisorIds"
                    }`
                  ] &&
                  userDetails[
                    `${
                      user.role === "ENTERPRISE_SUPERVISOR"
                        ? "indexerArray"
                        : "superVisorIds"
                    }`
                  ].length ? (
                    <div>
                      {userDetails[
                        `${
                          user.role === "ENTERPRISE_SUPERVISOR"
                            ? "indexerArray"
                            : "superVisorIds"
                        }`
                      ].map((row, tin) => (
                        <div key={"mysups" + tin} className={classes.teamName}>
                          {row.email}
                        </div>
                      ))}
                    </div>
                  ) : (
                    "-"
                  )}
                </div>
              </div>
            ) : null}
            {/*(user.role === 'ENTERPRISE_SUPERVISOR' || user.role === 'ENTERPRISE_INDEXER') ?
                            <div className={classes.infoRow}>
                                <div className={`sFont ${classes.infoLabel}`}>Allocated Customers</div>
                                <div className={`lFont`}>
                                    {
                                        userDetails.teams && userDetails.teams.length ?
                                            <div className='rowFlex'>
                                                {
                                                    userDetails.teams.map((row, tin) => (
                                                        (
                                                            row.customersArray && row.customersArray.map((cust, custIn) => (
                                                                <div key={'custos' + tin + custIn} className={classes.teamName}>{cust}</div>
                                                            ))
                                                        )
                                                    ))
                                                }
                                            </div>
                                            : '-'
                                    }
                                </div>
                            </div> : null*/}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
});

export default withStyles(accountStyles, { withTheme: true })(
  withRouter(MyAccount),
);
