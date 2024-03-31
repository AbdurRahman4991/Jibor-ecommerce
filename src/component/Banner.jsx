import React from 'react';
import Slider from "react-slick";
import '../assets/css/index.css';
import Banner3 from '../assets/images/banner3.webp'
import Product1 from '../assets/images/product1.png'
import carImg1 from '../assets/images/carImg.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row, Col, Button,  } from 'react-bootstrap';
function Banner() {

    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, display: "block", background: '#808080' }}
    //         onClick={onClick}
    //       />
    //     );
    //   }
      
      // function SamplePrevArrow(props) {
      //   const { className, style, onClick } = props;
      //   return (
      //     <div
      //       className={className}
      //       style={{ ...style, display: "block", background: '#808080', }}
      //       onClick={onClick}
      //     />
      //   );
      // }
    var settings = {
        dots: false,
        arrows: true,
        autoplay:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              Arrows:true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='wrapper'>
            <div className="container">
                <Row>
                    <Col md={8}>
                        <Slider {...settings} className='slide'>
                            <div className='slideitem'>
                                <img src={Banner3} alt="image" />
                                <div className='overlay'>
                                    <div className='container'>
                                      <Row className=''>
                                        <Col md={6} >
                                          <div className='sub-content'>
                                            <div className='title'>Limited Edition</div>
                                              <div className='subTitle'> EXPERIENCE FEEL</div>
                                              <div className='subTitle'> GREATEST WITH VITURAL</div>
                                              <div className='subTitle'> REALITY JUST <span>$599</span></div>
                                              <Button className='bannerBtn' variant="warning">Shoop Now</Button>
                                          </div>                                            
                                        </Col>
                                        <Col md={6}>
                                        <span className='bannerItem'><img src={Product1} alt="img" /></span>
                                        </Col>
                                      </Row>
                                    </div>                                    
                                </div>
                            </div>
                            <div className='slideitem'>
                                <img src={Banner3} alt="image" />
                                <div className='overlay'>
                                    <div className='container'>
                                      <Row className=''>
                                        <Col md={6} >
                                          <div className='sub-content'>
                                            <div className='title'>Limited Edition</div>
                                              <div className='subTitle'> EXPERIENCE FEEL</div>
                                              <div className='subTitle'> GREATEST WITH VITURAL</div>
                                              <div className='subTitle'> REALITY JUST <span>$599</span></div>
                                              <Button className='bannerBtn' variant="warning">Shoop Now</Button>
                                          </div>                                            
                                        </Col>
                                        <Col md={6}>
                                        <span className='bannerItem'><img src={Product1} alt="" /></span>
                                        </Col>
                                      </Row>
                                    </div>                                    
                                </div>
                            </div>
                            <div className='slideitem'>
                                <img src={Banner3} alt="image" />
                                <div className='overlay'>
                                    <div className='container'>
                                      <Row className=''>
                                        <Col md={6} >
                                          <div className='sub-content'>
                                            <div className='title'>Limited Edition</div>
                                              <div className='subTitle'> EXPERIENCE FEEL</div>
                                              <div className='subTitle'> GREATEST WITH VITURAL</div>
                                              <div className='subTitle'> REALITY JUST <span>$599</span></div>
                                              <Button className='bannerBtn' variant="warning">Shoop Now</Button>
                                          </div>                                            
                                        </Col>
                                        <Col md={6}>
                                        <span className='bannerItem'><img src={Product1} alt="" /></span>
                                        </Col>
                                      </Row>
                                    </div>                                    
                                </div>
                            </div>                    
                        </Slider>
                    </Col>
                    <Col md={4}>
                        <div className='cardItem'>
                          <div className='container'>
                            <Row>
                              <Col md={4}>
                                  <div className='card-content'>
                                    <div className='cardTitle'>Uni Leather Bags</div>
                                    <p>Lorem ipsum dolar site</p>
                                  </div>
                              </Col>
                              <Col md={2}>

                                <div className='offer'>
                                  20% <br/> OFF                                 
                                </div>
                                
                                </Col>
                                <Col md={6}>
                                  <div className='card-right-content'>
                                    <img src={Product1} alt="image" />
                                  </div>
                                </Col>
                            </Row>
                          </div>
                        </div>
                          <div className='cardItem1'>
                            <Row  >
                              <Col md={4}>
                                  <div className='card-content'>
                                    <div className='cardTitle'>Uni Leather Bags</div>
                                    <p>Lorem ipsum dolar site</p>
                                  </div>
                              </Col>
                              <Col md={2}>
                                <div className='offer'>
                                  20% <br/> OFF                                 
                                </div>                                
                                </Col>
                                <Col md={6}>
                                  <div className='card-right-content'>
                                    <img src={Product1} alt="image" />
                                  </div>
                                </Col>
                            </Row>                            
                          </div>                        
                    </Col>                    
                </Row>               
            </div>
        </div>
            
        
    );
}

export default Banner;