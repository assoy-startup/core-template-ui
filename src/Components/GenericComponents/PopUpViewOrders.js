import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { financialStyles } from "../../Styles/financialStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle, Typography } from "@mui/material";
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
import moment from 'moment';
import { background, backgroundColor } from "@xstyled/styled-components";
import commonStore from "../../stores/commonStore";


const PopUpViewOrders = observer((props) => {
    const { classes } = props;
    const { orderStore } = useStores();
    const {inGetDeleteOrderProgress,setInvoiceCopy,orderByClientEdit}=orderStore;
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [deleteClientId, setDeleteClientId] = useState(null);

    useEffect(() => {
        orderStore.getAllOrderList();
    }, []);

    const handleDeleteOrder = (clientEntityId) => {
        setDeleteClientId(clientEntityId);
        setConfirmDeleteOpen(true);
    };


  const handleEditOrder = (clientEntityId,orderEntityId) => {
    console.log("view edit page",orderByClientEdit);
    setInvoiceCopy(orderByClientEdit);
    orderStore.setOrderEntityIdByEdit(orderEntityId);
    orderStore.setClientEntityIdByEdit(clientEntityId);
    props.cancel(); // Close the dialog
};


    const handleConfirmDelete = (value) => {
        console.log("Deleting Order :", deleteClientId);
        setConfirmDeleteOpen(false); 
        // deleteOrderById
        try{
          orderStore.deleteOrderById(value).then((data)=>{
            if(!inGetDeleteOrderProgress && data && data.status==="success"){
              commonStore.handleOpenSnackBar("Order Deleted Successfully...!");
            }else if(data && data.message){
              commonStore.handleOpenSnackBar(`Delete Order ${data.message}..!`,"error");
              }
          })
        }catch(error){
        commonStore.handleOpenSnackBar(`Error In Delete Order :${error}`,'error');
        }

    };

    const handleCancelDelete = () => {
        setConfirmDeleteOpen(false);
        setDeleteClientId(null); // Reset deleteClientId
    };

    const formatNumber = (num) => {
        if (num || num === 0) {
            return num.toLocaleString("en-IN");
        } else {
            return "";
        }
    };

    return (
        <Dialog
            disableEscapeKeyDown={true}
            fullWidth={true}
            maxWidth="lg"
            classes={{ paper: classes.lgDialogOrdersView }}
            open={props.open}
            BackdropProps={{ classes: { root: classes.backdrop } }}
        >
            <DialogTitle className={classes.dialogHeading}>
                <div className="rowFlex spaceBetween">
                    <div>Orders Details</div>
                    <div>
                        <CloseIcon onClick={props.cancel} />
                    </div>
                </div>
            </DialogTitle>
            <DialogContent>
                <Dialog
                    open={confirmDeleteOpen}
                    onClose={handleCancelDelete}
                >
                    <DialogTitle>Confirm Delete</DialogTitle>
                    <DialogContent>
                        <Typography>
                            Are you sure you want to delete this order?
                        </Typography>
                    </DialogContent>
                    <div className="rowFlex spaceEvenly">
                        <Button onClick={handleCancelDelete} color="primary">
                            No
                        </Button>
                        <Button onClick={handleConfirmDelete} color="primary">
                            Yes
                        </Button>
                    </div>
                </Dialog>

                <div className={classes.tableContainer}>
                    <table className={`table ${classes.stickyHeader}`}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Delivery Date</th>
                                <th scope="col">Party Name</th>
                                <th scope="col">Total</th>
                                <th scope="col">Advance</th>
                                <th scope="col">Balance</th>
                                <th scope="col" colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderStore.orderList.map((order, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{moment(order.date).format('YYYY-MM-DD').toString()}</td>
                                    <td>{order.clientName}</td>
                                    <td>{formatNumber(order.total)}</td>
                                    <td>{formatNumber(order.advance)}</td>
                                    <td>{formatNumber(order.balacne)}</td>
                                    <td>
                                        <i className="bi bi-pencil-fill"  style={{cursor:'pointer'}} onClick={() => {handleEditOrder(order.clientEntityId,order.orderEntityId),orderStore.getOrderByClientId(order.clientEntityId,order.orderEntityId);}} />
                                    </td>
                                    <td>
                                        <i className="bi bi-trash3" style={{cursor:'pointer'}} onClick={() => { handleDeleteOrder(order.clientEntityId) }} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="rowFlex flexCenter" style={{ marginTop: '8vh' }}>
                    {/* Additional content if needed */}
                </div>
            </DialogContent>
        </Dialog>
    );
});

export default withStyles(financialStyles, { withTheme: true })(
    withRouter(PopUpViewOrders)
);
