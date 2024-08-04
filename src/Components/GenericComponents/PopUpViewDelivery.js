import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import { financialStyles } from "../../Styles/financialStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import { Typography, Dialog, DialogTitle, DialogContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress } from "@mui/material";

const PopUpViewDelivery = observer((props) => {
    const { classes } = props;
    const { orderStore } = useStores();
    const { orderDelivery, orderByClientEdit, inGetOrderClientProgress } = orderStore;
    const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
    const [deleteClientId, setDeleteClientId] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [firstOrder, setFirstOrder] = useState(null);
    const [bulkOrdersList, setBulkOrdersList] = useState(null);
    const [isDataReady, setIsDataReady] = useState(false);  // New state variable

    useEffect(() => {
        if (orderByClientEdit.length > 0) {
            const sample = orderByClientEdit[0];
            setBulkOrdersList(sample.bulkOrderDTOSList);
            setFirstOrder({
                orderEntityId: sample.orderEntityId,
                clientEntityId: sample.clientEntityId,
                billNo: sample.billNo,
                clientName: sample.clientName,
                mobileNumber: sample.mobileNumber,
                totalQuantity: sample.totalQuantity,
                address: sample.address,
                date: sample.date,
                totalBillAmount: sample.totalBillAmount,
                advanceAmount: sample.advanceAmount,
                balanceAmount: sample.balanceAmount
            });
            setIsDataReady(true);  // Set true when data is ready
        }
    }, [orderByClientEdit]);

    const handleDeleteOrder = (clientEntityId) => {
        setDeleteClientId(clientEntityId);
        setConfirmDeleteOpen(true);
    };

    const handleEditOrder = (clientEntityId) => {
        const order = orderDelivery.find(o => o.clientEntityId === clientEntityId);
        setSelectedOrder(order);
        setEditDialogOpen(true);
    };

    const handleConfirmDelete = () => {
        console.log("Deleting Order:", deleteClientId);
        setConfirmDeleteOpen(false);
    };

    const handleCancelDelete = () => {
        setConfirmDeleteOpen(false);
        setDeleteClientId(null);
    };

    const handleCloseEditDialog = () => {
        setEditDialogOpen(false);
        setSelectedOrder(null);
    };

    const formatNumber = (num) => {
        if (num || num === 0) {
            return num.toLocaleString("en-IN");
        } else {
            return "";
        }
    };

    return (
        <>
            <Dialog
                disableEscapeKeyDown={true}
                fullWidth={true}
                maxWidth="lg"
                classes={{ paper: classes.lgDialogOrdersView }}
                open={props.open}
                BackdropProps={{ classes: { root: classes.backdrop } }}
                onClose={props.cancel}
            >
                <DialogTitle className={classes.dialogHeading}>
                    <div className="rowFlex spaceBetween">
                        <div>Delivery Details</div>
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

                    {inGetOrderClientProgress ? (
                        <div className={`${classes.loaderContainer}`}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <div className={`${classes.tableContainer}`}>
                            <TableContainer style={{ maxHeight: '60vh' }}>
                                <Table stickyHeader className="table table-hover table-sm">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>#</TableCell>
                                            <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Bill No</TableCell>
                                            <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Delivery Date</TableCell>
                                            <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Party Name</TableCell>
                                            <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Total</TableCell>
                                            <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Advance</TableCell>
                                            <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Balance</TableCell>
                                            <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {orderDelivery.map((order, index) => (
                                            <TableRow key={index} onClick={() => { handleEditOrder(order.clientEntityId), orderStore.getOrderByClientId(order.clientEntityId, order.orderEntityId); }}>
                                                <TableCell>{index + 1}</TableCell>
                                                <TableCell>{order.billNo}</TableCell>
                                                <TableCell>{moment(order.date).format('YYYY-MM-DD').toString()}</TableCell>
                                                <TableCell>{order.clientName}</TableCell>
                                                <TableCell>{formatNumber(order.total)}</TableCell>
                                                <TableCell>{formatNumber(order.advance)}</TableCell>
                                                <TableCell>{formatNumber(order.balacne)}</TableCell>
                                                <TableCell>
                                                    <i className="bi bi-x-circle" style={{ cursor: 'pointer' }} onClick={() => handleDeleteOrder(order.clientEntityId)} />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

            {/* Conditionally render this dialog based on the data readiness */}
           {
              isDataReady && (
                <Dialog
                    disableEscapeKeyDown={true}
                    fullWidth={true}
                    maxWidth="md"
                    open={editDialogOpen}
                    onClose={handleCloseEditDialog}
                >
                    <DialogTitle>
                        <div className="rowFlex spaceBetween">
                            <div>Order Details</div>
                            <div>
                                <CloseIcon onClick={handleCloseEditDialog} />
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                                {/* <div style={{ marginBottom: '10px', display: 'flex' }}>
                            <div style={{ flex: 1 }}><strong>Bill No:</strong> {firstOrder.billNo}</div>
                            <div style={{ flex: 1 }}><strong>Client Name:</strong> {firstOrder.clientName}</div>
                            <div style={{ flex: 1 }}><strong>Mobile No:</strong> {firstOrder.mobileNumber}</div>
                        </div>
                        <div style={{ marginBottom: '10px' }}><strong>Address:</strong> {firstOrder.address}</div>
                        <div style={{ marginBottom: '10px' }}><strong>Total Qty:</strong> {firstOrder.totalQuantity}</div>
                        <div style={{ marginBottom: '10px' }}><strong>Bill Amount:</strong> {firstOrder.totalBillAmount}</div>
                        <div style={{ marginBottom: '10px' }}><strong>Advance:</strong> {firstOrder.advanceAmount}</div>
                        <div><strong>Balance:</strong> {firstOrder.balanceAmount}</div> */}
                        <div style={{border:'2px solid grey'}}>
                        <div className="rowFlex flexCenter"><strong>Bill No:</strong> {firstOrder.billNo}</div>
                        <hr/>
                            <div className="flexCenter">
                               <div className="rowFlex spaceBetween" style={{marginTop:'10px'}}>
                                <div><strong>Client Name:</strong> {firstOrder.clientName}</div>
                                <div><strong>Mobile No:</strong> {firstOrder.mobileNumber}</div>
                               </div>
                               <div className="rowFlex spaceBetween" style={{marginTop:'10px'}}>
                                <div><strong>Address:</strong> {firstOrder.address}</div>
                                <div><strong>Total Qty:</strong> {firstOrder.totalQuantity}</div>
                               </div>
                               <hr/>
                               <div className="rowFlex spaceBetween" style={{marginTop:'10px'}}>
                                <div><strong>Bill Amount:</strong> {firstOrder.totalBillAmount}</div>
                                <div><strong>Advance:</strong> {firstOrder.advanceAmount}</div>
                               </div>
                                <hr/>
                               <div className="rowFlex flexCenter"style={{marginTop:'10px'}}>
                               <strong>Balance:</strong> {firstOrder.balanceAmount}
                               </div>
                            </div>
                                <hr/>

                        <TableContainer style={{ maxHeight: '60vh',marginTop:'20px' }}>
                            <Table stickyHeader className="table table-hover table-sm">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>#</TableCell>
                                        <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Model</TableCell>
                                        <TableCell style={{ backgroundColor: '#3b81bb', color: 'white' }}>Qty</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bulkOrdersList.map((orderDetails, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{orderDetails.modelNumber}</TableCell>
                                            <TableCell>{orderDetails.qty}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        </div>

                    </DialogContent>
                </Dialog>
            )
           }
        </>
    );
});

export default withStyles(financialStyles, { withTheme: true })(withRouter(PopUpViewDelivery));
