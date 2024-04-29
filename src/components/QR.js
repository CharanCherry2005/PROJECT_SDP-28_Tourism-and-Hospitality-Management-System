import React from 'react';
import qrCodeImage from './images/qr.png';
import './qr.css';

const QR = () => {
    return (
        <div className="qr-container">
            <h1>Payment Confirmation</h1>
            <p>Thank you for choosing our service. Your payment has been successfully processed.</p>
            <p>Please scan the QR code below to complete your payment:</p>
            <img src={qrCodeImage} alt="QR Code" className="qr-code" />
            <p>If you have any questions or concerns, feel free to contact our support team.</p>
        </div>
    );
}

export default QR;
