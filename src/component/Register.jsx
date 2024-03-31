import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Register() {
    return (
        <div className='wrapper'>
            <div className='container ' style={{margin:'10% auto'}}>
                <Row  >
                    <Col md={8} className='m-auto'>
                        <fieldset className='login-fieldset'>
                            <legend className='login-legend '>Register</legend>
                                <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">
                                    Email
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type='email' placeholder='Email' />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                    Password
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                   
                                    </Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                    </Col>
                                </Form.Group>
                                <Button variant="success">Submit</Button>
                                <div className='text-center'>
                                    <Link > </Link> <Link to='/login' style={{paddingLeft:'10%'}}> Login </Link>
                                </div>
                               
                            </Form>
                        </fieldset>
                    </Col>
                </Row>              
            </div>                      
        </div>
    );
}

export default Register;