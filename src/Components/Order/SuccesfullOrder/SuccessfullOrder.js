import React, { useEffect } from 'react'
import doneImg from "../../../Images/doneImg.jpg"
import "./SuccessFullOrder.css"
import { useNavigate } from 'react-router-dom';
const SuccessfullOrder = ({onClose}) => {


    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    const Navigate = useNavigate()

    return (
        <div>
            <div className="Success_background" onClick={onClose} ></div>
            <div className='success_content'>
                <div className='doneImg_container'>
                    <img className="doneImg" src={doneImg} alt='pic' />
                </div>
                <p className='success_lineOne'>Your order is successfully.</p>
                <p className='success_lineTwo'>You can track the delivery in the "Orders" section.</p>
                <div className='goToOrders' onClick={() => {
                    // fetchOrderItems()
                    Navigate("/orders")
                }} >
                    Go to orders
                </div>
            </div>

        </div>
    )
}

export default SuccessfullOrder
