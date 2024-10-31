import React, { useState } from 'react'
import LoginHeader from '../../Headers/LoginHeader'
import FooterTwo from '../../Footers/FooterTwo'
import "../Login/Login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const apiUrl = process.env.REACT_APP_API_URL


const ResetPassword = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const Navigate = useNavigate()

    const handleChangePassword = async() => {
        if(!email || !password || !confirmPassword){
            setError("All fields are required!")
        }
        
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
    
        }
        
        

        try {
            const response = await axios.patch(`${apiUrl}/laundry/resetpassword`, {email, password})
            console.log(response.data)
            if(response.status === 404){
                setError(response.data.message)
            }
            Navigate("/")


        } catch (error) {
            console.log(error)
        }
    }






    return (
        <div>
            <LoginHeader />

            <div style={{  display: "flex", justifyContent: 'center', margin: "30px 0px" }}>
                <div style={{ height: "550px", width: " 450px", borderRadius: "10px", boxShadow: " 1px 1px 20px #3D3D43" , padding:'0px 30px'}}>
                    <p style={{
                        textAlign: "center", font: 'normal normal bold 28px/40px Montserrat', letterSpacing: "1.28px",
                        color: "#4552C1",
                    }}>Change your password</p>
                    <p style={{
                        textAlign: "center", font: ' normal normal normal 18px/26px  Montserrat', letterSpacing: "1.28px",
                        color: "#565657",
                    }} >Enter your registered email address and new password to change your password</p>
                    <input
                        style={{ marginLeft: "40px" }}
                        className='login_input'
                        type='text'
                        value={email} placeholder='Email address'
                        onChange={(e) => setEmail(e.target.value)}  /> <br />
                    <input
                        style={{ marginLeft: "40px" }}
                        className='login_input'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  /> <br />
                    <input
                        style={{ marginLeft: "40px" }}
                        className='login_input'
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}  />
                    <div className='errorMsg'
                        style={{textAlign:"center ", paddingLeft:"50px"}}
                        >
                        {error}
                    </div>
                    <div className='submit_btn' onClick={handleChangePassword} >Change Password</div>
                </div>
            </div>
            <FooterTwo />
        </div >
    )
}

export default ResetPassword
