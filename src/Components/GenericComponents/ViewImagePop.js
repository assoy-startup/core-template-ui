import React, { useState, useRef, useEffect } from "react";
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


const ViewImagePop=observer((props)=>{
    const { classes,data } = props;
    const [modalImage, setModalImage] = useState("");
    const { userStore,commonStore  } = useStores();
    useEffect(()=>{
            // Check if the image data is a Base64 string
            if (typeof data.modalImage === 'string' && data.modalImage.startsWith('/9j/')) {
              // Decode Base64 string to binary data
              const byteString = atob(data.modalImage);
              const arrayBuffer = new ArrayBuffer(byteString.length);
              const uint8Array = new Uint8Array(arrayBuffer);
              for (let i = 0; i < byteString.length; i++) {
                uint8Array[i] = byteString.charCodeAt(i);
              }
              // Create a Blob from the binary data
              const blob = new Blob([uint8Array], { type: 'image/jpeg' });
              // Create an object URL from the Blob
              const urlCreator = window.URL || window.webkitURL;
              const modalImage = urlCreator.createObjectURL(blob);
              setModalImage(modalImage);
            } else {
              commonStore.handleOpenSnackBar('Invalid image data format.', 'error');
            }
    },[data.modalImage])


    return(
        <Dialog disableEscapeKeyDown={true}
        classes={{paper:classes.lgDialog}}
        open={props.open}
        BackdropProps={{classes:{root:classes.backdrop}}}
        >
            <DialogTitle className={classes.dialogHeading} ><div className="rowFlex spaceBetween"><div>Modal - {data.modalNo}</div><div><CloseIcon onClick={props.cancel}/></div></div></DialogTitle>
            <DialogContent>
                <hr/>
                <div className="rowFlex flexCenter">
                  <img src={modalImage || Images.uploadImageIcon} alt="Selected" style={{ width: "100%", maxWidth: "37vw", height: "30vh", borderRadius: "8px", cursor: "pointer" }} />
                </div>
            </DialogContent>
        </Dialog>
    )

})
export default withStyles(financialStyles,{withTheme:true})(
withRouter(ViewImagePop)
);