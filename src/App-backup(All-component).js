import react, { useState }  from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGem,FaClipboardList,FaInbox } from "react-icons/fa";
import classnames from 'classnames';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand,
    Card,CardBody,CardText, CardTitle
} from 'reactstrap';
import Slider from './Slider';
import CountUp from 'react-countup';  
import VisibilitySensor from 'react-visibility-sensor';
import Book_table from './Book_table';
import {stockData} from './dinner';




import {
    TabContent, TabPane, 
      Row, Col
} from 'reactstrap';
import Testimonial from './Testimonial';
import Footer from './Footer';
function App() {
    const [currentActiveTab, setCurrentActiveTab] = useState('1');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
}
  
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
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Menu</NavLink>
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

        <div className='slider'>
           <Slider />
        </div>

   {/* About section start here   */}
    <section  className="about">
      <div className="container">

        <div className="section-header">
          <h2>About Us</h2>
          <p>Learn More <span>About Us</span></p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-7 position-relative about-img" style={{backgroundImage: "url(/images/about.jpg)", backgroundRepeat: "no-repeat" }}>
            <div className="call-us position-absolute">
              <h4>Book a Table</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end" >
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </p>

              <div className="position-relative mt-4">
                <img src="/images/about-2.jpg" className="img-fluid" alt="" />
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
     {/*End About section start here   */}

     <section className="why-us section-bg">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4">
          
              
                <Card className='whybx' inverse>
                <CardBody>
                <CardTitle tag="h2">Why Choose Yummy?</CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                </CardText>
                <a href="#" class="more-btn">Learn More</a>
                </CardBody>
                </Card>

           
          </div>

          <div className="col-lg-8 d-flex align-items-center">
            <div className="row gy-4">

              <div className="col-xl-4" >
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <FaClipboardList></FaClipboardList>
                  <h4>Corporis voluptates officia eiusmod</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <FaGem></FaGem>
                  <h4>Ullamco laboris ladore pan</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                  <FaInbox></FaInbox>
                  <h4>Labore consequatur incidid dolore</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>

    


   {/*counter*/}
    
   <section id="stats-counter" className="stats-counter">
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">
                          
                <CountUp end={232} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}
                </CountUp>
                </span>


              <p>Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">
                <CountUp end={521} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}
                </CountUp>
              </span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">
                <CountUp end={1453} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}
                </CountUp>
                </span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <span className="purecounter">
                <CountUp end={32} redraw={true}>
                  {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                  )}
                </CountUp>
                </span>
              <p>Workers</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* Book a Table */}
    <Book_table/>
    {/* Book a Table */}

    <section id="menu" class="menu">
      <div class="container">

        <div class="section-header">
          <h2>Our Menu</h2>
          <p>Check Our <span>Yummy Menu</span></p>
        </div>

            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '1'
                        })}
                        onClick={() => { toggle('1'); }}
                    >
                        Starters
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '2'
                        })}
                        onClick={() => { toggle('2'); }}
                    >
                        Breakfast
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '3'
                        })}
                        onClick={() => { toggle('3'); }}
                    >
                        Lunch
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={classnames({
                            active:
                                currentActiveTab === '4'
                        })}
                        onClick={() => { toggle('4'); }}
                    >
                        Dinner
                    </NavLink>
                </NavItem>


                
            </Nav>
            <TabContent activeTab={currentActiveTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div class="tab-header text-center">
                            <p>Menu</p>
                            <h3>Starters</h3>
                            </div>

                            <div className="row gy-5">
                            
                            {stockData.map((items) =>
                            {
                              return(
                            <div className="col-lg-4 menu-item text-center" key={items.dish}>
                              <img src={items.src} className="menu-img img-fluid" alt="" />
                              <h4>{items.dish}</h4>
                              <p className="ingredients">
                              {items.recipie}
                              </p>
                              <p className="price">
                              {items.price}
                              </p>
                            </div>
                            )
                              })
                             }
                         </div>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                <Row>
                        <Col sm="12">
                            <div class="tab-header text-center">
                            <p>Menu</p>
                            <h3>Starters</h3>
                            </div>

                            <div className="row gy-5">
                            
                            {stockData.map((items) =>
                            {
                              return(
                            <div className="col-lg-4 menu-item text-center" key={items.dish}>
                              <img src={items.src} className="menu-img img-fluid" alt="" />
                              <h4>{items.dish}</h4>
                              <p className="ingredients">
                              {items.recipie}
                              </p>
                              <p className="price">
                              {items.price}
                              </p>
                            </div>
                            )
                              })
                             }
                         </div>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="3">
                <Row>
                        <Col sm="12">
                            <div class="tab-header text-center">
                            <p>Menu</p>
                            <h3>Starters</h3>
                            </div>

                            <div className="row gy-5">
                            
                            {stockData.map((items) =>
                            {
                              return(
                            <div className="col-lg-4 menu-item text-center" key={items.dish}>
                              <img src={items.src} className="menu-img img-fluid" alt="" />
                              <h4>{items.dish}</h4>
                              <p className="ingredients">
                              {items.recipie}
                              </p>
                              <p className="price">
                              {items.price}
                              </p>
                            </div>
                            )
                              })
                             }
                         </div>
                        </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="4">
                <Row>
                        <Col sm="12">
                            <div class="tab-header text-center">
                            <p>Menu</p>
                            <h3>Starters</h3>
                            </div>

                            <div className="row gy-5">
                            
                            {stockData.map((items) =>
                            {
                              return(
                            <div className="col-lg-4 menu-item text-center" key={items.dish}>
                              <img src={items.src} className="menu-img img-fluid" alt="" />
                              <h4>{items.dish}</h4>
                              <p className="ingredients">
                              {items.recipie}
                              </p>
                              <p className="price">
                              {items.price}
                              </p>
                            </div>
                            )
                              })
                             }
                         </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>


      </div>
    </section>

    {/*Testimonial*/}
    
    <Testimonial></Testimonial>

    {/*Testimonial*/}

    <Footer></Footer>
    
    </div>
  );
}

export default App;
