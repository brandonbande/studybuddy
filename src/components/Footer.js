
import { Facebook, LinkedIn, Mail, Twitter} from '@mui/icons-material';
import React from 'react'
import Accordion from './Accordion';
import ContactForm from './ContactForm';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
       <div className='footerMain'>
        <Accordion />
        <div className='socialMedia'>
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
            <h2>Leave a message</h2>
            <ContactForm />
        </div>
       </div>
        <p className='footerSig'>RevisionPal &copy; 2023</p>
    </div>
  )
}

export default Footer