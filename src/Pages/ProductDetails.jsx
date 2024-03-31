import React from 'react';
import Details from '../component/ProductDetails';
import Navigation from '../component/Navigation';
import TopBanner from '../component/TopBanner';
import Footer from '../component/Footer';

function ProductDetails() {
    return (
        <div>   
            <Navigation />  
                
            <Details />
            <Footer />
        </div>
    );
}

export default ProductDetails;