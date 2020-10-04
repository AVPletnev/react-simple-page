import React from "react";
import './Footer.css'
import {Button} from "./Button";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join be Adventure newslatter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" className="footer-input" placeholder="Your Email"/>
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className='social-logo' to="/">
              TRVL <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">TRVL 2020</small>
          <div className="social-icons">
            <Link to='/' className="social-icon-link facebook" aria-label='Facebook'>
              <i className="fab fa-facebook-f" />
            </Link>
            <Link to='/' className="social-icon-link instagram" aria-label='Instagram'>
              <i className="fab fa-instagram" />
            </Link>
            <Link to='/' className="social-icon-link youtube" aria-label='Youtube'>
              <i className="fab fa-youtube" />
            </Link>
            <Link to='/' className="social-icon-link twitter" aria-label='Twitter'>
              <i className="fab fa-twitter" />
            </Link>
            <Link to='/' className="social-icon-link linkedin" aria-label='Linkedin'>
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer