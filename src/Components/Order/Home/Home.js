import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import FooterTwo from '../../Footers/FooterTwo'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const Navigate = useNavigate()

    return (
        <div>
            <Navbar />
            <div className='align_h'>
                <Sidebar />
                <section >
                    <p className='orders_count'> Order</p>
                    <article className='articleContent' >
                        <div  style={{marginTop:"-80px"}}>
                            <div className='no_orders'>No Orders available</div>
                            <button className="createOrder_btn" onClick={() => {
                                Navigate("/createorder")
                            }}>Create</button>
                        </div>
                    </article>
                </section>
            </div>
            <FooterTwo />
        </div>
    )
}

export default Home
