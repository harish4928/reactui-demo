import react, { useState }  from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    
} from 'reactstrap';




import { Route, Routes, Link } from "react-router-dom";




import About from './About';
import Home from './Home';
import Book_table from './Book_table';
import Testimonial from './Testimonial';
import Footer from './Footer';
import Ourmenu from './Ourmenu';
import { useLocation } from "react-router-dom";

function App() {

  

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

   const { pathname } = location;
  const splitLocation = pathname.split("/");

  
  return (
    <div className="App">
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

                
                        <NavItem className={splitLocation[1] === "" ? "active" : ""}>  
                        <Link className='nav-link' to="/">Home</Link>
                        </NavItem>
                        <NavItem className={splitLocation[1] === "about" ? "active" : ""}>
                            <Link className='nav-link' to="/about">About us</Link>
                        </NavItem>
                        <NavItem className={splitLocation[1] === "menu" ? "active" : ""}>
                            <Link className='nav-link' to="/menu">Our Menu</Link>
                        </NavItem>
                        <NavItem className={splitLocation[1] === "testimonial" ? "active" : ""}>
                            <Link className='nav-link' to="/testimonial">Testimonial</Link>
                        </NavItem>
                       
                        <NavItem>
                            <NavLink to="book-table">Gallery</NavLink>
                        </NavItem>
                        <NavItem className={splitLocation[1] === "book-table" ? "active" : ""}>
                            <Link className='nav-link' to="/book-table">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>

                
                <Link className='btn-book-a-table' to="/book-table">Book a Table</Link>

            </Navbar>
        </div >
        </div>
        </header>  


        <Routes >
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/book-table" element={<Book_table />} />
         <Route path="/testimonial" element={<Testimonial />} />
         <Route path="/menu" element={<Ourmenu />} />
       </Routes>

  <Footer></Footer>
    
    </div>
  );
}

export default App;
