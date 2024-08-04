export const dialogStyles = (theme) => ({
  submitBackdrop: {
    //     backdropFilter: 'transparent'
  },
  webhookField: {
    marginBottom: "15px",
  },
  medDialog: {
    minWidth: "45%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    padding: "4%",
  },
  submitDialog: {
    width: "23%",
    boxShadow: "0 0 87px 0 rgba(71, 71, 71, 0.2)",
    border: "solid 1px rgba(0, 0, 0, 0.1)",
  },
  overlayBackdrop: {
    //background: 'rgba(0, 0, 0, 0.5)',
    // backdropFilter:' blur(5px)'
  },
  overlayDialog: {
    width: "58vw",
  },
  overlay: {
    fontSize: "17px",
    display: "flex",
  },
  overlayError: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    backgroundColor: theme.palette.blue,
    color: theme.palette.white,
    textTransform: "unset",
    height: "44px",
    borderRadius: "6px",
    fontSize: "16px",
    width: "120px",
    marginTop: 0,
    marginBottom: "20px",
    marginRight: "1vw",
  },
  dialogHeading: {
    fontSize: "16px",
    fontWeight: "700",
  },
  dialogSubHeading: {
    fontSize: "13px",
    color: theme.palette.slateGray,
  },
  backdrop: {
    // backdropFilter: 'blur(10px)'
  },
});

export const helpStyles = (theme) => ({
  backdrop: {
    //   backdropFilter: 'blur(10px)'
  },
  stepActive: {
    color: "white !important",
  },
  stepInactive: {
    color: `${theme.palette.slateGray}`,
  },
  completed: {
    color: `${theme.palette.blue} !important`,
  },
  helpDialog: {
    width: "45vw",
    backgroundColor: theme.palette.dark,
    minHeight: "50vh",
  },
  button: {
    backgroundColor: theme.palette.blue,
    color: theme.palette.white,
    textTransform: "unset",
    height: "44px",
    borderRadius: "6px",
    fontSize: "16px",
    width: "120px",
    marginTop: 0,
    marginBottom: "20px",
    marginRight: "1vw",
  },
  dialogHeading: {
    fontSize: "20px",
    fontWeight: "700",
    color: theme.palette.white,
  },
  dialogSubHeading: {
    fontSize: "13px",
    color: theme.palette.slateGray,
  },
  stepHeading: {
    fontSize: "16px",
    color: theme.palette.white,
  },
});
