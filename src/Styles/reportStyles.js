export const reportStyles = (theme) => ({
  branchTab: {
    border: "none !important",
    color: "initial",
  },
  branchCell: {
    backgroundColor: `${theme.palette.white} !important`,
  },
  accountCell: {
    backgroundColor: `${theme.palette.lightBlue} !important`,
    boxShadow: "inset 0 1px 0 #59def4, inset 0 -0.5px 0 #59def4 !important",
    border: "none !important",
  },
  branchTabActive: {
    fontWeight: "600 !important",
    color: `${theme.palette.blue} !important`,
    borderBottom: `${theme.palette.blue} solid 3px !important`,
  },
  accountName: {
    color: `${theme.palette.black} !important`,
    fontWeight: "600 !important",
  },

  searchContainer: {
    margin: "0 10%",
  },

  tbl_heading_color: {
    backgroundColor: "#fef0f0",
  },
  tbl_row_color: {
    backgroundColor: "rgba(190,236,247,255)",
  },

  report_box_styles: {
    display: "flex",
    justifyContent: "center", // Horizontally center content
    alignItems: "center", // Vertically center content
    width: 90,
    height: 50,
    borderRadius: 1,
  },

  reportStatContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    // marginBottom: "1vh",
    height: "12%",
    //  paddingTop: 10,
  },
});
