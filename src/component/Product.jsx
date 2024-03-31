import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopBanner from '../component/TopBanner';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import baseAxios from '../Config';
function Product() {
    const {id} = useParams()
    const [product, setProduct]=useState([]);
   console.log(product)
    useEffect(()=>{
        fetch(`https://backend.halalfashion.net/api/category/product/${id}`)
        .then(response=>response.json())
        .then(data => setProduct(data?.data?.data))
        .catch(error=>console.log(error))
    },[id]);
    return (
        <div className='wrapper'>
            <TopBanner />
            <Container  className='mt-5'>
               <Row md={4}>
               {
                    product.map((item,index)=> <Col md={3} className='m-auto'>
                        <div className='category-itmem'>
                        <Link to={`/poduct/details/${item.id}`} >
                            <img className='w-100' src={`https://backend.halalfashion.net/uploads/Category/${item?.image[0]}`} alt="image" />
                        </Link>
                        <div className="categoryName">{item.name}</div>
                        </div>
                    </Col>)
                }
               </Row>
            </Container>
        </div>
    );
}

export default Product;