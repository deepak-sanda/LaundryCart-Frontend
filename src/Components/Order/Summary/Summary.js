import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Summary.css";
const apiUrl = process.env.REACT_APP_API_URL


const Summary = ({ products, onClose, setShowSuccessModal }) => {


    const [storeLocation, setStoreLocation] = useState("");
    console.log(storeLocation);



    const status = "Ready to pickup"

    const selectedProducts = products.filter(
        (product) =>
            product.quantity > 0 &&
            (product.services.washing || product.services.ironing || product.services.bleach)
    );

    // useEffect(() => {
    //     // Send the selectedProducts to the parent
    //     onProductsSelected(selectedProducts);
    // }, [selectedProducts, onProductsSelected]);

    const calculateSubTotal = () => {
        return selectedProducts.reduce((total, product) => total + product.price, 0);
    };

    const total_amount = calculateSubTotal() + 90

    const calculate_total_numOfProducts = () => {
        return selectedProducts.reduce((total, product) => total + product.quantity, 0);
    };

    const no_of_products = calculate_total_numOfProducts();
    console.log(no_of_products)



    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    const address = localStorage.getItem("address");
    const district = localStorage.getItem("district")
    const userId = localStorage.getItem("userId")
    console.log(userId)

    const handleConfirm = async () => {
        onClose()
        const payload = {
            storeLocation,
            totalItems: no_of_products,
            totalAmount: total_amount,
            status,
            userId,
            selectedProducts
        };

        console.log("Payload to be sent:", payload);

        try {
            const response = await axios.post(`${apiUrl}/laundry/orders`, payload);
            console.log("Order confirmed", response.data);
        } catch (error) {
            console.error("Error creating order:", error.response?.data || error.message);
        }
        setShowSuccessModal(true);
    };


    return (
        <>
            <div className="modal_background" onClick={onClose}></div>
            <div className="modal_content">
                <div className='summary_header'>
                    <h3>Summary</h3>
                    <div className="close_btn" onClick={onClose}>X</div>
                </div>
                <div className='store_address_section'>
                    <select
                        className='address_ip'
                        required
                        value={storeLocation} // Control the select value with state
                        onChange={(e) => setStoreLocation(e.target.value)}
                    >
                        <option value="" disabled>Select your location</option>
                        <option value="Madhapur">Madhapur</option>
                        <option value="Kukatpally">Kukatpally</option>
                        <option value="LB nagar">LB nagar</option>
                        <option value="Himayathnagar">Himayathnagar</option>
                    </select>
                    <div style={{ paddingRight: "40px" }}>
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
                        <div style={{ display: "flex", borderBottom: "1px solid #707070", width: "670px", margin: "0px 30px", padding: "0px 30px" }}>
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
                            {calculateSubTotal()}
                        </p>
                    </div>
                    <div style={{ marginLeft: "515px", width: "235px", display: "flex" }}>
                        <p style={{ marginBottom: "0px", textAlign: "left", font: "normal normal 600 16px/22px Open Sans", letterSpacing: "0.38px", color: "#1B2734" }}>Pickup Charges:</p>
                        <p style={{ padding: "15px 0px 0px 45px", margin: "5px 0px", textAlign: "left", font: "normal normal 600 18px/24px Open Sans", letterSpacing: "0.48px", color: "#272727" }}>
                            90
                        </p>
                    </div>
                    <div style={{ height: "45px", width: "730px", margin: "0px 30px", backgroundColor: "#5861AE", color: "#fff", display: "flex" }}>
                        <p style={{ margin: "12px 0px 0px 515px", textAlign: "left", font: "normal normal 600 18px/24px Open Sans", letterSpacing: "0.43px" }}>Total:</p>
                        <p style={{ width: "120px", margin: "10px 0px", textAlign: "right", font: "normal normal bold 22px/30px Open Sans", letterSpacing: "0.53px" }}>Rs {total_amount}</p>
                    </div>
                </div>
                <div className='address_section' >
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
                <div className='summary_footer'>
                    <div className='confirm_btn' onClick={handleConfirm}>Confirm</div>
                </div>

            </div >
        </>
    );
};

export default Summary;
