import React, { useState } from 'react';
import axios from 'axios';
import LoginHeader from '../../Headers/LoginHeader';
import FooterOne from '../../Footers/FooterOne';
import FooterTwo from '../../Footers/FooterTwo';
import { Link, useNavigate } from 'react-router-dom';
import "./Registration.css"
const apiUrl = process.env.REACT_APP_API_URL


const Registration = () => {
    const [error, setError] = useState('');
    const [data, setData] = useState({
        name: '',
        phone: '',
        address: '',
        state: '',
        district: '',
        email: '',
        pincode: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setError('');
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!data.email || !data.password || !data.confirmPassword || !data.name || !data.state || !data.district || !data.phone || !data.pincode || !data.address) {
            setError('Please enter all the required fields!');
            return;
        }

        // Validation for password match
        if (data.password !== data.confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}/laundry/register`, {
                name: data.name,
                email: data.email,
                phone: data.phone,
                state: data.state,
                district: data.district,
                address: data.address,
                pincode: data.pincode,
                password: data.password
            });

            if (response.status >= 200 && response.status < 300) {
                console.log('Signup successful');
                navigate('/'); // Redirect to the login page
            } else {
                throw new Error('Signup failed with status code ' + response.status);
            }
        } catch (error) {
            console.error('Error:', error.message);

        }
    };

    return (
        <>
            <div>
                <LoginHeader />
                <div className='reg_container' >
                    <div className='reg_left'>
                        <p className='reg_laundry_service'>Laundry Service</p>
                        <p className='reg_left_txt'>Doorstep Wash & Dryclean Service</p>
                        <p className='reg_left-txt2'>Don’t Have An Account?</p>
                        <Link to="/" className="reg_reg-btn" >Sign In </Link>
                    </div>
                    <div className='reg_right'>
                        <form onSubmit={handleSubmit}>
                            <p className='reg_heading'>Register</p>
                            <input type='text' name='name' placeholder='Name' className='login_input' value={data.name} onChange={handleChange} />
                            <input type='email' name='email' placeholder='Email' className='login_input' value={data.email} onChange={handleChange} />
                            <input type='number' name='phone' placeholder='Phone number' className='login_input' value={data.phone} onChange={handleChange} />
                            <input type='text' name='state' placeholder='State' className='login_input' value={data.state} onChange={handleChange} />
                            <input type='text' name='district' placeholder='District' className='login_input' value={data.district} onChange={handleChange} />
                            <input type='text' name='address' placeholder='Address' className='login_input' value={data.address} onChange={handleChange} />
                            <input type='number' name='pincode' placeholder='Pin code' className='login_input' value={data.pincode} onChange={handleChange} />
                            <input type='password' name='password' placeholder='Password' className='login_input   ' value={data.password} onChange={handleChange} />
                            <input type='password' name='confirmPassword' placeholder='Confirm password' className='login_input' value={data.confirmPassword} onChange={handleChange} />
                            <div>{error}</div>
                            <button type='submit' className='btn-register'>Register</button>
                        </form>

                    </div>

                </div>
                <div className='middle'>
                    <p className='refer_txt'>Now Refer & Earn ₹500 for every referral*</p>
                    <p className='tc'>*Terms and conditions will be applied</p>
                </div>
                <FooterOne />
                <FooterTwo />
            </div>
        </>
    );
};

export default Registration;





