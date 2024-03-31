import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
function Navigation() {
    return (
       <div>
            <Navbar collapseOnSelect expand="lg" className="bg-warning" fixed='top'>
                <Container>
                    <Nav.Link  as={Link} to='/'><Navbar.Brand >HALAL-FASHION</Navbar.Brand></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>                        
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/register">
                        Register
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </div> 
    );
}

export default Navigation;