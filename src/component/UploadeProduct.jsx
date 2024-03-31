import { Col, Row, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import baseAxios from '../Config';
import Swal from 'sweetalert2';

function UploadProduct() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const [brand, setBrand] = useState("")
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const [meterial, setMeterial] = useState("")
    const [gender, setGender] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("");

    const handleChangeImage=(e)=>{
        const file= e.target.files[0];
        setImage(file)
    }
    const handelSubmit=(event, values)=>{
        event.preventDefault();

        const formData = new FormData();

        formData.append("productName", name)
        formData.append("price",  parseInt(price))
        formData.append("discountPrice", discount )
        formData.append("productBrand",  brand)
        formData.append("productSize",  size)
        formData.append("productColor",  color)
        formData.append("material",  meterial)
        formData.append("gender",  gender)
        formData.append("description",  description)
        formData.append("image",  image);

        formData.forEach(item => console.log(item))

        baseAxios.post('/create/product', {formData, catId : 1}, {
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            }
        })
        .then((response)=>{
            console.log(response);
            if(response.status == 200){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Order Confirm",
                    showConfirmButton: false,
                    timer: 1500
                }) 
            }
        })
        .catch((error)=>{
            console.log(error);
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
                            <legend className='login-legend '>Product updload</legend>
                                <Form onSubmit={handelSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2"> Product Name</Form.Label>
                                    <Col sm="10">
                                        <Form.Control name='name' onChange={(e)=> setName(e.target.value)} type='text' placeholder='Product type' />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Product Price</Form.Label>
                                    <Col sm="10">
                                        <Form.Control name='price' onChange={(e)=> setPrice(e.target.value)} type="text" placeholder="Product Price" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Discount Price</Form.Label>
                                    <Col sm="10">
                                    <Form.Control onChange={(e)=> setDiscount(e.target.value)} type="text" placeholder="Discount Price" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Brand Name</Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" onChange={(e)=> setBrand(e.target.value)} placeholder="Brand Name" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Color</Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" onChange={(e)=> setColor(e.target.value)} placeholder="Enter Color" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Size</Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" onChange={(e)=> setSize(e.target.value)} placeholder="Enter Size" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Meterial</Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" onChange={(e)=> setMeterial(e.target.value)} placeholder="Enter Meterial" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Gender</Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" onChange={(e)=> setGender(e.target.value)} placeholder="Enter Gender" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Description</Form.Label>
                                    <Col sm="10">
                                    <Form.Control type="text" onChange={(e)=> setDescription(e.target.value)} placeholder="Enter Product Description" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">Product Image</Form.Label>
                                    <Col sm="10">
                                        <Form.Control onChange={handleChangeImage} type="file" placeholder="Confirm Password" />
                                    </Col>
                                </Form.Group>



                                <Button type='submit' variant="success">Submit</Button>                            
                               
                            </Form>
                        </fieldset>
                    </Col>
                </Row>              
            </div>                      
        </div>
    );
}

export default UploadProduct;