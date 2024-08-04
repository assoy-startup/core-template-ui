export const dashboardStyles = (theme) => ({
  dashboard: {
    marginLeft: 400,
    marginRight: 400,
    display: "flex",
    flexDirection: "column",
    // height: "800vh",
    [theme.breakpoints.down("lg")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  pendingCount: {
    backgroundColor: "#f8900e",
    color: theme.palette.white,
    padding: "1vh 3%",
    borderRadius: "22px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  completedCount: {
    backgroundColor: "#199919",
    color: "white",
    padding: "1vh 3%",
    borderRadius: "22px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  scanBtn: {
    cursor: "pointer",
    backgroundColor: theme.palette.blue,
    color: theme.palette.white,
    padding: "1vh 3%",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  branchTab: {
    border: "none !important",
    color: "initial",
  },
  branchCell: {
    backgroundColor: `${theme.palette.white} !important`,
  },
  branchCellCount: {
    textAlign: "center",
    backgroundColor: `${theme.palette.white} !important`,
  },
  accountCell: {
    backgroundColor: `${theme.palette.lightBlue} !important`,
    boxShadow:
      "-4px 19px 0px -18px rgba(89,222,244,1) inset, 0px -19px 0px -18px rgba(89,222,244,1) inset !important",
    border: "none !important",
  },
  branchTabActive: {
    fontWeight: "600 !important",
    color: `${theme.palette.blue} !important`,
    borderBottom: `${theme.palette.blue} solid 2px !important`,
  },
  accountName: {
    color: `${theme.palette.black} !important`,
    fontWeight: "400 !important",
  },
  dashboardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  dashboardInnerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  dashboard_items_align: {
    display: "flex",
  },
  searchContainer: {
    margin: "2vh 0 2vh 2vw",
    height: "16.6%",
    width: "50%",
  },

  branchCode: {
    backgroundColor: theme.palette.darkBlue,
    border: "solid 1px lightgray",
    fontWeight: "600",
    padding: "0 5%",
    color: "white",
    height: "22%",
  },
  tbl_main: {
    maxHeight: "300px", // Set a maximum height if needed
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "0.0em", // Set the width of the scrollbar
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0, 0, 0, 0)", // Make the thumb transparent
    },
  },
  tbl_heading_color: {
    backgroundColor: "#fef0f0",
  },
  tbl_row_color: {
    backgroundColor: "rgba(190,236,247,255)",
  },

  datePicker: {
    [theme.breakpoints.down("sm")]: {
      // backgroundColor: "red",
      // width: "40%",
      marginLeft: "auto",
      height: "80%",
      fontSize: 20,
    },
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: "grey",
      // width: "50%",
      marginLeft: "auto",
      height: "30%",
      fontSize: 50,
    },
  },
  searchbar: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginBottom: 8,
    },
    [theme.breakpoints.up("sm")]: {},
  },
  /* Styles For Dashboard View  */
  dashboard_view: {
    marginLeft: 400,
    marginRight: 400,
    // height: "800vh",
    [theme.breakpoints.down("lg")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },

  all_box_styles: {
    display: "flex",
    justifyContent: "center", // Horizontally center content
    alignItems: "center", // Vertically center content
    backgroundColor: "lightGray",
    width: 90,
    height: 50,
    borderRadius: 0,
  },

  view_all_btn_styles: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    paddingTop: 10,
  },
  view_Styles: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1.5vh 2vw !important",
  },
  statContainer: {
    display: "flex",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    marginBottom: "2vh",
    height: "12%",
    //  paddingTop: 10,
  },
  branchTab: {
    border: "none !important",
    color: "initial",
  },
  branchTabActive: {
    fontWeight: "600 !important",
    color: `${theme.palette.blue} !important`,
    borderBottom: `${theme.palette.blue} solid 3px !important`,
  },
  qrContainer: {
    width: "80%",
    margin: "5% 0 0 0 ",
    height: "95%",
  },
});

export const levelStyles = (theme) => ({
  section: {
    width: '45%'
  }
});

export const homeStyles = (theme) => ({
  calendar:{
    
  }
});

