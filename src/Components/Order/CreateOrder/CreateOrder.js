import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import FooterTwo from '../../Footers/FooterTwo';
import Product from '../Product/Product';
import shirts from "../../../Images/shirts.jpg";
import Tshirts from "../../../Images/Tshirts.jpeg";
import Trousers from "../../../Images/Trousers.jpeg";
import Jeans from "../../../Images/Jeans.jpeg";
import Boxers from "../../../Images/Boxers.jpeg";
import Joggers from "../../../Images/Joggers.jpeg";
import Others from "../../../Images/Others.jpeg";
import { useNavigate } from 'react-router-dom';
import "./CreateOrder.css";
import Summary from '../Summary/Summary';
import SuccessfullOrder from '../SuccesfullOrder/SuccessfullOrder';


const CreateOrder = () => {
    const Navigate = useNavigate();
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [showSummary, setShowSummary] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false); // Moved showSuccessModal here

    const products = [
        { imgSrc: shirts, title: "Shirts" },
        { imgSrc: Tshirts, title: "Tshirts" },
        { imgSrc: Trousers, title: "Trousers" },
        { imgSrc: Jeans, title: "Jeans" },
        { imgSrc: Boxers, title: "Boxers" },
        { imgSrc: Joggers, title: "Joggers" },
        { imgSrc: Others, title: "Others" }
    ];

    // Handler to add or update selected product
    const handleSelectProduct = (selectedProduct) => {
        const { title, quantity, services, price, servicePrice } = selectedProduct;
        const updatedProducts = [...selectedProducts];
        const index = updatedProducts.findIndex((p) => p.title === title);
    
        if (index !== -1) {
            updatedProducts[index] = { ...selectedProduct };
        } else {
            updatedProducts.push({ ...selectedProduct });
        } 
    
        setSelectedProducts(updatedProducts);
    };

    // Handler to open the summary modal
    const handleProceed = () => {
        setShowSummary(true);
    };

    return (
        <div>
            <Navbar />
            <div className='align_h'>
                <Sidebar />
                <section>
                    <p className='orders_count'>Create</p>
                    <article className='create_table'>
                        <div className='table_head'>
                            <span className='product_types'>Product Types</span>
                            <span className='quantity'>Quantity</span>
                            <span className='wash_type'>Wash Type</span>
                            <span className='price'>Price</span>
                        </div>
                        {products.map((product, index) => (
                            <Product
                                key={index}
                                imgSrc={product.imgSrc}
                                Product_title={product.title}
                                onSelect={handleSelectProduct}
                            />
                        ))}
                        <div className='btns_container'>
                            <button className='cancel_btn' onClick={() => Navigate("/home")}>
                                Cancel
                            </button>
                            <button className='procced_btn' onClick={handleProceed} >
                                Proceed
                            </button>
                        </div>
                    </article>
                </section>
            </div>
            {showSummary && (
                <Summary
                    products={selectedProducts}
                    onClose={() => setShowSummary(false)}
                    setShowSuccessModal={setShowSuccessModal} // Pass the setter to Summary
                />
            )}
  
            {showSuccessModal && <SuccessfullOrder onClose={() => setShowSuccessModal(false)} />}
            <FooterTwo />
        </div>
    );
};

export default CreateOrder;
