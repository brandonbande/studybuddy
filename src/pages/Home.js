import React from 'react'
import OneOfThree from '../components/OneOfThree'
import { Link } from 'react-router-dom'
import { Reorder } from '@mui/icons-material'
import Countdown from '../components/Countdown'
//import {ReadMoreTwoTone} from '@mui/icons-material'

function Home() {
  return (
    <div className='home'>
      <div className='imageContainer'> 
      <div className='about'>
        <h2>Prepare for your Exams </h2>
        <p className='prompt'>Over 
        100+ students have passed their exams by using our 40+ standardised  assessment tests ,1500+ questions and instant feedbacks</p>
        <Link to = '/quiz' className='linkButton'>Take an Assessment Test </Link>
        <Countdown />

      </div>
     
      </div>
      <div className='itemsBody'>
        
        <OneOfThree />
        <OneOfThree />
        <OneOfThree />

      </div>

    </div>
  )
}

export default Home