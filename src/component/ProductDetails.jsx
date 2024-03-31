import React, { useEffect } from 'react';
import {Row, Col, Button, Form, FloatingLabel, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import baseAxios from '../Config';
import Swal from 'sweetalert2';
function ProductDetails() {

    // Modal show close //

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Product details //
    const {id} = useParams();
    const [product, setProduct]= useState({});
    console.log(product);
    useEffect(()=>{
        fetch(`https://backend.halalfashion.net/api/product/details/${id}`)
        .then(response=>response.json())
        .then(data=>setProduct(data?.data))
        .catch(error=> console.log(error))
    },[id])

      // Product image //
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
          if (product.image && product.image.length > 0) {
              setCurrentImageIndex(0); // Set the default image index to 0
          }
      }, [product]);
  
      const currentImage = product.image && product.image[currentImageIndex];
            
      // ORDER //
      const [post, setPost]=useState({
        phone:'',
        color:'',
        size:'',
        address:''
      })
       const handelInput = ((event)=>{
        setPost({...post, [event.target.name]:event.target.value})
       })


    const handelSubmit=((event)=>{
        event.preventDefault();

        const formData = new FormData();

        formData.append("sellarId", product.sellar_id)
        formData.append("prductId",  product.id)
        formData.append("phone", post.phone )
        formData.append("address",  post.address)
        formData.append("size",  post.size)
        formData.append("color",  post.color)

        formData.forEach(item => console.log(item))

        baseAxios.post('/confirm/order', formData, {
            headers: {
                authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
            }
        })
      .then((response)=>{
        console.log(response)
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
            Swal.fire({
                position: "center",
                icon: "error",
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        })
    })

    return (
        <div className='wrapper'>
            <div className='container'>
                <Row>
                    <Col md={2}>
                        <Row>
                            {product?.image?.map((item, index)=>
                                <Col key={index} md={12}>
                                    <div className='productItem'>
                                        <img onMouseOver={()=>setCurrentImageIndex(index)} src={`https://backend.halalfashion.net/uploads/Category/${item}`} />
                                    </div>
                                </Col>
                            )}
                        </Row>
                    </Col>
                    <Col md={5}>
                        <div className='detailsItem'>
                            {
                                currentImage &&
                                <img src={`https://backend.halalfashion.net/uploads/Category/${currentImage}`}  alt="image" />
                            }
                        </div>
                    </Col>
                    <Col md={5}>
                        
                        <h3>{product?.name}</h3>
                        <h6 className='text-danger'>Price: {product?.price}</h6>
                        <h6 className='text-danger'>Discount price: {product?.discount_price}%</h6>
                        <h6>Brand name: {product?.brand}</h6>
                        <h6>Color: {" "}
                            {
                                product?.color?.map((item, index)=> item + " , ")
                            }
                        </h6>
                        <h6>Size: {" "}
                            {
                                product?.size?.map((item, index)=> item + " , ")
                            }
                        </h6>
                        <h6></h6>
                
                        <h6> Material: {product?.material}</h6>
                        <h6>Gender: {product.gender}</h6>
                        <h6>Description: {product.description}</h6>
                        <Form className='mt-5' onSubmit={handelSubmit} >
                            <Form.Group className="mb-3">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="phone" name='phone' onChange={handelInput} placeholder="type your phone" />
                            </Form.Group>

                            <label htmlFor="">Select Your Desire Color</label>
                            <Form.Select onChange={handelInput} aria-label="Default select example" name="color" >
                                {product?.color?.map((item,index)=> <option key={index} value={item}>{item}</option>)}                               
                            </Form.Select>

                            <label htmlFor="" className='mt-2'>Select Your Desire Size</label>
                            <Form.Select name='size' aria-label="Default select example" onChange={handelInput} className='mt-2' >
                                {product?.size?.map((item,index)=> <option key={index} value={item}>{item}</option>)}                            
                            </Form.Select>
                            <FloatingLabel  controlId="floatingTextarea2" className='mt-3' label="Type your delevery address">
                                <Form.Control name='address' onChange={handelInput}
                                as="textarea"
                                placeholder="Type your delevery address"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>                            
                            <button className='bannerBtn btn-danger'  variant="warning">Order Now</button>                           
                        </Form> 
                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Your Order </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want to confirm order</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                     <Button variant="primary" onClick={handleClose}>
                        Confirm
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            
        </div>
    );
}

export default ProductDetails;