import React, { useEffect } from 'react'
import cautionImg from "../../../Images/caution_img.png"
import "./CancelOrder.css"
import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL


const CancelOrder = ({ orderId, onClose }) => {

    const handleCancel = async () => {
        onClose()
        if (orderId) {
            try {
                const response = await axios.patch(`${apiUrl}/laundry/cancelorder/${orderId}`, {status:"Cancelled"})
                console.log(response.data)
             } catch (error) {
                console.log(error)
            }
        }
    }


    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);


    return (
        <div >
            <div className='cancelOrder_background' onClick={onClose}></div>
            <div className='cancelOrder_content'>
                <div className='cancel_header'>
                    <p>Alert</p>
                    <div style={{ height: '40px', width: '40px', display: "flex", justifyContent: 'center', alignItems: 'center', fontSize: "18px", cursor: "pointer" }}
                        onClick={onclose}>X</div >
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='cancel_left'>
                        <img src={cautionImg} alt='pic' className='caution_img' />
                    </div>
                    <div className='cancel_right'>
                        <p>Are you sure want to cancel the order No:<span style={{ color: "#5861AE" }}>{orderId}</span></p>
                        <button className='cancel_proceed' onClick={handleCancel} >Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancelOrder
