import React from 'react';
import Logo from '../assets/images/logo.jpg'
function Footer() {
    return (
        <div>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div className="container-fluid p-0 mt-5">

  <footer className="bg-primary text-center text-lg-start text-white">
    {/* <!-- Grid container --> */}
    <div className="container p-4">
      {/* <!--Grid row--> */}
      <div className="row my-4">
        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">

          <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{width: '150px', height: '150px'}}>
            <img src={Logo} height="70" alt=""
                 loading="lazy" />
          </div>

          <p className="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>

          <ul className="list-unstyled d-flex flex-row justify-content-center">
            <li>
              <a className="text-white px-2" href="#!">
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a className="text-white px-2" href="#!">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className="text-white ps-2" href="#!">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Product</h5>

          <ul className="list-unstyled">
            <li lassName="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>When your pet is missing</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Recently found</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>How to adopt?</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Pets for adoption</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Material gifts</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Help with walks</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Volunteer activities</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Products</h5>

          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>General information</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>About the shelter</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Statistic data</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Job</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Tenders</a>
            </li>
            <li className="mb-2">
              <a href="#!" className="text-white"><i className="fas fa-paw "></i>Contact</a>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Contact</h5>

          <ul className="list-unstyled">
            <li>
              <p><i className="fas fa-map-marker-alt "></i>Warsaw, 57 Street, Maldiv</p>
            </li>
            <li>
              <p><i className="fas fa-phone"></i>+ 01 234 567 89</p>
            </li>
            <li>
              <p><i className="fas fa-envelope  mb-0"></i>contact@example.com</p>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2024 Copyright:
      <a className="text-white" href="https://mdbootstrap.com/">Abdur Rahman</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>

</div>
{/* <!-- End of .container --> */}
        </div>
    );
}

export default Footer;