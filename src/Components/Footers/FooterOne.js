import React from 'react'
import fb_icon from "../../Images/facebook@2x.jpg"
import insta_icon from "../../Images/instagram@2x.jpg"
import linkedIn_icon from "../../Images/linkedin@2x.jpg"
import "./FooterOne.css"

const FooterOne = () => {
    return (
        <div className='footerOne'>
            <div className='footer_columns'>
                <p className='footer_title'>ABOUT US</p>
                <p className='footer_line'>Doorstep Wash & Dryclean Service</p>
            </div>
            <div className='footer_columns'>
                <p className='footer_title'>Home</p>
                <p className='footer_line'>Sign In</p>
                <p className='footer_line'>Register</p>
            </div>
            <div className='footer_columns'>
                <p className='footer_title'>Pricing</p>
            </div>
            <div className='footer_columns'>
                <p className='footer_title'>Careers</p>
                <p className='footer_line'>Blogs</p>
                <p className='footer_line'>Create</p>
            </div>
            <div className='footer_columns'>
                <p className='footer_title'>Contact</p>
            </div>
            <div className='footer_columns'>
                <p className='footer_title'>SOCIAL MEDIA</p>
                <div className='icons-container'>
                    <img className='footer_icons' src={fb_icon} alt='pic'/>
                    <img className='footer_icons' src={insta_icon} alt='pic'/>
                    <img className='footer_icons' src={linkedIn_icon} alt='pic'/>

                </div>
            </div>



        </div>
    )
}

export default FooterOne
