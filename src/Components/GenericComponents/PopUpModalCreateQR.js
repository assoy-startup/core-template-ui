import React, { useRef } from "react";
import { withStyles } from "@mui/styles";
import { financialStyles } from "../../Styles/financialStyles";
import { observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import { useStores } from "../../stores";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
import commonStore from "../../stores/commonStore";

const PopUpModalCreateQR = observer((props) => {
    const { classes, data } = props;
    const { userStore, commonStore } = useStores();
    const componentRef = useRef();

    const generatePDF = async () => {
        console.log("------qr", data.qrModalNo);
        const input = componentRef.current;

        if (!input) {
            console.error("Invalid element provided as first argument");
            return;
        }

        if (!data || !data.qrModalNo) {
            commonStore.handleOpenSnackBar("Failed to Download Qr ... !", "error");
            return;
        }

        try {
            const canvas = await html2canvas(input, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF({
                orientation: 'Portrait',
            });

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width / 2;  // Adjust the image width scale if needed
            const imgHeight = canvas.height / 2; // Adjust the image height scale if needed

            const x = (pageWidth - imgWidth) / 2; // Centering the image horizontally
            const y = (pageHeight - imgHeight) / 2; // Centering the image vertically

            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);

            // Add QR code value at the bottom of the page
            pdf.setFontSize(12); // Adjust the font size if needed
            const textWidth = pdf.getTextWidth(data.qrModalNo);
            const textX = (pageWidth - textWidth) / 2; // Center the text horizontally
            pdf.text(data.qrModalNo, textX, pageHeight - 10);

            pdf.save(`${data.qrModalNo}.pdf`);
        } catch (error) {
            commonStore.handleOpenSnackBar(`Error generating Qr ${error}... !`, "error");
        }
    };

    return (
        <Dialog
            disableEscapeKeyDown={true}
            classes={{ paper: classes.lgDialog }}
            open={props.open}
            BackdropProps={{ classes: { root: classes.backdrop } }}
        >
            <DialogTitle className={classes.dialogHeading}>
                <div className="rowFlex spaceBetween">
                    <div>Model QR - Code</div>
                    <div><CloseIcon onClick={props.cancel} /></div>
                </div>
            </DialogTitle>
            <DialogContent>
                <hr />
                <div ref={componentRef}>
                    <div className="rowFlex spaceEvenly">
                        <QRCode value={data.qrModalNo} size={150} />
                    </div>
                    <div className="rowFlex flexCenter">{data.modalType} - {data.qrModalNo}</div>
                </div>
                <br />
                <div className="rowFlex spaceEvenly">
                    <Button variant="contained" onClick={props.cancel}>Cancel</Button>
                    <Button variant="contained" onClick={generatePDF}>Download</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
});

export default withStyles(financialStyles, { withTheme: true })(
    withRouter(PopUpModalCreateQR)
);
