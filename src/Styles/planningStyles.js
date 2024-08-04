export const planningStyles = (theme) => ({
  planning: {
    marginLeft: 400,
    marginRight: 400,
    [theme.breakpoints.down("lg")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  branchCode: {
    backgroundColor: theme.palette.darkBlue,
    border: "solid 1px lightgray",
    fontWeight: "600",
    padding: "0 5%",
    color: "white",
    height: "22%",
  },
  menuItem: {
    minHeight: "30px !important",
  },

  branchCodeTextStyles: {
    whiteSpace: "nowrap", // Prevent text from wrapping to the next line
    overflow: "hidden", // Hide any overflow beyond the container's width
    textOverflow: "ellipsis", // Display ellipsis (...) when text overflows
    maxWidth: "70%", // Ensure the text doesn't stretch beyond the container's width
    display: "inline-block", // Ensure the text stays on a single line
    verticalAlign: "middle",
  },
  formCont: {
    width: "45%",
    color: theme.palette.darkGray,
    fontWeight: "600",
  },
  tran_text_color: {
    color: "#5fd4ec",
  },
  content_box: {
    backgroundColor: "rgba(250,250,248,253)",
  },
  selectInput: {
    padding: "1vh !important",
  },
  selectInputCont: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    boxShadow: "0 0 5px skyblue",
    border: "1px solid #3498db",
  },
  box_items_align: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
    margin: "1%",
    padding: "2%",
  },
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
    margin: "2vh 10%",
    height: "16.6%",
  },

  tbl_heading_color: {
    backgroundColor: "#fef0f0",
  },
  tbl_row_color: {
    backgroundColor: "rgba(190,236,247,255)",
  },
  editIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  boxCalendar: {
    width: 180,
    height: 40,
    backgroundColor: "white",
    boxShadow: "0 0 5px skyblue",
    border: "1px solid #3498db",
  },
  scheduleAuditScreenHeight: {
    maxHeight: "250%",
    "@media screen and (max-height: 1280px)": {
      maxHeight: "180%",
    },

    "@media screen and (max-height: 768px)": {
      maxHeight: "170%",
    },

    "@media screen and (max-height: 481px)": {
      maxHeight: "170%",
    },
  },
});
