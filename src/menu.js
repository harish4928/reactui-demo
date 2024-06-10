import React from 'react';
import {stockData} from './dinner';
import classnames from 'classnames';
import {TabContent, TabPane, Row, Col,Nav, NavItem, NavLink} from 'reactstrap';




const menu = () => {
    


    return (
        <div>
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
        </div>
    );
};

export default menu;