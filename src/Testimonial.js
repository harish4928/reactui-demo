import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import {FaQuoteLeft,FaQuoteRight,FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div>

<section id="testimonials" class="testimonials section-bg">
<div class="container">

<div class="section-header">
    <h2>Testimonials</h2>
    <p>What Are They <span>Saying About Us</span></p>
</div>

<div>      
           <div className="row title" style={{marginBottom: "20px"}} >      
     
           </div>  
       </div>  
       <div class='container-fluid' >            
        <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          margin={8} > 

           <div className='testimonial-item'>
           <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                       <FaQuoteLeft />&nbsp;
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        &nbsp;&nbsp; <FaQuoteRight />
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="/images/testimonials-1.jpg" class="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
            </div>  




            <div className='testimonial-item'>
           <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                       <FaQuoteLeft />&nbsp;
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        &nbsp;&nbsp; <FaQuoteRight />
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="/images/testimonials-1.jpg" class="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
            </div> 


            <div className='testimonial-item'>
           <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                       <FaQuoteLeft />&nbsp;
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        &nbsp;&nbsp;<FaQuoteRight />
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="/images/testimonials-1.jpg" class="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
            </div> 


            <div className='testimonial-item'>
           <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                       <FaQuoteLeft />&nbsp;
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        &nbsp;&nbsp; <FaQuoteRight />
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="/images/testimonials-1.jpg" class="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
            </div> 

            <div className='testimonial-item'>
           <div class="row gy-4 justify-content-center">
                  <div class="col-lg-6">
                    <div class="testimonial-content">
                      <p>
                       <FaQuoteLeft /> &nbsp;
                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        &nbsp; &nbsp;<FaQuoteRight />
                      </p>
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 text-center">
                    <img src="/images/testimonials-1.jpg" class="img-fluid testimonial-img" alt="" />
                  </div>
                </div>
            </div> 



      </OwlCarousel>  
      </div>  
            
        </div> 
        </section>   
        </div>
    );
};

export default Testimonial;