import React from 'react';
import QRCode from 'qrcode.react';

const PassportSizeQR = React.forwardRef((props, ref) => {
    const { qrModalNo } = props;

    return (
        <div ref={ref} className="passport-ticket">
            <div className="qr-code">
                <QRCode value={qrModalNo} size={150} /> {/* Adjust size as needed */}
            </div>
            <div className="qr-value" style={{color:'green',fontWeight:'bold'}}>{qrModalNo}</div>
        </div>
    );
});

export default PassportSizeQR;
