import React from 'react';
import Admin from '../component/AdminLogin';
import Navigation from '../component/Navigation';
import Footer from '../component/Footer';
function AdminLoginPage() {
    return (
     <div className='wrapper'>
        <Navigation />
        <Admin />
        <Footer />
     </div>
    );
}

export default AdminLoginPage;