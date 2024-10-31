import React, { useState, useEffect } from 'react';
import washing_machine from "../../../Images/washing-machine.png";
import washing_machine1 from "../../../Images/washing-machine1.png";
import ironing from "../../../Images/ironing.png";
import ironing1 from "../../../Images/ironing1.png";
import towel from "../../../Images/towel.png";
import bleach from "../../../Images/bleach.png";
import bleach1 from "../../../Images/bleach1.png";
import "./product.css";

const Product = ({ imgSrc, Product_title, onSelect }) => {
    const [quantity, setQuantity] = useState(0);
    const [washingOn, setwashingOn] = useState(false);
    const [ironingOn, setIroningOn] = useState(false);
    const [bleachOn, setBleachOn] = useState(false);

    const calculateServicePrice = () => {
        let servicePrice = 0;
        if (washingOn) servicePrice += 10;
        if (ironingOn) servicePrice += 10;
        if (bleachOn) servicePrice += 100;

        return servicePrice;
    };

    const calculateTotalPrice = () => {
        const servicePrice = calculateServicePrice();
        return quantity * servicePrice;
    };

    const handleSelection = () => {
        const servicePrice = calculateServicePrice();
        const price = calculateTotalPrice();
    
        const selectedServices = {
            washing: washingOn,
            ironing: ironingOn,
            bleach: bleachOn,
        };
    
        // Debugging: log the data to ensure it's correct
        console.log({
            title: Product_title,
            quantity,
            services: selectedServices,
            price,
            servicePrice,
        });
    
        // Ensure the correct data is passed to parent component
        onSelect({
            title: Product_title,
            quantity,
            services: selectedServices,
            price,
            servicePrice,
        });
    };
    

    useEffect(() => {
        handleSelection();
    }, [quantity, washingOn, ironingOn, bleachOn]);  // dependencies ensure this runs after state updates

    return (
        <div className='product_component'>
            <div className='product'>
                <img className="product_img" src={imgSrc} alt={Product_title} />
                <div>
                    <p className='product_title'> {Product_title}</p>
                    <p className='Product_description'>Lorem Ipsum is simply dummy text of the</p>
                </div>
            </div>
            <div>
                <input
                    type='number'
                    className='quantity_input'
                    value={quantity}
                    placeholder='0'
                    min={0}
                    onChange={(e) => {
                        const newQuantity = parseInt(e.target.value, 10) || 0;
                        setQuantity(newQuantity); 
                    }}
                />
            </div>
            <div>
                <img
                    className="washing_type_img"
                    src={washingOn ? washing_machine : washing_machine1}
                    alt='Washing'
                    onClick={() => {
                        setwashingOn((prev) => !prev)
                    }}
                />
                <img
                    className="washing_type_img"
                    src={ironingOn ? ironing : ironing1}
                    alt='Ironing'
                    onClick={() => {
                        setIroningOn((prev) => !prev);
                    }}
                />
                <img className="washing_type_img" src={towel} alt='Drying' />
                <img
                    className="washing_type_img"
                    src={bleachOn ? bleach : bleach1}
                    alt='Bleach'
                    onClick={() => {
                        setBleachOn((prev) => !prev); 
                    }}
                />
            </div>
            {quantity !== 0 && (washingOn || ironingOn || bleachOn) ? (
                <div style={{ width: "150px" }}>
                    <p style={{ fontFamily: 'Open Sans, sans-serif', marginTop: "9px", fontWeight: "Semibold" }}>
                        {quantity} x {calculateServicePrice()} =
                        <span style={{ font: "Open Sans", fontSize: "24px", fontWeight: "bold", color: "#5861AE", paddingLeft: "5px", marginTop: "9px" }}>
                            {calculateTotalPrice()}
                        </span>
                    </p>
                </div>
            ) : (
                <p style={{ textAlign: 'center', paddingLeft: "10px", color: "#605959" }}>—</p>
            )}
            {quantity !== 0 && (washingOn || ironingOn || bleachOn) ? (
                <button
                    className='reset_btn'
                    onClick={() => {
                        setQuantity(0); 
                        setwashingOn(false); 
                        setIroningOn(false); 
                        setBleachOn(false);
                    }}
                >
                    Reset
                </button>
            ) : " "}
        </div>
    );
};

export default Product;
