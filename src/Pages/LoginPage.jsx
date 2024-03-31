import React from 'react';
import Login from '../component/LoginUser';
import Navigation from './../component/Navigation';
import Footer from './../component/Footer'

function LoginPage() {
    
    return (
        <div>
            <Navigation />
           <Login />
           <Footer />
        </div>
    );
}

export default LoginPage;