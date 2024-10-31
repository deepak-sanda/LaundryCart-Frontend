import React, { useState } from 'react'
import "./Login.css"
import LoginHeader from '../../Headers/LoginHeader'
import FooterOne from '../../Footers/FooterOne'
import FooterTwo from '../../Footers/FooterTwo'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
const apiUrl = process.env.REACT_APP_API_URL


const Login = () => {

    

    const [inputValue, setInputValue] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        const isEmail = emailRegex.test(inputValue);
        const isPhone = !isNaN(inputValue) && inputValue.length === 10;
    
        if (isEmail || isPhone) {
            setError(""); 
        } else {
            setError("Please enter a valid email or phone number");
            return;
        }
    
        try {
            const payload = isEmail ? { userCredentials: inputValue, password } : { userCredentials: inputValue, password }
            const response = await axios.post(`${apiUrl}/laundry/login`, payload);
            console.log(response);
    
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.username);
            localStorage.setItem("address", response.data.address);
            localStorage.setItem("district", response.data.district);
            localStorage.setItem("userId", response.data.userId);

    
            navigate("/orders");
    
        } catch (error) {
            console.log(error);
            setError("Invalid login credentials"); 
        }
    };
    


    return (
        <>
            <LoginHeader />
            <div className='login_page'>
                <div className='left'>
                    <p className='laundry_service'>Laundry Service</p>
                    <p className='left_txt'>Doorstep Wash & Dryclean Service</p>
                    <p className='left-txt2'>Don’t Have An Account?</p>
                    <Link to="/register" className="reg-btn" >Register </Link>
                </div>
                <div className='right'>
                    <p className='sign_in_title'>SIGN IN</p>
                    <form onSubmit={handleSubmit}>
                        <input className='login_input' type='text' value={inputValue} placeholder='Mobile / Email' onChange={(e) => setInputValue(e.target.value)} required /> <br />
                        <input className='login_input' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <div className='errorMsg'>
                            {error}
                        </div>
                        <p className='fp' onClick={() => navigate("/resetpassword")}>Forget password?</p>
                        <button className='btn-signIn' type='submit'>Sign In</button>

                    </form>
                </div>

            </div>
            <div className='middle'>
                <p className='refer_txt'>Now Refer & Earn ₹500 for every referral*</p>
                <p className='tc'>*Terms and conditions will be applied</p>
            </div>
            <FooterOne />
            <FooterTwo />
        </>
    )
}

export default Login
