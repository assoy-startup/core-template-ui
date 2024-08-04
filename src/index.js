import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import "./index.scss";
import "./Styles/pagination.scss";

//import * as serviceWorker from './serviceWorker';
//import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { configure } from "mobx";
import { Provider } from "mobx-react";
//import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import commonStore from "./stores/commonStore";
import userStore from "./stores/userStore";

//Mobx stores

const theme = createTheme({
  palette: {
    primary: {
      main: "#0094dd",
    },
    secondary: {
      main: "#161616",
    },
    default: {
      main: "#2F6EE9",
    },
    blue: "#0094dd",
    darkBlue: "#064388",
    lightBlue: "#b3eff9",
    darkGray: "#737278",
    lightGray: "#f3f4f6",
    black: "#191a1e",
    pressedBlue: "#0070e0",
    white: "#ffffff",
    headerGray: "#646884",
    warmGray: "#666e78",
    textGray: "#76839d",

    //Secondary colors
    red: "#fc525c",
    mustard: "#fec600",
    green: "#00bf83",
    purple: "#5268ef",
    pink: "#f0487a",
    bgGray: "#f1f4f7",

    black1: "#161616",
    dullGray: "#797979",
    darkYellow: "#ffce00",
  },
  breakpoints: {
    values: {
      xs: 1360,
      sm: 1440,
      md: 1680,
      lg: 1920,
      xl: 2048,
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    useNextVariants: true,
    fontFamily: "Poppins",
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        message: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
        icon: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        },
        action: {
          display: "none",
        },
      },
    },
    MuiCheckbox:{
      styleOverrides:{
        root:{
          paddingTop: '4px',
          paddingBottom: '4px'
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            margin: '0',
            "&&&:before": {
              opacity: '1'
            },
            "&&&:after": {
              opacity: '1'
            },
          },
        },
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "&.Mui-expanded": {
            minHeight: '0'
          },
          minHeight: '0',
          fontWeight: '700'
        },
        content: {
          margin: '2vh 0',
          "&.Mui-expanded": {
            margin: '2vh 0',
          },
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingTop: '0',
          paddingBottom: '1vh'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: "16px",
          opacity: '0.8',
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
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#565E6C',
          minWidth: '14%',
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
        "&$selected": {
          color: '#565E6C'
        },

      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          color: "#536586",
          borderRadius: "4px",
          backgroundColor: "transparent",
          border: "solid 1px #c5c1c0",
          "&$focused": {
            backgroundColor: "#fff",
            borderColor: "#161616",
          },
          underline: {
            borderBottom: "none !important",
          },
          "&:hover": {
            backgroundColor: "#f3f4f6",
            // border: 'solid 1px #0094dd',
          },
          "&$disabled": {
            backgroundColor: "#fff",
            color: "black",
          },
          "&&&:before": {
            borderBottom: "none !important",
          },
          "&$underline": {
            "&&&:before": {
              borderBottom: "none !important",
            },
            "&&:after": {
              borderBottom: "none",
            },
          },
        },
        input: {
          padding: "1vh 1vw",
          fontSize: "13px",
          fontWeight: "500",
          "@media (min-width: 1680px)": {
            fontSize: "13px",
          },
          "@media (min-width: 1920px)": {
            fontSize: "16px",
          },
          "&::placeholder": {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "inherit",
          },
        },
        inputAdornedStart: {
          paddingLeft: "1vw",
        },
        inputAdornedEnd: {
          paddingRight: "1vw",
        },
      },
    },
    MuiButton: {
      // Name of the component ⚛️ / style sheet
      styleOverrides: {
        root: {
          // Name of the rule
          color: "white", // Some CSS
          fontSize: "10px",
          padding: "6px 1vw",
          fontWeight: "normal !important",
          backgroundColor: "#0094dd",
          "@media (min-width: 1440px)": {
            fontSize: "11px",
          },
          "@media (min-width: 1680px)": {
            fontSize: "12px",
          },
          "@media (min-width: 1920px)": {
            fontSize: "16px",
          },
          "&$disabled": {
            // increase the specificity for the pseudo class
            //  backgroundColor: ""
          },
          "&:hover": {
            // increase the specificity for the pseudo class
            backgroundColor: "#0094dd",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "solid 1px lightGray",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          border: 'solid 1px lightGray'
        },
        select: {
          padding: '1vh'
        }
      }
    },
    MuiMenuItem:{
      styleOverrides:{
        root:{
          borderRadius: "0px",
          "&:hover": {
            backgroundColor: "#f3f4f8 !important",
            // border: 'solid 1px #0094dd',
          },
          fontSize: "11px",
          minHeight: "fit-content",
          "@media (min-width: 1680px)": {
            fontSize: "13px",
          },
          "@media (min-width: 1920px)": {
            fontSize: "16px",
          },
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          //backgroundColor: "#b3eff9 !important",
          borderCollapse: "collapse",
          textAlign:'center',
          fontWeight: "normal",
          borderBottom: "solid 1px lightGray",
          padding: "2vh !important",
          color: "#5a828f",
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
          backgroundColor: "white",
        },
        stickyHeader: {
          backgroundColor: "#0094dd !important",
          borderCollapse: "collapse",
          color: "white",
          padding: "1vh !important",
        },
        footer: {
          left: 0,
          bottom: 0, // <-- KEY
          zIndex: 2,
          position: "sticky",
          backgroundColor: "white",
          borderTop: "solid 1px rgba(0, 0, 0, 0.05)",
        },
      },
    },
  },
  styleOverrides: {
    MuiInputLabel: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rule
        color: "#00000",
        "&$focused": {
          // increase the specificity for the pseudo class
          color: "#00000",
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        input: {
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
      },
      root: {
        color: "#536586",
        borderRadius: "4px",
        backgroundColor: "transparent",
        border: "solid 1px #c5c1c0",
        "&$focused": {
          backgroundColor: "#fff",
          borderColor: "#161616",
        },
        "&:hover": {
          backgroundColor: "#fff",
          // border: 'solid 1px #0094dd',
        },
        "&$disabled": {
          backgroundColor: "#fff",
          color: "black",
        },
        "&$underline": {
          "&&&:before": {
            borderBottom: "none !important",
          },
          "&&:after": {
            borderBottom: "none",
          },
        },
      },
      input: {
        padding: "1vh 1vw",
        fontSize: "13px",
        fontWeight: "500",
        "@media (min-width: 1680px)": {
          fontSize: "13px",
        },
        "@media (min-width: 1920px)": {
          fontSize: "16px",
        },
        "&::placeholder": {
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
          width: "inherit",
        },
      },
      inputAdornedStart: {
        paddingLeft: "1vw",
      },
      inputAdornedEnd: {
        paddingRight: "1vw",
      },
    },
    MuiSnackbar: {
      anchorOriginTopRight: {
        top: "60px",
      },
    },

    MuiTable: {
      stickyHeader: {
        borderCollapse: "collapse",
      },
    },
    MuiTableContainer: {
      root: {
        borderRadius: "0px",
      },
    },
  
    MuiSwitch: {
      switchBase: {
        "&$checked + $track": {
          backgroundColor: "#45c97a !important",
          opacity: "1",
        },
      },
    },
   

    MuiInputBase: {
      root: {
        color: "#646884 !important",
        fontSize: "13px",
        fontWeight: "500",
        "@media (min-width: 1680px)": {
          fontSize: "13px",
        },
        "@media (min-width: 1920px)": {
          fontSize: "16px",
        },
      },
    },
    MuiListItem: {
      root: {
        fontSize: "12px ",
        color: "#646884",
        borderRadius: "10px",
        margin: "0",
        padding: "1vh 1vw !important",
        "&:hover": {
          backgroundColor: "#fff !important",
        },
        "&$selected": {
          backgroundColor: "#f3f4f8 !important",
          "&:hover": {
            backgroundColor: "#f3f4f8 !important",
          },
        },
      },
    },
    MuiTabs: {
      "& .indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > span": {
          maxWidth: 40,
          width: "100%",
          backgroundColor: "white",
        },
      },
    },

    MuiMenu: {
      list: {
        padding: "0px",
      },
    },
  },
});

const stores = {
  commonStore,
  userStore,
};

configure({ enforceActions: "observed" });

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider {...stores}>
      <BrowserRouter basename={"/"}>
        <App />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root"),
);

//serviceWorker.unregister();
