import React from 'react';
import Navigation from './../component/Navigation';
import Banner from '../component/Banner';
import Support from '../component/Support';
import Category from '../component/Category';
import Footer from '../component/Footer';


function Home() {
    return(
        <div>
            <Navigation />
            <Banner />
            <Support />
            <Category />           
            <Footer />
        </div>
    )

   
}

export default Home;