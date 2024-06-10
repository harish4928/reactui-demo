import React from 'react';
import {FaMapMarkerAlt,FaPhoneAlt,FaRegClock,FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer id="footer" className="footer">

<div className="container">
  <div className="row gy-3">
    <div className="col-lg-3 col-md-6 d-flex">
      {/* <i className="bi bi-geo-alt icon"></i> */}
      <FaMapMarkerAlt />
      <div>
        <h4>Address</h4>
        <p>
          A108 Adam Street <br/>
          New York, NY 535022 - US<br/>
        </p>
      </div>

    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex">
      <FaPhoneAlt/>
      <div>
        <h4>Reservations</h4>
        <p>
          <strong>Phone:</strong> +1 5589 55488 55<br/>
          <strong>Email:</strong> info@example.com<br/>
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 footer-links d-flex">
      <FaRegClock />
      <div>
        <h4>Opening Hours</h4>
        <p>
          <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
          Sunday: Closed
        </p>
      </div>
    </div>

    <div className="col-lg-3 col-md-6 footer-links">
      <h4>Follow Us</h4>
      <div className="social-links d-flex">
        <a href="#" className="twitter"><FaTwitter /></a>
        <a href="#" className="facebook"><FaFacebookF /></a>
        <a href="#" className="instagram"><FaInstagram /></a>
        <a href="#" className="linkedin"><FaLinkedinIn/></a>
      </div>
    </div>

  </div>
</div>

<div className="container">
  <div className="copyright">
    © Copyright <strong><span>Foodstore</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="#">harry creative developer</a>
  </div>
</div>

</footer>
        </div>
    );
};

export default Footer;


