import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/contact-us">How it works</Link>
            <Link to="/">Testimonials</Link>
            {/* <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link> */}
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contact-us">Contact</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Diversified Aerospace Finishing
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">
            DiversifiedAerospaceFinishing © 2022
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
