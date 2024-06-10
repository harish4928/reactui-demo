import React from 'react';
import CountUp from 'react-countup';  
import VisibilitySensor from 'react-visibility-sensor';
import Slider from './Slider'
import About from './About';
import Book_table from './Book_table';
import Ourmenu from './Ourmenu';
import Testimonial from './Testimonial';






const Home = () => {
    return (
        <div>
         <div className='slider'>
          <Slider />
        </div>
        <About />

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

    <Ourmenu />


    {/*Testimonial*/}
    <Testimonial></Testimonial>
    {/*Testimonial*/}


        </div>
    );
};

export default Home;