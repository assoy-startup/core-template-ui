const drawerWidth = 240;

export const homeStyles = (theme) => ({
  pageContainer: {
    backgroundColor: theme.palette.white,
    width: "100%",
    height: "100%",
    overflowY: "hidden",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  expandIcon: {
    position: "absolute",
    right: "0",
    zIndex: "1200",
    top: "calc(58px)",
    left: "17%",
    width: "fit-content",
    "@media screen and (max-width: 1024px)": {
      left: "21%",
    },
    transform: "rotate(180deg)",
  },
  expandIconClose: {
    position: "absolute",
    right: "0",
    zIndex: "1200",
    top: "calc(58px + 3vh)",
    left: "4%",
    width: "fit-content",
  },
  drawerOpen: {
    width: "70%",
    marginLeft: "30%",
    "@media screen and (max-width: 1024px)": {
      width: "65%",
      marginLeft: "35%",
    },
  },
  drawerClose: {
    width: "95%",
    marginLeft: '5%'
  },

  closeMargin: {
    width: "5%",
  },
});

export const footerStyles = (theme) => ({
  footerContainer: {
    height: "11%",
    display: "flex",
    justifyContent: "space-around",
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    padding: "2% 0",
    margin: "2% 2%",
    border: "solid 1px lightGray",
  },
  footerLabel: {
    color: "#96979b",
    marginTop: "4px",
    textAlign: "center",
  },
  activeFooter: {
    color: theme.palette.darkBlue,
    fontWeight: "bold",
  },
});

export const datePickerStyles = (theme) => ({
  datePicker: {
    display: "flex",
    border: "solid 1px lightGray",
    borderRadius: "2px",
    height: "100%",
    padding: "0 1vw",
  },
  datePickerCont: {
    // border: 'solid 3px #e9eaed',
    borderRadius: "6px",
    cursor: "pointer",
    margin: "2vh 2vw 2vh 0",
  },
  datePickerIn: {
    position: "absolute",
    right: "2vw",
    width: "43%",
    zIndex: "99",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    backgroundColor: theme.palette.white,
    marginTop: "40px",
  },
  datePickerInr: {
    position: "absolute",
    width: "150%",
    zIndex: "99",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    backgroundColor: theme.palette.white,
    marginTop: "40px",
    top: 0,
  },
});

export const headerStyles = (theme) => ({
  sitesCard: {
    borderColor: "#00bcd5",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: 5,
    background: "#f9f9fb",
    width: "210px",
    height: "60px",
  },
 logo:{
   marginTop:'1vh',
   height:'78%',
   width:'100%'
 },
 userProfile:{
   marginTop:'1vh',
   height:'78%',
   width:'100%'
 },
  textStyle: {
    marginTop: "-12px",
    fontSize: "22px",
    color: "#00bcd5",
  },
  textStyleGender: {
    fontSize: "22px",
    color: "#00bcd5",
  },
  textStyleAlign: {
    display: "flex",
    flexDirection: "row",
  },
  textHeadcountDemo: {
    fontSize: "11px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: "-8px",
  },
  downloadButton: {
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "none",
    padding: "3px 5px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "8px",
    marginLeft: "20px",
    marginTop: "-12px",
    transition: "background-color 0.3s ease-in-out",
  },

  imageStyle: {
    width: "5vh",
    height: "4vh",
    marginTop: "-35px",
    marginBottom: "-20px",
    marginLeft: "4px",
  },
  imgGenderLogo: {
    width: "27vh",
    height: "15vh",
    marginTop: "10px",
  },
  percentageStyle: {
    display: "flex",
    fontSize: "16px",
    marginTop: "-5px",
    marginBottom: "-10px",
  },
  branchStyle: {
    display: "flex",
    flexDirection: "column",
  },
  sitesCardInnerStyles: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: "-10px",
  },
  headcountStyle: {
    borderColor: "#00bcd5",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: 5,
    background: "#f9f9fb",
    width: "210px",
    height: "200px",
    marginLeft: "15px",
  },
  demographStyle: {
    borderColor: "#00bcd5",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: 5,
    background: "#f9f9fb",
    width: "250px",
    height: "200px",
    marginLeft: "15px",
  },

  gendergraphStyle: {
    borderColor: "#00bcd5",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: 5,
    background: "#f9f9fb",
    width: "270px",
    height: "260px",
    marginLeft: "15px",
  },
  gradegraphStyle: {
    borderColor: "#00bcd5",
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: 5,
    background: "#f9f9fb",
    width: "550px",
    height: "260px",
    marginLeft: "15px",
  },

  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  //demograph
  cellStyle: {
    borderRadius: "4px",
    display: "space-between",
    backgroundColor: "#00bcd5",
    color: "white",
    padding: "7px",
    width: "150px",
    textAlign: "center",
  },
  cardStyle: {
    width: "90%",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Subtle gray border
    margin: "20px",
  },
  tableCellCss: {
    display: "flex",
    textAlign: "center",
    color: "#00bcd5",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  headingGrade: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.4)",
    marginTop: "-10px",
  },
  //end
  appBar: {
    backgroundColor: "#f1f4f7",
    boxShadow: "none !important",
    height: "58px",
  },

  closeMargin: {
    // marginLeft: "5%",
  },
  adminBtn: {
    cursor: "pointer",
    color: "#33343D",
    fontWeight: "600",
    backgroundColor: "#FDCC43",
    padding: "4px 1vw",
    borderRadius: "16px",
    width: "fit-content",
    margin: "0 1vw 0 1vw",
    height: "fit-content",
    alignSelf: "center",
  },
  reviewSession: {
    marginLeft: "1vw",
    backgroundColor: "#30b283",
    color: "white",
    padding: "4px 1vw",
    borderRadius: "15px",
    cursor: "pointer",
    display: "flex",
    height: "fit-content",
  },
  trialExpiryMsg: {
    color: theme.palette.blue,
    fontWeight: "500",
  },
  headerLogo: {
    cursor: "pointer",
    width: "115px",
  },
  tabText: {
    opacity: "1 !important",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.black,
    fontSize: "12px",
    // borderBottom: 'solid 1px rgba(0,0,0,0.1)',
    backgroundColor: theme.palette.white,
    boxShadow: "0px 1px 0px #E7E8F2",
    minHeight: "58px !important",
  },
  tabContainer: {
    height: "100%",
    display: "flex",
    color: theme.palette.white,
  },
  tabRoot: {
    height: "100%",
    padding: "0",
    minWidth: "fit-content",
    margin: "0 1vw",
    lineHeight: "normal",
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.blue,
    "& > span": {
      //  maxWidth: 40,
      width: "100%",
      display: "none",
    },
  },
  headerTabActive: {
    display: "flex",
    backgroundColor: theme.palette.darkYellow,
    borderRadius: "21px",
    color: theme.palette.black,
    padding: "8px 1vw",
    transition: "background 0.15s ease-out",
    [theme.breakpoints.down("xs")]: {
      padding: "4px 1vw",
    },
  },
  headerTab: {
    display: "flex",
    backgroundColor: "transparent",
    borderRadius: "21px",
    padding: "8px 1vw",
    lineHeight: "normal",
  },
  profileButton: {
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    padding: "4px",
    backgroundColor: theme.palette.white,
    border: `solid 2.6px #54d4dd`,
    color: theme.palette.black1,
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textTransform: "capitalize",
    cursor: "pointer",
    margin: "0 4px 0 1vw",
  },
  username: {
    color: "#a0aecc",
    fontSize: "12px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    fontWeight: "500",
  },
  arrow: {
    cursor: "pointer",
    color: "#ccd4e2",
  },
});

export const searchStyles = (theme) => ({
  searchField: {
    backgroundColor: "white !important",
  },
  searchInput: {
    fontSize: "14px !important",
    fontSize: "16px",
    ["@media (min-width: 1680px)"]: {
      fontSize: "17px",
    },
    ["@media (min-width: 1280px) and (max-height: 650px)"]: {
      fontSize: "15px !important",
    },

    ["@media (min-width: 1920px)"]: {
      fontSize: "18px",
    },
    ["@media (min-width: 1680px)"]: {
      fontSize: "17px",
    },
    ["@media (min-width: 1280px) and (max-height: 650px)"]: {
      fontSize: "15px !important",
    },

    ["@media (min-width: 768px)"]: {
      fontSize: "14px",
    },
    ["@media (min-width: 480px)"]: {
      fontSize: "12px",
    },
    ["@media (min-width: 300px)"]: {
      fontSize: "12px",
    },
    ["@media (min-width: 100px) and (max-width: 299px)"]: {
      fontSize: "10px",
    },
  },
});

export const utilStyles = (theme) => ({
  checkbox: {
    borderRadius: "5px",
    border: "solid 1px rgba(0, 0, 0, 0.2)",
    backgroundColor: theme.palette.white,
    zIndex: "10",
    width: "13px",
    height: "13px",
  },
  checkedBox: {
    backgroundColor: theme.palette.blue,
    borderRadius: "5px",
    border: `solid 1px ${theme.palette.blue}`,
    zIndex: "10",
    width: "13px",
    height: "13px",
  },
});

export const snackbarStyles = (theme) => ({
  success: {
    backgroundColor: theme.palette.turquoise,
    boxShadow: "none",
    fontSize: "12px",
    fontWeight: "normal",
    zIndex: "1400",
  },
  info: {
    backgroundColor: "#3b3b3b",
    color: theme.palette.white,
    boxShadow: "none",
    fontSize: "12px",
    fontWeight: "normal",
    zIndex: "1400",
  },
  error: {
    backgroundColor: theme.palette.red,
    boxShadow: "none",
    fontSize: "12px",
    fontWeight: "normal",
    zIndex: "1400",
  },
  root: {
    zIndex: "0",
  },
});

export const dialogStyles = (theme) => ({
  dialog: {
    width: "19%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    "@media (min-width: 50px) and (max-width: 800px)": {
      width: "80%",
    },
  },
  downloadLink: {
    cursor: "pointer",
    textDecoration: "underline",
    color: theme.palette.blue,
    margin: "1vh 0",
    textAlign: "center",
    width: "fit-content",
  },
  vRadio: {
    fontWeight: "400",
  },
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
  lgDialog: {
    width: "50%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  largeDialog: {
    width: "80%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  notifField: {
    marginBottom: "1.5vh",
  },
  smallRadioButton: {
    "& svg": {
      width: "0.7em",
      height: "0.7em",
    },
  },
  trialInput: {
    maxWidth: "50px",
    padding: "4px",
    marginRight: "1vw",
  },
  radioCont: {
    display: "flex",
    flexDirection: "row !important",
  },
  mappingRow: {
    border: "1px solid rgba(0, 0, 0, 0.2)",
    display: "flex",
    borderBottom: "none",
    "&:last-child": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.2) !important",
    },
    "&:first-child": {
      marginTop: "1vh",
    },
  },
  mappingKey: {
    width: "50%",
    borderRight: "1px solid rgba(0, 0, 0, 0.2)",
    padding: "0.5vh 1vw",
    fontWeight: "500",
    backgroundColor: "#dee9ff",
  },
  infoMsg: {
    color: "#666869",
    marginLeft: "5px",
  },
  mappingValue: {
    width: "50%",
    padding: "0.5vh 1vw",
  },
  userDetails: {
    width: "60%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  medDialog: {
    width: "30%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  dwDialog: {
    width: "35%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  mappingDialog: {
    width: "45%",
    height: "50%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  dialogHeading: {
    fontSize: "16px !important",
    fontWeight: "500 !important",
    color: theme.palette.headerGray,
    textAlign: "center !important",
    margin: "1vh 0 !important",
  },
  userDetailHeading: {
    fontWeight: "500",
    margin: "1vh 0",
    display: "flex",
    justifyContent: "space-between",
  },
  dHeading: {
    color: "#000000",
    fontWeight: "400",
    textAlign: "left",
    borderBottom: "1px solid #D1D1D1",
    padding: "3vh 1.5vw",
  },
  dialogSubHeading: {
    fontSize: "11px !important",
    color: theme.palette.headerGray,
    textAlign: "center !important",
  },
  backdrop: {
    // background: 'transparent'
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "2vh 0 3vh 0",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "1vh 0 3vh 0",
  },
  titleRoot: {
    paddingBottom: "1vh !important",
    display: "flex",
    flexDirection: "column",
  },
  tRoot: {
    padding: "0",
  },
});

export const dashboardStyles = (theme) => ({
  dateRange: {
    color: theme.palette.white,
    backgroundColor: theme.palette.blue,
    fontSize: "13px",
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: "7px",
    border: "solid 1px #d3dbe4",
    display: "flex",
  },
  signalContainer: {
    backgroundColor: theme.palette.white,
    borderRadius: "8px",
    boxShadow: "0px 2px 2px 0 rgba(4, 28, 57, 0.1)",
    height: "12px",
    width: "45px",
    display: "flex",
    justifyContent: "space-around",
  },
  skeletonCont: {
    margin: "2vh 2vw",
    height: "100%",
    position: "relative",
  },
  skelWidget: {
    width: "15.5%",
    marginRight: "1%",
    height: "100%",
  },
  skelWidgetBig: {
    width: "48.25%",
    marginRight: "1%",
    height: "100%",
    marginTop: "1.5%",
  },
  unlockCont: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "45%",
    width: "100%",
    zIndex: "1",
  },
  unlockMsg: {
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "white",
    padding: "2vh 2vw",
    borderRadius: "20px",
    display: "flex",
  },
  signal: {
    borderRadius: "50%",
    width: "8px",
    height: "8px",
    backgroundColor: "#dcdcdc",
  },
  loaderDiv: {
    backgroundColor: theme.palette.dark,
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
  },
  customPieChart: {
    position: "relative",
    width: "calc(100% - 2vw)",
    height: "100%",
    display: "flex",
    margin: "0 0 0 2vw",
    flex: "1",
    justifyContent: "flex-end",
  },
  pieData: {
    fontSize: "11px",
    color: "#6f7e9c",
    marginRight: "30px",
  },
  statItem: {
    fontSize: "10px",
    color: "#96a6c8",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1.8vh",
  },
  statCount: {
    color: "#495776",
    fontWeight: "500",
  },
  rightContainer: {
    boxShadow: "0px 2px 2px 0 rgba(28, 45, 62, 0.11)",
    borderRadius: "15px",
    width: "30%",
    backgroundColor: theme.palette.white,
    marginTop: "2vw",
    display: "flex",
    flexDirection: "column",
    height: "calc(100% - 2vw)",
  },
  leftContainer: {
    width: "78%",
    marginRight: "2%",
    display: "flex",
    flexDirection: "column",
  },
  rangeDisplay: {
    margin: "0 8px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    color: "#6f7e9c",
    fontSize: "16px",
    display: "flex",
    fontWeight: "500",
    margin: "20px 0 0 0",
  },
  container: {
    margin: "0 ",
    padding: "30px calc(24px + 1vw)",
    height: "calc(100%  - 58px - 2vh)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  uploadBox: {
    borderRadius: "15px",
    boxShadow: "0 0 22px 0 rgba(0, 0, 0, 0.09)",
    backgroundColor: theme.palette.white,
    width: "10%",
    padding: "2vw 2vw",
    fontSize: "12px",
    color: theme.palette.textGray,
    height: "100%",
    fontWeight: "500",
    marginRight: "2vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  totalUploads: {
    fontSize: "30px",
    color: "#585858",
    fontWeight: "500",
  },
  firstRow: {
    height: "130px",
    display: "flex",
    padding: "2vw 0 4vw 0",
  },
  healthBox: {
    width: "90%",
    maxWidth: "90%",
    backgroundColor: theme.palette.blue,
    color: theme.palette.white,
    height: "100%",
    padding: "2vw 2vw",
    borderRadius: "15px",
    boxShadow: "0px 2px 2px 0 rgba(28, 45, 62, 0.11)",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundImage:
      "url(https://static-assets-amygb.s3.ap-south-1.amazonaws.com/idpDashboard.png)",
  },
  serverName: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  hStatusContainer: {
    display: "flex",
    fontSize: "13px",
    fontWeight: "500",
  },
  healthStatus: {
    lineHeight: "1.7",
    width: "max-content",
    borderRight: "solid 1px rgba(255,255,255,0.5)",
    "&:last-child": {
      border: "none",
      paddingRight: "1vw",
    },
    marginRight: "1vw !important",
    "&:first-child": {
      marginRight: "1vw !important",
      paddingRight: "1vw",
    },
  },
  healthCard: {
    borderRight: "solid 1px rgba(255,255,255,0.5)",
    paddingRight: "0",
    "&:last-child": {
      border: "none",
    },
    maxWidth: "33%",
    width: "33%",
    marginRight: "1vw",
    "&:first-child": {
      marginRight: "1vw",
      paddingLeft: "0",
    },
  },
  healthLabel: {
    fontSize: "11px",
    fontWeight: "normal",
  },
  statTable: {
    boxShadow: "0px 2px 2px 0 rgba(28, 45, 62, 0.11)",
    borderRadius: "15px",
    backgroundColor: theme.palette.white,
    fontSize: "12px",
    color: theme.palette.textGray,
    width: "33%",
    flex: "1",
    padding: "1vw 1.5vw 1.6vw 1.5vw",
    marginRight: "2vw",
    "&:last-child": {
      marginRight: "0",
    },
  },
  secondRow: {
    display: "flex",
    width: "100%",
    flex: "1",
  },
  statHeader: {
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    marginBottom: "2vw",
    position: "relative",
    color: "#76839d",
    fontSize: "12px",
    margin: "2vh 0",
    fontWeight: "500",
  },
  expandIcon: {
    position: "absolute",
    right: "0",
  },

  tableContainer: {
    overflow: "hidden",
    flex: "1",
  },
  tableRoot: {
    //  boxShadow: '0px 1px 4px 0 rgba(92, 101, 132, 0.18)'
    border: "solid 0px rgba(0, 0, 0, 0.1)",
    maxHeight: "90%",
    borderRadius: "0",
  },
  tableHeader: {
    backgroundColor: "#f8f9fa",
    fontSize: "11px !important",
    borderRight: "none !important",
    "&:last-child": {
      borderRight: "none !important",
    },
    borderBottom: "solid 1px rgba(40, 40, 40,0.03)",
    borderTop: "solid 1px rgba(40, 40, 40,0.03)",
  },
  tableCell: {
    fontWeight: "normal !important",
    fontSize: "11px !important",
    borderRight: "none !important",
    "&:last-child": {
      borderRight: "none !important",
    },
    borderBottom: "solid 1px rgba(40, 40, 40,0.03)",
  },
  percentageBar: {
    border: `none`,
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
  barContainer: {
    padding: "1vh 0vw",
    fontSize: "13px",
    width: "100%",
    marginBottom: "0vh",
  },
  percentageContainer: {
    fontSize: "13px",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    marginLeft: "2vw",
  },
  percentage: {
    padding: "4px 1vw",
    borderRadius: "5px",
  },
  innerContainer: {
    margin: "2vh 1.8vw",
  },
  percentageLine: {
    height: "3px",
    border: "none",
    margin: "0",
  },
  docStatus: {
    display: "flex",
    justifyContent: "space-between",
  },
  statusContainer: {
    width: "calc(100% - 6vw)",
    borderRadius: "15px",
    backgroundColor: theme.palette.white,
    fontSize: "12px",
    fontWeight: "500",
    color: theme.palette.textGray,
    padding: "2vw 3vw",
    marginRight: "2vw",
    "&:last-child": {
      marginRight: "0",
    },
  },
});

export const sidebarStyles = (theme) => ({
  burgerIcon: {
    paddingLeft: "2vw",
    width: "70%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
  },
  boxCalendar:{
  overflowY:'hidden'
  },
  calendarSection:{
   overflowY:'hidden'
  },
  filterIcon:{
    marginTop: '2vh'
  },
  filterHead: {
    display: "flex",
    flexDirection: "row",
    padding: "1vh 1vw",
    fontWeight: "bold",
    justifyContent: "space-between",
  },
  filterComp: {
    height: "80%",
    overflowY: "scroll",
    borderBottom: "solid 1px lightGray",
  },
  sidebarTooltip: {
    backgroundColor: "black !important",
    opacity: "1 !important",
    backgroundColor: "#383a3d !important",
  },
  miniBurgerIcon: {
    cursor: "pointer",
    color: "white",
    width: "25px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: theme.palette.white,
  },
  drawerOpen: {
    width: "30%",
    marginTop: "60px",
    backgroundColor: "#202124",
    transition: "transform 1000ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
    "@media screen and (max-width: 1024px)": {
      width: "35%",
    },
  },
  drawerClose: {
    overflowX: "hidden",
    overflowY: "hidden",
    marginTop: "60px",
    transition: "transform 1000ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
    backgroundColor: "#202124",
    width: "5%",
  },
  sidebarList: {
    position: "relative",
  },
  toolbar: {
    display: "flex",
    //  backgroundColor: theme.palette.black,
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    padding: "0px",
  },
  openDrawer: {
    justifyContent: "space-between",
  },
  calendarCont: {},
});
