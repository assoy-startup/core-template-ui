import React from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { withStyles } from "@mui/styles";
import { useStores } from "../stores";
import HomeComponent from "./HomeComponent/HomeComponent";
import PageNotFound from "../Utils/PageNotFound";
import { homeStyles } from "../Styles/commonStyles";
import Home from "./Home/Home";
import Services from "./Services/Services";

const RouteToPage = observer((props) => {
  const { type } = useParams();

  const renderComponent = () => {
    switch (type) {
      case "home":
        return <Home />;
      case "services":
        return <Services />;
      
      default:
        return <PageNotFound />;
    }
  };

  return renderComponent();
});

export default withStyles(homeStyles, { withTheme: true })(RouteToPage);
