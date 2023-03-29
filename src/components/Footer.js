
import { Facebook, LinkedIn, Mail, Twitter} from '@mui/icons-material';
import React from 'react'
import ContactForm from './ContactForm';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Footer() {
  return (
    <div className='footer'>
       <div className='footerMain'>
        <div className='socialMedia'>
  <h2>Contact Us</h2>
      <a href="http://www.facebook.com/brandonbande">
        <Facebook />
      </a>
      <a href="https://www.linkedin.com/in/brandoebande">
        <LinkedIn />
      </a>
      <a href="https://www.twitter.com/BandeBrandon">
        <Twitter />
      </a>
      <a href="mailto:brandonbande01@gmail.com">
        <Mail />
      </a>
    </div>
        <div className='contactForm'>
            Details
            <ContactForm />
        </div>
       </div>
        <p className='footerSig'>RevisionPal &copy; 2023</p>
    </div>
  )
}

export default Footer