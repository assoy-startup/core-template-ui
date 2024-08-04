export const formStyles = (theme) => ({
  fieldDiv: {
    backgroundColor: theme.palette.white,
    position: "absolute",
    borderRadius: "4px",
    padding: "1vh 1vw",
    paddingBottom: "12px",
    flexDirection: "column",
    boxShadow: "1px dashed rgba(0, 0, 0, 0.6)",
    border: "1px dashed rgba(0, 0, 0, 0.6)",
    zIndex: "1",
    cursor: "move",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  approveBtn: {
    backgroundColor: "#30b283",
    color: "white",
    padding: "4px 1vw",
    borderRadius: "15px",
    cursor: "pointer",
    display: "flex",
  },
  rejectBtn: {
    backgroundColor: "#e45f5f",
    color: "white",
    marginRight: "4px",
    padding: "4px 1vw",
    borderRadius: "15px",
    cursor: "pointer",
    display: "flex",
    paddingRight: "4px",
    position: "relative",
  },
  rejectedMenu: {
    position: "absolute",
    top: "100%",
    marginTop: "1vh",
    border: "1px solid #D1D1D1",
    borderRadius: "6px",
    padding: "4px 0",
    backgroundColor: theme.palette.white,
    marginLeft: "-1vw",
  },
  rejectMenuItem: {
    padding: "4px 1vw",
    color: "#646884",
    "&:hover": {
      backgroundColor: "rgba(211,211,211,0.6)",
      // border: 'solid 1px #157fff',
    },
  },
  popup: {
    backgroundColor: theme.palette.white,
    position: "absolute",
    borderRadius: "4px",
    padding: "1vh 1vw",
    flexDirection: "column",
    border: "1px dashed rgba(0, 0, 0, 0.6)",
    zIndex: "1",
    cursor: "move",
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  },
  formContainer: {
    marginTop: "2vh",
  },
  tabRoot: {
    minWidth: "auto",
    minHeight: "10px !important",
    color: "#5c5d64",
    paddingLeft: "0px",
    paddingRight: "0px",
    marginRight: "1vw",
    fontWeight: "500",
  },
  selectedTab: {
    color: "#2F6EE9",
    fontWeight: "600",
  },
  indicatorColor: {
    backgroundColor: "#2F6EE9 !important",
  },
  fixedTab: {
    borderBottom: "0.5px solid rgba(51, 52, 61,0.3)",
  },
  tabs: {
    minHeight: "min-content",
  },
  multiline: {
    padding: "0",
    border: "none !important",
  },
  fieldLabel: {
    color: "#67686e",
    fontWeight: "400",
    marginBottom: "4px",
  },
  hiddenText: {
    color: theme.palette.cloudyBlue,
    fontSize: "18px",
    whiteSpace: "pre-line",
    visibility: "hidden",
    height: "2px",
    overflow: "hidden",
    // padding: '1vh 1vw'
  },
  textFieldInput: {
    color: theme.palette.headerGray,
    backgroundColor: theme.palette.white,
    borderRadius: "4px",
    padding: "1vh 1vw",
    lineHeight: "1.2",
    //height: '24px',
    border: "0.75px solid #8A8886",
    whiteSpace: "pre",
    fontWeight: "400",
    whiteSpace: "break-spaces",
  },
  fieldIconContainer: {
    display: "flex",
    marginTop: "4vh",
    justifyContent: "flex-end",
  },
  trainingIconContainer: {
    display: "flex",
    marginTop: "4vh",
    justifyContent: "flex-end",
  },
  formIcons: {
    marginRight: "1vw",
    cursor: "pointer",
  },
});