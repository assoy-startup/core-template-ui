export const buttonStyles = (theme) => ({
  delete: {
    backgroundColor: `${theme.palette.darkRed} !important`,
  },
  button: {
    display: "flex",
    color: theme.palette.white,
    fontWeight: "500",
    borderRadius: "5px",
    backgroundColor: "#4484FF",
    padding: "0 1vw",
    marginLeft: "1vw",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#0094dd",
    },
    padding: "4px 1vw",
    fontSize: "12px !important",
    maxHeight: "40px",
    "@media (min-width: 1440px)": {
      fontSize: "11px !important",
    },
    "@media (min-width: 1680px)": {
      fontSize: "12px !important",
    },
    "@media (min-width: 1920px)": {
      fontSize: "16px !important",
    },
    "&$disabled": {
      // increase the specificity for the pseudo class
      //  backgroundColor: ""
    },
    "&:hover": {
      // increase the specificity for the pseudo class
      backgroundColor: "#0094dd",
    },
  },
  smallButton: {
    padding: "3px 1vw !important",
  },
  tranparentBtn: {
    color: theme.palette.black1,
    backgroundColor: theme.palette.white,
    boxShadow: "0px 1px 4px 0 rgba(92, 101, 132, 0.18)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: theme.palette.white,
    },
  },
  noBorder: {
    border: "none !important",
    boxShadow: "none !important",
    backgroundColor: "transparent !important",
    color: theme.palette.black1,
  },
  loginButton: {
    width: "100%",
    padding: "3vh 1.5vw !important",
    "@media (min-width: 1280px) and (max-height: 650px)": {
      fontSize: "14px !important",
    },
    "@media (min-width: 1680px)": {
      fontSize: "15px !important",
    },
    "@media (min-width: 1920px)": {
      fontSize: "16px !important",
    },
    fontSize: "14px !important",
  },
  disabled: {
    color: `${theme.palette.white} !important`,
    cursor: "not-allowed !important",
    backgroundColor: `${theme.palette.warmGray} !important`,
    pointerEvents: "initial !important",
    "&:hover": {
      backgroundColor: `${theme.palette.warmGray} !important`,
    },
  },
  cancelButton: {
    backgroundColor: "white !important",
    color: "black !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
    border: "solid 1px lightgray !important",
  },
});

export const selectStyles = (theme) => ({
  disabled: {
    cursor: "not-allowed !important",
  },
  formControl: {
    marginBottom: "1vh",
    border: `solid 1px ${theme.palette.lightGray2}`,
    borderRadius: "3px",
    width: "100%",
    height: "6.9vh",
    marginTop: "1vh",
  },
  label: {
    transform: "translate(9px, 2px) scale(0.75) !important",
    color: theme.palette.warmGray2,
    fontSize: "14px",
    paddingTop: "4px",
    "&:focus": {
      color: theme.palette.warmGray2,
    },
  },
  select: {
    paddingLeft: "8px",
    "&:focus": {
      backgroundColor: "transparent",
    },
    borderRadius: "3px",
  },
  expandIcon: {
    color: theme.palette.silver,
    marginRight: "1vw",
  },
  selectLabel: {
    color: theme.palette.headerGray,
    fontSize: "12.5px",
    marginBottom: "0.8vh",
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      fontSize: "12.5px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15.5px !important",
    },
  },
  selectBox: {
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    "&:focus": {
      borderRadius: "5px !important",
      backgroundColor: "transparent",
    },
    position: "relative",
  },
  apiSelectBox: {
    border: "none",
    borderRadius: "5px",
    "&:focus": {
      borderRadius: "5px !important",
      backgroundColor: "transparent",
    },
    position: "relative",
  },
  selectIcon: {
    position: "absolute",
    top: "25%",
    right: "10px",
  },
  menuPaper: {
    boxShadow: "0px 19px 27px 0 rgba(71, 71, 71, 0.09)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
  menuItem: {
    fontSize: "11px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14.5px !important",
    },
  },

  select_select: {
    fontWeight: "normal !important",
    fontSize: "13px",
    padding: "1.5vh 1vw",
    borderRadius: "5px !important",
    backgroundColor: theme.palette.white,
    "&:focus": {
      backgroundColor: theme.palette.white,
    },
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px !important",
    },
  },
  select_minPadding: {
    padding: "0.8vh 1vh",
    paddingRight: "35px !important",
    borderRadius: "5px",
    fontSize: "11px !important",
    "@media (min-width: 1280px) and (max-height: 650px)": {
      fontSize: "10px !important",
    },
    "@media (min-width: 1680px)": {
      fontSize: "12.5px !important",
    },
    "@media (min-width: 1920px)": {
      fontSize: "14.5px !important",
    },
  },
  select_padding: {
    padding: "1.6vh 1vw",
    borderRadius: "5px",
  },
  placeholderValue: {},
  selectMinIcon: {
    position: "absolute",
    top: "18%",
    right: "10px",
  },
});

export const tooltipStyles = (theme) => ({
  tooltip: {
    fontSize: "12px !important",
    whiteSpace: "pre-line",
    textAlign: "left",
  },
});

export const textFieldStyles = (theme) => ({
  selectLabel: {
    display: "flex",
    color: theme.palette.headerGray,
    fontSize: "12.5px",
    marginBottom: "0.8vh",
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      fontSize: "12.5px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15.5px !important",
    },
  },
  popupLabel: {
    color: theme.palette.headerGray,
    fontSize: "12.5px",
    marginBottom: "0.8vh",
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      fontSize: "12.5px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15.5px !important",
    },
  },
  checkboxLabel: {
    color: theme.palette.headerGray,
    fontSize: "12.5px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      fontSize: "12.5px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15.5px !important",
    },
  },
  selectBox: {
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    "&:focus": {
      borderRadius: "5px !important",
      backgroundColor: "transparent",
    },
    position: "relative",
  },
  autoLabel: {
    color: "#8e92a9",
  },
  autoMargin: {
    marginBottom: "1.5vh",
  },
  autoOptions: {
    fontSize: "12px",
    backgroundColor: "white !important",
    padding: "1vh 1vw !important",
    borderRadius: "0px",
    color: "#646884",
  },
  autoClear: {
    display: "none",
  },
  autoPaper: {
    boxShadow: "0px 19px 27px 0 rgba(71, 71, 71, 0.09)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
  hiddenText: {
    color: theme.palette.cloudyBlue,
    fontSize: "18px",
    whiteSpace: "pre-line",
    visibility: "hidden",
    height: "2px",
  },
  /*Styles for input*/
  textFieldRoot: {
    border: "none",
    fontSize: "13px !important",
    fontWeight: "normal !important",
    padding: "1.5vh 1vw !important",
    backgroundColor: theme.palette.white,
  },

  textFieldInput: {
    fontSize: "13px !important",
    fontWeight: "normal !important",
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px !important",
    },
  },
  errorHighlight: {
    border: `solid 1px ${theme.palette.red} !important`,
  },
  autoCompleteInput: {
    padding: "0 !important",
    fontSize: "13px !important",
    fontWeight: "normal !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px !important",
    },
  },
  textFieldInputSansLabel: {
    padding: "1vh 12px !important",
    fontSize: "15px",
  },

  label: {
    fontSize: " 14px !important",
  },

  inputMargin: {
    marginTop: "0 !important",
    marginBottom: "0 !important",
  },

  disabledText: {
    backgroundColor: "#e8e8e8 !important",
    borderRadius: "5px!important",
    cursor: "not-allowed !important",
  },
  menuItem: {
    fontSize: "11px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14.5px !important",
    },
  },
});
