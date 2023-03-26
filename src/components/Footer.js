//import { Facebook, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


function Footer() {
  return (
    <div className='footer'>
       <div className='footerMain'>
       <div className='socialMedia'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              This is the first item's accordion body.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              This is the second item's accordion body.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </div>
        <div className='socialMedia'>
            Links
            <p>Icon</p>
            <p>icon2</p>
        </div>
        <div className='socialMedia'>
            Details
            <p>Icon</p>
            <p>icon2</p>
        </div>
       </div>
        <p className='footerSig'>RevisionPal &copy; 2023</p>
    </div>
  )
}

export default Footer