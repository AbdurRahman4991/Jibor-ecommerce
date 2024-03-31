import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Form, Col, Button} from 'react-bootstrap'
function Otp() {
    return (

        <div className='wrapper'>
            <div className='container ' style={{margin:'10% auto'}}>
                <Row  >
                    <Col md={8} className='m-auto'>
                        <fieldset className='login-fieldset'>
                            <legend className='login-legend '>OTP</legend>
                                <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                    OTP
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type='email' placeholder='OTP' />
                                    </Col>
                                </Form.Group>                                
                                <Link to='/change/password' >  <Button variant="success">Submit</Button>  </Link>                           
                            </Form>
                        </fieldset>
                    </Col>
                </Row>              
            </div>                      
        </div> 

    );
}

export default Otp;