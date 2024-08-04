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


const PopUpStockInfo=observer((props)=>{
    const { classes,data } = props;
    const { userStore } = useStores();
    
    

      const formatNumber = (num) => {
        return num !== undefined ? num.toLocaleString("en-IN") : 0;
      };

    return(
        <Dialog disableEscapeKeyDown={true}
        classes={{paper:classes.lgStockDialog}}
        open={props.open}
        BackdropProps={{classes:{root:classes.backdrop}}}
        onClose={props.cancel}
        >
          <div style={{border:'2px solid grey'}}>
            <DialogTitle className={classes.dialogHeading} ><div className="rowFlex flexCenter"><div>Stock Details Of - <span style={{color:'green'}}>{data.stockInfo.modelNumber}</span></div><div></div></div></DialogTitle>
            <DialogContent >
              <div className="rowFlex spaceEvenly" >
              <table className="table table-hover table-sm">
                  <thead style={{border:'2px solid grey'}}>
                    <tr>
                      <th scope="col" style={{ backgroundColor: '#3b81bb', color: 'white',textAlign:'center' }}>#</th>
                      <th scope="col" style={{ backgroundColor: '#3b81bb', color: 'white' ,textAlign:'center'}}>Modal</th>
                      <th scope="col" style={{ backgroundColor: '#3b81bb', color: 'white',textAlign:'center' }}>Available Qty</th>
                      <th scope="col" style={{ backgroundColor: '#3b81bb', color: 'white' ,textAlign:'center'}}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.stockInfo &&  [data.stockInfo].map((booking, index) => (
                      <tr key={index} style={{border:'2px solid grey'}}>
                        <th scope="row" style={{border:'2px solid grey'}}>{index + 1}</th>
                        <td style={{border:'2px solid grey',textAlign:'center'}} >{booking.modelNumber}</td>
                        <td style={{border:'2px solid grey',textAlign:'center'}}>{booking.availableQuantity}</td>
                        <td style={{border:'2px solid grey',textAlign:'center'}}>{formatNumber(booking.price) || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* <div className="rowFlex flexCenter" style={{marginTop:'8vh'}}>
              <div><Button variant="contained" onClick={props.cancel}>Close</Button></div>
              </div> */}
            </DialogContent>
          </div>
        </Dialog>
    )

})
export default withStyles(financialStyles,{withTheme:true})(
withRouter(PopUpStockInfo)
);