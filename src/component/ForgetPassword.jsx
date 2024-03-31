import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function ForgetPassword() {
    return (
        <div>
           <div className='wrapper'>
            <div className='container ' style={{margin:'10% auto'}}>
                <Row  >
                    <Col md={8} className='m-auto'>
                        <fieldset className='login-fieldset'>
                            <legend className='login-legend '>Forget password</legend>
                                <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                    Email
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type='email' placeholder='Email' />
                                    </Col>
                                </Form.Group>                                
                                <Link to="/otp"> <Button variant="success">Submit</Button></Link>                               
                            </Form>
                        </fieldset>
                    </Col>
                </Row>              
            </div>                      
        </div> 
        </div>
    );
}

export default ForgetPassword;