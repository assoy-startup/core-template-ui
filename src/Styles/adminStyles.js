export const statusStyles = (theme) => ({
  pageContainer: {
    width: "100%",
    position: "relative",
    height: "87%",
  },
  pageWrapper: {
    backgroundColor: theme.palette.white,
    // boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    margin: "1.2% 1.5vw",
    height: "94%",
    borderRadius: "8px",
  },
  serverUp: {
    backgroundColor: "#34ca77",
    color: theme.palette.white,
    borderRadius: "15px",
    padding: "4px 1vw",
    width: "fit-content",
  },
  serverDown: {
    backgroundColor: "#f04848",
    color: theme.palette.white,
    borderRadius: "15px",
    padding: "4px 1vw",
    width: "fit-content",
  },
  healthCard: {
    border: "solid 2px #c5c6d1",
    // cursor: 'pointer',
    borderRadius: "6px",
    backgroundColor: theme.palette.white,
    flex: "1",
    margin: "0 0.5vw 20px 0.5vw",
    padding: "1vh 1vw",
    color: "#33343D",
    position: "relative",
    fontWeight: "400",
    display: "flex",
    cursor: "pointer",
    "&:last-child": {
      marginRight: "0vw",
    },
    "&:hover": {
      //   background: '#FDCC43',
      border: "solid 2px black",
    },
  },
  activeCard: {
    // background: '#FDCC43',
    border: "solid 2px black",
  },
});

export const teamStyles = (theme) => ({
  container: {
    height: "100%",
    borderRadius: "10px",
    display: "flex",
  },
  indexerArray: {
    backgroundColor: "#ededed",
    fontSize: "12.5px",
    fontWeight: "500",
    [theme.breakpoints.up("md")]: {
      fontSize: "12.5px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15.5px !important",
    },
    boxShadow: "0px -1px 20px rgba(0, 0, 0, 0.07)",
    width: "100%",
    padding: "1vh 0",
    border: "solid 1px lightGray",
    cursor: "default",
    //  display: 'flex',
    flexWrap: "wrap",
  },
  indexer: {
    padding: "0 0",
    //  backgroundColor: '#e0e0e0',
    verticalAlign: "center",
    padding: "1vh 1vw",
    borderBottom: "solid 1px lightGray",
    "&:last-child": {
      borderBottom: 0,
    },
  },
  mappingContainer: {
    marginTop: "-6px",
    padding: "calc(2% + 6px) 2vw ",
    height: "calc(100% - 48px - 50px)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  indexerContainer: {
    backgroundColor: "#f8fafc",
    width: "40%",
  },
  miniMappingContainer: {
    padding: "30px 2vw 30px 2vw ",
    backgroundColor: "#f8fafc",
    height: "calc(100% - 48px - 110px)",
    display: "flex",
    flexDirection: "column",
  },
  flexGrow: {
    display: "flex",
    flexDirection: "column",
    flex: "2",
    height: "78%",
    overflowY: "scroll",
  },
  configFooter: {
    position: "absolute",
    bottom: "0",
    boxShadow: "0px -1px 20px rgba(0, 0, 0, 0.07)",
    padding: "2vh 1vw",
    background: theme.palette.white,
    display: "flex",
    justifyContent: "flex-end",
    width: "calc(100% - 2vw)",
    height: "30px",
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
  notifField: {
    marginBottom: "1.5vh",
  },
});
