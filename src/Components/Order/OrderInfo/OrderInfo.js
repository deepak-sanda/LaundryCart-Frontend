import React, { useState } from 'react'
import CancelOrder from '../CancelOrder/CancelOrder'
import SummaryCancel from '../Summay-cancel/SummaryCancel'


const OrderInfo = ({orderId, orderDate, storeLocation,  totalItems, totalAmount, status, selectedProducts }) => {

    const [openCancelConfirm , setOpenCancelConfirm] = useState(false)
    const [openSummaryCancel, setOpenSummaryCancel] = useState(false)

    console.log(status)

    const handleClick = () => {
        if(status !== "Cancelled"){
            setOpenCancelConfirm(true)

        }
    }

    return (
        <div>
            <div className='order' style={{ display: "flex", cursor:"pointer" }}>
                <div className="orderInfo" style={{ height: "100%", width: "200px", paddingLeft: '5px' }}>{orderId}</div>
                <div className="orderInfo" style={{ height: "100%", width: "160px", paddingLeft: '2px' }}>{orderDate}</div>
                <div className="orderInfo" style={{ height: "100%", width: "100px", paddingLeft: '2px' }}>{storeLocation}</div>
                <div className="orderInfo" style={{ height: "100%", width: "100px", paddingLeft: '32px' }}>Hyderabad</div>
                <div className="orderInfo" style={{ height: "100%", width: "150px", paddingLeft: '-32px' }}>+91 9897969594</div>
                <div className="orderInfo" style={{ height: "100%", width: "100px", paddingLeft: '2px' }}>{totalItems}</div>
                <div className="orderpriceInfo" style={{
                    height: "100%", width: "70px", paddingLeft: '2px', font: "normal normal bold 12px/48px Open Sans", fontWeight:'900'
                }}>{totalAmount}Rs</div>
                <div className="orderInfo" style={{ height: "100%", width: "150px", paddingLeft: '32px',color: status === "Cancelled" ? "#F52727" : "inherit" ,fontWeight: status ==="Cancelled"?'bolder': "inherit"}}>{status}</div>
                <div className="orderInfo" style={{ height: "100%", width: "100px", paddingLeft: '-32px' , color:"#EB1717"}} onClick={handleClick}>Cancel order</div>
                <div className="orderInfo" style={{ height: "100%", width: "50px", paddingLeft: '2px'}}  onClick={() => setOpenSummaryCancel(true) }>view</div>
            </div>
            {openCancelConfirm && <CancelOrder orderId ={orderId} onClose={() =>setOpenCancelConfirm(false)}  />}
            {openSummaryCancel && <SummaryCancel orderId={orderId} storeLocation={storeLocation} selectedProducts={selectedProducts} 
            total_amount={totalAmount} status={status} onClose={() =>setOpenSummaryCancel(false)} />}
        </div>
    )
}

export default OrderInfo
