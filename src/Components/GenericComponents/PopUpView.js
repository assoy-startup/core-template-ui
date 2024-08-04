import React, { useState, useRef } from "react";
import { withStyles } from "@mui/styles";
import { financialStyles } from "../../Styles/financialStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogContent,DialogTitle,Typography } from "@mui/material";
import Images from "../../Utils/Images";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import GroupIcon from '@mui/icons-material/Group';
import SaveIcon from '@mui/icons-material/Save';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CloseIcon from '@mui/icons-material/Close';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { background, backgroundColor } from "@xstyled/styled-components";


const PopUpView=observer((props)=>{
    const { classes,data } = props;
    const { userStore } = useStores();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return(
        <Dialog disableEscapeKeyDown={true}
        classes={{paper:classes.lgDialog}}
        open={props.open}
        BackdropProps={{classes:{root:classes.backdrop}}}
        >
            <DialogTitle className={classes.dialogHeading} ><div className="rowFlex spaceBetween"><div>{` ${data.ViewModalName} Details`} </div><div><CloseIcon onClick={props.cancel}/></div></div></DialogTitle>
            <DialogContent>
                <hr/>
              <div className="rowFlex spaceEvenly">
                View Details
              </div>
              <div className="rowFlex spaceEvenly" style={{marginTop:'8vh'}}>
              <div><Button variant="contained">Cancel</Button></div>
              <div><Button variant="contained">Set</Button></div>
              </div>
            </DialogContent>
        </Dialog>
    )

})
export default withStyles(financialStyles,{withTheme:true})(
withRouter(PopUpView)
);