import React, { useEffect, useState } from 'react';
import "../Summary/Summary.css";
import CancelOrder from '../CancelOrder/CancelOrder';

const SummaryCancel = ({ orderId, onClose, storeLocation, selectedProducts, total_amount, status }) => {

    const [showCancelModal, setShowCancelModal] = useState(false);

    const address = localStorage.getItem("address");
    const district = localStorage.getItem("district");


    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);


    const handleClick = () => {
        // onClose()
        setShowCancelModal(true)
    }

    return (
        <>
            {/* Background to close the summary modal */}
            <div className="modal_background" onClick={onClose}></div>
            <div className="modal_content" onClick={(e) => e.stopPropagation()}>
                <div
                    style={{
                        backgroundColor: status === "Cancelled" ? "#FF5C00" : ""
                    }}
                    className='summary_header'
                >
                    <h3>Summary</h3>
                    <div className="close_btn" onClick={onClose}>X</div>
                </div>

                <div className='store_address_section'>
                    <div >
                        <p style={{ color: '#1B2734', textAlign: "left", fontSize: "16px", fontWeight: "bold" }}>Store Location:</p>
                        <p style={{ color: '#1B2734', textAlign: "left", fontSize: "16px" }}> {storeLocation}</p>
                    </div>
                    <div>
                        <p style={{ color: '#1B2734', textAlign: "left", fontSize: "16px", fontWeight: "bold" }}>Store Address:</p>
                        <p style={{ color: '#1B2734', textAlign: "left", fontSize: "16px" }}>Near Phone booth, 10th road</p>
                    </div>
                    <div>
                        <p style={{ color: '#1B2734', textAlign: "left", fontSize: "16px", fontWeight: "bold" }}>Phone:</p>
                        <p style={{ color: '#1B2734', textAlign: "left", fontSize: "16px" }}>+91 9897969594</p>
                    </div>
                </div>
                <div style={{ paddingBottom: "20px" }}>
                    <p style={{ padding: "10px 30px", font: "14px", fontFamily: "Open Sans", color: "#3B3737", fontWeight: "bold" }}>Order Details</p>
                    {selectedProducts.map((product) => (
                        <div key={product.id} style={{ display: "flex", borderBottom: "1px solid #707070", width: "670px", margin: "0px 30px", padding: "0px 30px" }}>
                            <p style={{ width: "220px", textAlign: "left", font: "normal normal normal 18px/24px Open Sans", letterSpacing: "0.43px", color: "#1B2734" }}>
                                {product.title}
                            </p>
                            <p style={{ font: "italic normal normal 16px/22px Open Sans", color: "#1B2734", letterSpacing: "0.38px", width: "290px" }}>
                                {product.services.washing ? " Washing, " : ""}
                                {product.services.ironing ? " Ironing, " : ""}
                                {product.services.bleach ? " Chemical wash " : ""}
                            </p>
                            <div style={{ paddingTop: "15px", textAlign: "left", font: "normal normal 600 16px/22px Open Sans", letterSpacing: "0.38px", color: "#1B2734", width: "100px" }}>
                                {product.quantity} x {product.servicePrice} =
                            </div>
                            <div style={{ paddingTop: "12px", textAlign: "left", font: "normal normal 600 20px/27px Open Sans", letterSpacing: "0.48px", color: "#5861AE" }}>{product.price}</div>
                        </div>
                    ))}
                    <div style={{ marginLeft: "565px", width: "195px", display: "flex", borderBottom: "1px solid #707070" }}>
                        <p style={{ marginBottom: "0px", textAlign: "left", font: "normal normal 600 16px/22px Open Sans", letterSpacing: "0.38px", color: "#1B2734" }}>Sub total:</p>
                        <p style={{ padding: "15px 25px", margin: "0px", textAlign: "left", font: "normal normal 600 18px/24px Open Sans", letterSpacing: "0.48px", color: "#272727" }}>
                            {total_amount - 90}
                        </p>
                    </div>
                    <div style={{ marginLeft: "515px", width: "235px", display: "flex" }}>
                        <p style={{ marginBottom: "0px", textAlign: "left", font: "normal normal 600 16px/22px Open Sans", letterSpacing: "0.38px", color: "#1B2734" }}>Pickup Charges:</p>
                        <p style={{ padding: "15px 0px 0px 45px", margin: "5px 0px", textAlign: "left", font: "normal normal 600 18px/24px Open Sans", letterSpacing: "0.48px", color: "#272727" }}>
                            90
                        </p>
                    </div>
                    <div style={{ height: "45px", width: "730px", margin: "0px 30px", backgroundColor: status === "Cancelled" ? "#FF5C00" : "", color: "#fff", display: "flex" }}>
                        <p style={{ margin: "12px 0px 0px 515px", textAlign: "left", font: "normal normal 600 18px/24px Open Sans", letterSpacing: "0.43px" }}>Total:</p>
                        <p style={{ width: "120px", margin: "10px 0px", textAlign: "right", font: "normal normal bold 22px/30px Open Sans", letterSpacing: "0.53px" }}>Rs {total_amount}</p>
                    </div>
                </div>
                <div className='address_section'>
                    <p style={{ margin: "5px 30px", textAlign: "left", font: "normal normal 600 14px/19px Open Sans", letterSpacing: "0.43px", color: "#3B3737" }}>Address</p>
                    <div style={{ display: 'flex' }}>
                        <div className='addressBox'>
                            <p style={{ margin: '0px', padding: '3px 5px', textAlign: "left", font: "normal normal bold 18px/24px Open Sans", letterSpacing: "0.18px", color: "#3E3F40" }}>Home</p>
                            <p style={{ margin: '0px', padding: '3px 5px', textAlign: "left", font: "normal normal normal 14px/22px Open Sans", letterSpacing: "0.18px", color: "#3E3F40" }}>{address}, {district}</p>
                        </div>
                        <div className='addressBox'>
                            <p style={{ margin: '0px', padding: '3px 5px', textAlign: "left", font: "normal normal bold 18px/24px Open Sans", letterSpacing: "0.18px", color: "#3E3F40" }}>Others</p>
                            <p style={{ margin: '0px', padding: '3px 5px', textAlign: "left", font: "normal normal normal 14px/22px Open Sans", letterSpacing: "0.18px", color: "#3E3F40" }}>5th Road, New Nallakunta, Hyderabad</p>
                        </div>
                        <div>
                            <p style={{ padding: "5px 0px", textAlign: "left", font: "normal normal bold 18px/24px Open Sans", letterSpacing: "0.18px", color: " #5861AE", cursor: 'pointer' }}>NEW</p>
                        </div>
                    </div>
                </div>
                {status !== "Cancelled" && <div className='summary_footer'>
                    <div className='cancel_order' onClick={handleClick}>Cancel Order</div>
                </div>}
            </div >
            {showCancelModal && <CancelOrder orderId={orderId} onClose={onClose} />
            }
        </>
    );
};

export default SummaryCancel;
