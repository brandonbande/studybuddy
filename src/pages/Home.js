import React from 'react'
import OneOfThree from '../components/OneOfThree'
import { Link } from 'react-router-dom'
import MyDivs from '../components/MyDivs'

function Home() {
  return (
    <div className='home'>
      <div className='imageContainer'> 
      <div className='about'>
        <h2>Prepare for your Exams </h2>
        <p className='prompt'>Over 
        100+ students have passed their exams by using our 40+ standardised  assessment tests ,1500+ questions and instant feedbacks</p>
        <Link to = '/quiz' className='linkButton'>Take an Assessment Test </Link>

      </div>
     
      </div>
      <div className='itemsBody'>
        
        <MyDivs />

      </div>

    </div>
  )
}

export default Home