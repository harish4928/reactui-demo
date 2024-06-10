import React from 'react';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
   } from 'reactstrap';
   import { useState }  from 'react'; 
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header>
   <div className='container'>
       <div style={{
            display: 'block', width: '100%',
        }}>
            
            <Navbar color="" light expand="md">
                <NavbarBrand href="/">Brand</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto " navbar>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink linkto="menu">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Events</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

                <a className="btn-book-a-table" linkto="">Book a Table</a>

            </Navbar>
        </div >
        </div>
        </header>
        </div>
    );
};

export default Header;