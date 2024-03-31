import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHandHoldingDollar } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import '../assets/css/index.css';
function Support() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='supportItem'>
                            <p className='supportIcon'><FaHandHoldingDollar /></p>
                            <p> CASH ON DELYVARY </p>
                            <p> Secure Payment 100% </p>
                        </div>
                    </Col>
                    <Col md={4}>
                    <div className='supportItem'>
                            <p className='supportIcon'><FaHeart /></p>
                            <p>24/7 CUSTOMER SUPPORT </p>
                            <p> Service Support 24/7 </p>
                        </div>  
                    </Col>
                    <Col md={4}>
                    <div className='supportItem'>
                            <p className='supportIcon'><GiReturnArrow /></p>
                            <p> MONEY BACK CUARANTEE </p>
                            <p> Money Back - 31 Days</p>
                        </div>
                    </Col>                        
                </Row>
            </Container>
        </div>
    );
}

export default Support;