import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { homeStyles } from "../../Styles/homeStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Chart } from "react-google-charts";
import clsx from "clsx";
import { Button } from "@mui/material";
import SimpleButton from "../../Utils/UIComponents/SimpleButton";
import OverallHomeStats from "./OverallHomeStats";
import Loading from "../GenericComponents/Loading";
import NoDataFound from "../GenericComponents/NoDataFound";

const Dashboard = observer((props) => {
  const { userStore, commonStore } = useStores();
  const { classes } = props;
  const [ccModule, setccModule] = useState(false);
  const [ccOverView, setccOverView] = useState(false);
  const [ccComparative, setccComparative] = useState(false);
  const [ccPeModule, setccPeModule] = useState(true);
  const [otherModule, setotherModule] = useState(true);
  const [ccOverViewActive, setCcOverViewActive] = useState(true);
  const [showOverview, setShowOverview] = useState(true);
  const [ccComparativeActive, setCcComparativeActive] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const accountRowIndexMap = {};
  const { homePageData, homeProgress } = homeStore;
  const { pagesAccessList } = userStore;

  return (
    <div style={{ height: "90%", overflowY: "scroll" }}>
     <div>I Am Home Page</div>
    </div>
  );
});

export default withStyles(homeStyles, { withTheme: true })(
  withRouter(Dashboard)
);
