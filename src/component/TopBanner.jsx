import React from 'react';
import {Row, Col} from 'react-bootstrap';
import BannerImg from '../assets/images/banner.jpg'
function TopBanner() {
    return (
       <div className='wrapper'>
            <div className='container-fluid  p-0 m-0'>
                <Row className='p-0 m-0'>
                    <Col md={12} className='p-0 m-0'>
                        <div className='topBanner'>
                            <img src={BannerImg} />
                            <div  className='bannerTitle'>PRODUCT</div>
                        </div>                        
                    </Col>
                </Row>
            </div>
       </div> 
    );
}

export default TopBanner;