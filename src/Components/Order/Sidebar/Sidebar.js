import React from 'react'
import home from "../../../Images/home.png"
import more from "../../../Images/more.png"
import more1 from "../../../Images/more1.png"
import list from "../../../Images/list.png"
import list1 from "../../../Images/list1.png"
import "./Sidebar.css"
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = () => {


    const location = useLocation();
    const navigate = useNavigate();



    return (
        <div className='sidebar'>
            <div >
                <img className="sidebar_pic" src={home} alt='pic' />
            </div >
            <div className={` ${location.pathname === "/createorder" ? "selected" : ""}`} onClick={() => {
                navigate("/createorder");
            }} >
                <img
                    className="sidebar_pic"
                    src={location.pathname === "/createorder" ? more1 : more}
                    alt='pic'
                />
            </div>
            <div className={` ${location.pathname === "/orders" ? "selected" : ""}`} onClick={() => {
                navigate("/orders");
                
            }} >
                <img
                    className="sidebar_pic"
                    src={location.pathname === "/orders" ? list1 : list}
                    alt='pic'
                />           
            </div>

        </div>
    )
}

export default Sidebar

