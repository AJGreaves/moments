import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap';

import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css';

function NavBar() {
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <Navbar.Brand>
                    <img src={logo} alt="logo" height={45} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <Nav.Link>
                            <i className="fas fa-home" />
                            Home
                        </Nav.Link>
                        <Nav.Link>
                            <i className="fas fa-sign-in-alt" />
                            Sign in
                        </Nav.Link>
                        <Nav.Link>
                            <i className="fas fa-user-plus" />
                            Sign up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar



