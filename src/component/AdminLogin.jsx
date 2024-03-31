import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import baseAxios from '../Config';
import Swal from 'sweetalert2';
function AdminLogin() {
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    const handleSubmit= async()=>{
        await baseAxios.post("/login", {email: email, password: password})
        .then((response)=>{
            console.log(response);
            if(response.status === 200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged In Successfully",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    localStorage.setItem("token", JSON.stringify(response.data.access_token));
                    localStorage.setItem("userId", JSON.stringify(response.data.user_id));
                    navigate("/admin");
                });
            }
        }).catch((error)=>{
            Swal.fire({
                position: "center",
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    return (
        <div className='wrapper'>
        <div className='container ' style={{margin:'10% auto'}}>
            <Row  >
                <Col md={8} className='m-auto'>
                    <fieldset className='login-fieldset'>
                        <legend className='login-legend '>Admin Login</legend>
                            <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2" >
                                Email
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                Password
                                </Form.Label>
                                <Col sm="10">
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                                </Col>
                            </Form.Group>
                            <Button onClick={handleSubmit} variant="success">Submit</Button>
                            <div className='text-center'>
                                <Link to="/forget"> Forget password </Link> <Link to='/register' style={{paddingLeft:'10%'}}> </Link>
                            </div>
                           
                        </Form>
                    </fieldset>
                </Col>
            </Row>              
        </div>                      
    </div>
    );
}

export default AdminLogin;