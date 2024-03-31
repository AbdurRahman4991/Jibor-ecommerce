import React from 'react';
import ProductItem from './../component/Product';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';

function Product() {
    return (
        <div>
            <Navigation />
            <ProductItem />
            <Footer />
        </div>
    );
}

export default Product;