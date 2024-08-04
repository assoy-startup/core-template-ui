import React, { Component } from "react";
import { withRouter } from "react-router";
import Images from "../Utils/Images";
import SvgIcon from "../Utils/SvgIcon";
import error500 from "../Assets/Images/error500.png";
import Error from "../Utils/Error";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo, "error, errorInfo,");
    this.props.history.push({
      pathname: `/app/error`,
      appState: { error, errorInfo },
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error />;
    }

    return this.props.children;
  }
}
export default withRouter(ErrorBoundary);
