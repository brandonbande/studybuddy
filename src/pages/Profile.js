import React,{useState} from 'react'
import BarChart from '../components/BarChart'
import LineGraph from '../components/LineGraph'
import { UserData } from '../pages/Data'



function Profile() {

  
const [userData, setuserData] = useState({
  labels: UserData.map((data)=> data.month),
  datasets: [
      {
          label : 'Monthly Scores',
          data : UserData.map((data)=>data.monthScore),
          backgroundColor : ['blue'],
           
      }
  ]
})

const [lineData, setLineData] = useState({
  labels: UserData.map((data)=> data.month),
  datasets: [
      {
          label : 'My History',
          data : UserData.map((data)=>data.cumulativeScore),
          backgroundColor : ['black'],       
      }
  ]
})


  return (
    <div className='profile'>
      <div className='progress'>
        <div className='graphs'>
        <BarChart chartData={userData} />
        <LineGraph lineData = {lineData} />
        </div>
      </div>
      <div className='userDetail'>
        <img className='profilePic' src={localStorage.getItem("profilePic")} />
        <div className='detailRow'>
          <div className='field'>
            Name
          </div>
          <div className='detail'>
            Brandon T. Bande
          </div>
        </div>
        <div className='detailRow'>
          <div className='field'>
            Level
          </div>
          <div className='detail'>
            High School
          </div>
        </div>
        <div className='detailRow'>
          <div className='field'>
            Ranking
          </div>
          <div className='detail'>
            78 (  <strong className='highlight'>+5</strong> )
          </div>
        </div>
        <div className='detailRow'>
          <div className='field'>
            Points
          </div>
          <div className='detail'>
            1 894 891 ( <strong className='highlight'> +984</strong>) pts
          </div>
        </div>
        <div className='detailRow'>
          <div className='field'>
            Average Score
          </div>
          <div className='detail'>
            82 ( <strong className='lowlight'> -6</strong>) %
          </div>
        </div>
        <div className='detailRow'>
          <div className='field'>
            Streak
          </div>
          <div className='detail'>
            ( <strong className='highlight'> 14</strong>) days
          </div>
        </div>
        <div className='detailRow'>
          <div className='field'>
            Prices Due 
          </div>
          <div className='detail'>
          ( <strong className='highlight'> Streak Master</strong>)
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile