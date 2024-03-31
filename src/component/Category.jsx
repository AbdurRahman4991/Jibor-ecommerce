
import Slider from "react-slick";
import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Category() {
    let sliderRef = useRef(null);
    const play = () => {
      sliderRef.slickPlay();
    };
    const pause = () => {
      sliderRef.slickPause();
    };
  
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };

    // Api intigation //

    const [category, setCategory]= useState([]);
    console.log(category);
    useEffect(() => {
      // Fetch categories when component mounts
      fetch('https://backend.halalfashion.net/api/categories')
        .then(response => response.json())
        .then(data => setCategory(data?.data))
        .catch(error => console.log(error))
    }, []);

    return(
        <div>
            <div className="container">
      <div className="catTitle">CATEGORY </div>
      <Slider ref={slider => (sliderRef = slider)} {...settings}>

        {category?.map((item, index)=>
          <div key={index}>
            <div  className="category-itmem">
              <Link to={`/product/${item.id}`}> 
                <img src={`https://backend.halalfashion.net/uploads/Category/${item?.image}`} alt="image" />
              </Link>
              <div className="categoryName" >{item?.title}</div>
            </div>
        </div>
        )}
        
        {/* <div>
            <div  className="category-itmem">
            <Link to='/product'> <img src={Panjabi} alt="image" /></Link>
            <div className="categoryName">Panjabi</div>
          </div>
        </div>
        <div>
            <div  className="category-itmem">
            <Link to='/product'> <img src={Pant} alt="image" /></Link>
            <div className="categoryName">Pant</div>
        </div>
        </div>
        <div>
            <div  className="category-itmem">
            <Link to='/product'><img src={Shoes} alt="image" /></Link>
            <div className="categoryName">Shoes</div>
          </div>
        </div> */}

      </Slider>
      <div style={{ textAlign: "center", marginTop: "50px"}}>
        <Button className="btn-primary bannerBtn" onClick={play}>
          Play
        </Button>
        <Button className="btn-warning bannerBtn" onClick={pause}>
          Pause
        </Button>
      </div>
    </div>
        </div>
    )
}

export default Category;
