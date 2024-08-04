export const textBoxStyles = (theme) => ({
  selectLabel: {
    color: "#4F566B",
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
    border: "1px solid #8A8886",
    borderRadius: "2px",
    "&:focus": {
      borderRadius: "2px !important",
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
    borderRadius: "2px",
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
    //  backgroundColor: theme.palette.white
  },

  textFieldRootMin: {
    border: "none",
    fontSize: "13px !important",
    fontWeight: "normal !important",
    padding: "0.9vh 4px !important",
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
    borderRadius: "2px !important",
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

export const selectFieldStyles = (theme) => ({
  errorHighlight: {
    border: `solid 1px ${theme.palette.red} !important`,
  },
  disabled: {
    cursor: "not-allowed !important",
  },
  select: {
    paddingLeft: "8px",
    padding: "1.5vh 1vw",
    "&:focus": {
      backgroundColor: "transparent",
    },
    borderRadius: "2px",
  },
  selectLabel: {
    color: "#4F566B",
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
    border: "1px solid #8A8886",
    borderRadius: "2px",
    "&:focus": {
      borderRadius: "2px !important",
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
    borderRadius: "2px",
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
  select_minPadding: {
    padding: "0.8vh 1vh",
    paddingRight: "25px !important",
    borderRadius: "2px",
    fontSize: "11px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15.5px !important",
    },
  },
  selectMinIcon: {
    position: "absolute",
    top: "18%",
    right: "4px",
  },
  select_min: {
    fontWeight: "normal !important",
    fontSize: "12px !important",
    padding: "1vh 4px",
    borderRadius: "2px !important",
    backgroundColor: theme.palette.white,
    "&:focus": {
      backgroundColor: theme.palette.white,
    },
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      fontSize: "13px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15.5px !important",
    },
  },
});
