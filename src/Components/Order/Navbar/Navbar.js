import React from 'react'
import { useNavigate } from 'react-router-dom';
import profile_pic from "../../../Images/profile_pic.jpg"

import "./Navbar.css"

const Navbar = () => {

    const Navigate = useNavigate()

    const handleRoute = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('address')
        Navigate('/')
    }

    const user = localStorage.getItem("user")
    return (
        <div>
            <nav className="login_header">
                <p className="icon">LAUNDRY</p>
                <div>
                    <button className="pricing_btn">PRICING</button>
                    <button className="career_btn" style={{Position:'absolute', top:'0px'}}>CAREER</button>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <div><img className='profile_pic' src={profile_pic}  alt='pic' /></div>
                            <div>{user}</div>
                        </button>
                        <div className="dropdown-content">
                            <button className='log-out' onClick={handleRoute} >LOGOUT</button>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
