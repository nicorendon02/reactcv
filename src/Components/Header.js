import React from "react";
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';

function header(){
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Curriculum Vitae</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default header;