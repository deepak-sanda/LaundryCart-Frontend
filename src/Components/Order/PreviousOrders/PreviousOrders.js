import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import FooterTwo from '../../Footers/FooterTwo';
import './PreviousOrders.css';
import OrderInfo from '../OrderInfo/OrderInfo';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
const apiUrl = process.env.REACT_APP_API_URL


const PreviousOrders = () => {
    const [orderItems, setOrderItems] = useState([]);
    

    const fetchOrderItems = async () => {
        const id = localStorage.getItem("userId");

        try {
            if (id) {
                const response = await axios.get(
                    `${apiUrl}/laundry/orderitems/${id}`
                );
                setOrderItems(response.data);
                console.log("success:", response.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Log the orderItems when they change
    useEffect(() => {
        console.log("Updated orderItems:", orderItems);
    }, [orderItems]); // Trigger on orderItems state update

    // Use useEffect to fetch order items on component mount
    useEffect(() => {
        fetchOrderItems(); // Fetch order items on mount
    }, []); // Empty dependency array means this runs only on mount

    return (
        <>
            {orderItems.length ? (
                <>
                    <Navbar />
                    <div className='align_h'>
                        <Sidebar />
                        <section className='previousOrders_section'>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <p className='orders_count'>Orders | {orderItems.length}</p>
                                <Link to="/createorder" className="createOrder_btn" style={{ margin: "55px 0px 0px 900px " }}>Create</Link>
                            </div>
                            <div className='table_head' style={{ display: "flex"  }}>
                                <div className="order_headers" style={{ height: "100%", width: "200px", paddingLeft: '5px' }}>Order Id</div>
                                <div className="order_headers" style={{ height: "100%", width: "160px", paddingLeft: '2px' }}>Order Date & Time</div>
                                <div className="order_headers" style={{ height: "100%", width: "100px", paddingLeft: '2px' }}>Store Location</div>
                                <div className="order_headers" style={{ height: "100%", width: "100px", paddingLeft: '32px' }}>City</div>
                                <div className="order_headers" style={{ height: "100%", width: "150px", paddingLeft: '-32px' }}>Store Phone</div>
                                <div className="order_headers" style={{ height: "100%", width: "100px", paddingLeft: '2px' }}>Total Items</div>
                                <div className="order_headers" style={{ height: "100%", width: "70px", paddingLeft: '2px', fontWeight:"bolder" }}>Price</div>
                                <div className="order_headers" style={{ height: "100%", width: "150px", paddingLeft: '32px' }}>Status</div>
                                <div className="order_headers" style={{ height: "100%", width: "100px", paddingLeft: '-32px' }}>Cancel</div>
                                <div className="order_headers" style={{ height: "100%", width: "50px", paddingLeft: '2px' }}>View</div>
                            </div>
                            {orderItems.map((order, index) => (
                                <OrderInfo
                                    key={index}
                                    orderId={order._id}
                                    orderDate={order.orderDate}
                                    storeLocation={order.storeLocation}
                                    totalItems={order.totalItems}
                                    totalAmount={order.totalAmount}
                                    status={order.status}
                                    selectedProducts ={order.selectedProducts}
                                />
                                
                            ))}
                        </section>
                    </div>
                    
                    <FooterTwo />
                </>
            ) : (
                <Home />
            )}
        </>
    );
};

export default PreviousOrders;
