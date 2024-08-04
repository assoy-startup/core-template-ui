import { height } from "@xstyled/styled-components";

export const loginStyles = (theme) => ({
  container: {
    height: '100vh',
  },
  card: {
    width: '100%',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  btnBlock: {
    width: '100%',
  },
  fab: {
    marginRight: '5px',
  },
  textPrimary: {
    color: '#ff6f61', // Adjust this color to match the logo's primary color
  },
  formControl: {
    borderRadius: '30px',
    borderColor: '#ff6f61', // Adjust this color to match the logo's primary color
  },
  btnPrimary: {
    backgroundColor: '#ff6f61', // Adjust this color to match the logo's primary color
    borderColor: '#ff6f61', // Adjust this color to match the logo's primary color
  },
  btnOutlinePrimary: {
    color: '#ff6f61', // Adjust this color to match the logo's primary color
    borderColor: '#ff6f61', // Adjust this color to match the logo's primary color
  },
  btnOutlinePrimaryHover: {
    backgroundColor: '#ff6f61', // Adjust this color to match the logo's primary color
    borderColor: '#ff6f61', // Adjust this color to match the logo's primary color
    color: '#fff',
  },
  LoginCard:{
    borderRadius:`1vh !important`,
    boxShadow:"rgba(0,0,0,0.20) 0px 3px 6px",
    padding:"1vh 1vw",
    border:"solid 0.5px #dee2e6"
  },
  loginForm: {
    width: "100%",
    backgroundColor: theme.palette.white,
    height: "70%",
  },
  loginBg: {
    padding: "14% 0 0 5%",
    position: "relative",
    width: "calc(52% - 5%)",
    background: "linear-gradient(180deg, #0052CC 0%, rgba(0, 82, 204, 0) 100%)",
  },
  captchaImg: {
    //borderBottom: 'solid 1px lightGray',
    padding: "1vh 1vw",
    borderRadius: "8px",
    backgroundColor: theme.palette.white,
  },
  captcha: {
    width: "175px",
    display: "flex",
    justifyContent: "space-around",
    border: "solid 1px rgba(0,0,0,0.3) !important",
    borderRadius: "8px",
    backgroundColor: theme.palette.white,
    padding: "0.4vh",
    margin: "1.5vh 0 1vh 0",
    alignSelf: "center",
  },
  refreshIcon: {
    cursor: "pointer",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: `${theme.palette.charcoalGray} !important`,
  },
  appPreview: {
    marginTop: "3vh",
  },

  appSummary: {
    position: "relative",
    color: "white",
    display: "flex",
    flexDirection: "column",
  },
  loginText: {
    color: "#9a9ca2",
    fontWeight: "400",
    fontFamily: "Roboto",
    lineHeight: "1.6",
  },
  loginAppText: {
    fontWeight: "400",
    margin: "1.5vh 0 0 0",
    lineHeight: "1.6",
  },
  loginField: {
    color: theme.palette.black,
    fontWeight: "500",
    marginBottom: "1.5vh",
  },
  loginLabel: {
    marginBottom: "0.5vh",
    color: "#53555c",
    fontWeight: "500",
  },
  button: {
    padding: "1.5vh 2vw !important",
    fontSize: "14px",
  },
  inputRoot: {
    borderRadius: "10px !important",
    fontWeight: "normal !important",
    border: "none !important",
    "&:-webkit-autofill": {
      borderRadius: "10px !important",
      backgroundColor: "white !important",
    },
  },
  focusedInput: {
    //border: `1px solid #4484FF !important`
  },
  input: {
    paddingTop: "2vh !important",
    paddingBottom: "2vh !important",
    border: "none",
    color: theme.palette.black,
    fontWeight: "400",
    "&:-webkit-autofill": {
      borderRadius: "10px !important",
      backgroundColor: "white !important",
    },
  },
  formField: {
    borderRadius: "10px !important",
    margin: "1.5vh 0 1vh 0",
    width: "100%",
    border: "none !important",
    backgroundColor: theme.palette.lightGray,
  },
  actionContainer: {
    display: "flex",
    // justifyContent: 'space-between',
    margin: "30px 0",
    justifyContent: "flex-end",
    paddingTop: "20px",
  },
  forgotPwd: {
    color: "#878585",
    fontSize: "12px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "16px !important",
    },
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
    cursor: "pointer",
    width: "201px",
    alignSelf: "center",
  },
  pageTitle: {
    fontWeight: "500",
    fontSize: "15px",
    color: theme.palette.darkGray,
    marginBottom: "0.2vh",
    textAlign: "center",
  },
  pageSubTitle: {
    fontSize: "13px",
    color: theme.palette.darkGray,
    marginBottom: "30px",
    textAlign: "center",
  },
});
export const accountStyles = (theme) => ({
  container: {
    /* backgroundColor: theme.palette.white,
         margin: '30px calc(24px + 1vw) 0 calc(24px + 1vw)',
         border: 'solid 1px rgba(0, 0, 0, 0.05)',
         boxShadow: '0px 1px 4px 0 rgba(92, 101, 132, 0.18)',
         borderRadius: '10px',
         height: 'fit-content'*/
    height: "calc(100% - 30px)",
    borderRadius: "10px",
  },
  infoBox: {
    padding: "1vw",
    margin: "2vw",
    border: "solid 1px rgba(0, 0, 0, 0.2)",
    boxShadow: "0px 1px 4px 0 rgba(92, 101, 132, 0.18)",
    borderRadius: "10px",
    height: "fit-content",
    width: "50%",
  },
  infoRow: {
    display: "flex",
    borderBottom: "solid 1px rgba(0, 0, 0, 0.2)",
    paddingBottom: "1vh",
    marginBottom: "1vh",
    "&:last-child": {
      borderBottom: "0",
      marginBottom: 0,
    },
  },
  infoLabel: {
    color: "gray",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  teamName: {
    padding: "4px 1vw",
    marginRight: "4px",
    backgroundColor: "lightGray",
    borderRadius: "10px",
    marginBottom: "1vh",
  },
  teamNameTag: {
    padding: "4px 1vw",
    marginRight: "4px",
    //border: 'solid 1px lightGray',
    borderRadius: "10px",
    color: "white",
  },
  supDetails: {
    marginTop: "4px",
    fontWeight: "500",
    "&:first-child": {
      marginTop: "0",
    },
  },
  custId: {
    "&:after": {
      content: ",",
    },
  },
});
