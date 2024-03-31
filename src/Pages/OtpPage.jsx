import React from 'react';
import Otp from '../component/Otp'
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';
function OtpPage() {
    return (
        <div className='wrapper'>
            <Navigation />          
            <Otp />
            <Footer />
        </div>
    );
}

export default OtpPage;