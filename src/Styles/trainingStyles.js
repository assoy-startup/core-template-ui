export const trainingStyles = (theme) => ({
  errorTableRow: {
    borderCollapse: "collapse",
    border: "solid 2px red",
    borderRight: "solid 3px red",
    borderLeft: "solid 4px red",
  },
  feedbackTab: {
    color: "#ecaf2b !important",
  },
  closeTable: {
    position: "absolute",
    top: "3%",
    right: "1.5%",
    cursor: "pointer",
    zIndex: "9",
  },
  tableName: {
    marginBottom: "4px",
    marginLeft: "1vh",
    fontWeight: "bold",
  },
  menuList: {
    maxHeight: "50vh",
    overflowY: "scroll",
  },
  filterMenu: {
    minWidth: "0 !important",
  },
  pgMenuItem: {
    "&:hover": {
      backgroundColor: "#f5f5f5 !important",
      // border: 'solid 1px #157fff',
    },
  },
  multiTabLock: {
    backgroundColor: "white",
    zIndex: "10",
    position: "absolute",
    width: "100%",
    height: "calc(100% - 100px)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "500",
  },
  popupIndicatorOpen: {
    transform: "none !important",
  },
  custId: {
    color: "gray",
    marginBottom: "2vh",
  },
  autoDisabled: {
    backgroundColor: "lightGray !important",
  },
  currentField: {
    backgroundColor: "#f1f4f7 ",
  },
  formSubmitContainer: {
    display: "flex",
    margin: "6vh 2vw",
    justifyContent: "center",
  },
  addTable: {
    textDecoration: "none",
    color: theme.palette.headerGray,
    fontSize: "12px",
  },
  selectLabel: {
    color: "#5c5d64",
    display: "flex",
    //fontSize: '12.5px',
    marginBottom: "0.8vh",
    fontWeight: "400 !important",
  } /*Styles for input*/,
  textFieldRoot: {
    border: "none",
    fontSize: "13px !important",
    fontWeight: "normal !important",
    padding: "1vh 1vw !important",
    border: "1px solid #8A8886",
    color: "#33343D !important",
    ["@media (min-width: 1680px)"]: {
      fontSize: "13px",
    },
    ["@media (min-width: 1280px) and (max-height: 650px)"]: {
      fontSize: "10.5px !important",
    },

    ["@media (min-width: 1920px)"]: {
      fontSize: "16px",
    },
  },
  textFieldRootError: {
    border: "none",
    fontSize: "13px !important",
    fontWeight: "normal !important",
    padding: "1vh 1vw !important",
    border: "1.5px solid red",
    color: "#33343D !important",
    ["@media (min-width: 1680px)"]: {
      fontSize: "13px",
    },
    ["@media (min-width: 1280px) and (max-height: 650px)"]: {
      fontSize: "10.5px !important",
    },

    ["@media (min-width: 1920px)"]: {
      fontSize: "16px",
    },
  },
  textFieldRootFocus: {
    border: "solid 1px green !important",
    fontSize: "13px !important",
    fontWeight: "normal !important",
    padding: "1.5vh 1vw !important",
  },

  textFieldInput: {
    fontSize: "12px !important",
    fontWeight: "normal !important",
  },
  autoCompleteInput: {
    padding: "0 !important",
    fontWeight: "normal !important",
    fontSize: "12px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14.5px !important",
    },
  },
  autoOptions: {
    backgroundColor: "white !important",
    padding: "1vh 1vw 0 1vw !important",
    borderRadius: "0px",
    color: "#646884",
    fontSize: "12px !important",
    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14.5px !important",
    },
    ["@media (min-width: 1680px)"]: {
      fontSize: "13px",
    },
    ["@media (min-width: 1280px) and (max-height: 650px)"]: {
      fontSize: "10.5px !important",
    },

    ["@media (min-width: 1920px)"]: {
      fontSize: "16px",
    },
  },
  autoClear: {
    display: "none",
  },
  autoPaper: {
    boxShadow: "0px 19px 27px 0 rgba(71, 71, 71, 0.09)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
  disabledText: {
    cursor: "not-allowed",
  },
  rowLink: {
    cursor: "pointer",
    //textDecoration: 'underline',
    fontWeight: "600",
    width: "12vw",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    cursor: "pointer",
    color: "#314059",
  },
  overflowHeader: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  tabRoot: {
    padding: "0",
    minWidth: "fit-content",
    fontSize: "12px",
    marginRight: "2vw",
  },

  disableEdit: {
    color: `${theme.palette.lightGray} !important`,
    cursor: "not-allowed !important",
  },
  tabContainer: {
    padding: "0 0 ",
    marginTop: "2vh",
    marginBottom: "1vh",
    color: theme.palette.headerGray,
  },
  formDiv: {
    width: "calc(35% - 16px - 3vw) !important",
    backgroundColor: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(0, 0, 0, 0.6)",
    boxShadow: "0px 0px 10px rgb(0 0 0 / 19%)",
    borderRadius: "4px",
    padding: "2vh 1.5vw",
    margin: "0 8px",
    // height: 'calc(100% - 60px - 4vh - 16px)',
    position: "relative",
  },
  formStyle: {
    backgroundColor: theme.palette.white,
    padding: "50px 2vw 10px 2vw",
    borderRight: "solid 1px rgba(0,0,0, 0.1)",
    overflow: "hidden",
  },
  tableContainer: {
    overflow: "hidden",
    flex: "1",
    // margin: '40px 0 0 0',
    height: "62%",
    position: "relative",
  },
  table: {
    borderRadius: "10px",
  },
  tableRoot: {
    //  border: 'solid 1px rgba(0, 0, 0, 0.1)',
    maxHeight: "94%",
    borderRadius: "10px",
    overflowX: "scroll",
    borderRadius: "0px",
  },
  tableHeader: {
    backgroundColor: theme.palette.black1,
    color: `#000000 !important`,
    borderRight: " solid 1px rgba(0, 0, 0, 0.1)",
  },
  tableCell: {
    fontWeight: "normal !important",
    fontSize: "12px !important",
    borderRight: " solid 1px rgba(0, 0, 0, 0.1)",
  },
  tableCellData: {
    border: "0.75px solid #8A8886",
    borderRadius: "4px",
    padding: "1vh",
  },
  addButton: {
    color: theme.palette.blue,
    fontSize: "12px",
    cursor: "pointer",
    textDecoration: "underline",
    // display: 'flex',
    [theme.breakpoints.up("md")]: {
      fontSize: "12px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "14.5px !important",
    },
  },
  add: {
    color: theme.palette.blue,
    fontSize: "12px",
    cursor: "pointer",
    textDecoration: "underline",
    display: "flex",
    position: "absolute",
  },
  slash: {
    textDecoration: "none",
    margin: "0 0.4vw",
  },
});
