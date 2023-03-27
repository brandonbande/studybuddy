import React from 'react'

    const topPerformers = [
      {
        username : 'i_am_brandoe263',
        centre : 'Centre 1',
        overallScore : 978346 ,
        average : 95
      },
      {
        username : 'i_am_bee',
        centre : 'Centre 2',
        overallScore : 97836 ,
        average : 99
      },
      {
        username : 'i_am_brandoe263',
        centre : 'Centre 1',
        overallScore : 978346 ,
        average : 95
      },
      {
        username : 'i_am_brandoe263',
        centre : 'Centre 1',
        overallScore : 978346 ,
        average : 95
      },
      {
        username : 'i_am_brandoe263',
        centre : 'Centre 1',
        overallScore : 978346 ,
        average : 95
      },

    ]
    const topStreak = [
      {
        username : 'i_am_brandoe263',
        centre : 'Centre 1',
        streak : 16
      },
      {
        username : 'i_am_eulie',
        centre : 'Centre 1',
        streak : 15
      },
      {
        username : 'i_am_brandoe263',
        centre : 'Centre 1',
        streak : 14
      },
    ]

    const topCentres = [

      {
        centrename : 'Centre 1',
        province : 'Harare',
        centreAverage : 88
      },
      {
        centrename : 'Centre 2',
        province : 'Gweru',
        centreAverage : 86
      },

    ]


function Leaderboard() {


  //const performers = list.topPerformers;






  return (
    <div className='leaderBoard'>
      <h1>Top Performers</h1>
      <div className='miniboard'>
        <div className='performerRow'>
          <div className='performerColumn'>
            Username
          </div>
          <div className='performerColumn'>
            Centre
          </div>
          <div className='performerColumn'>
            Overall Score
          </div>
          <div className='performerColumn'>
            Test Average
          </div>
        </div>
      {topPerformers.map((perfomer)=>(
        <div className='performerRow'>
          <div className='performerColumn'>
            {perfomer.username}
          </div>
          <div className='performerColumn'>
            {perfomer.centre}
          </div>
          <div className='performerColumn'>
            {perfomer.overallScore}
          </div>
          <div className='performerColumn'>
              {perfomer.average}
          </div>
        </div>
      ))}

      </div>
      <h1>Top Streak</h1>
      <div className='miniboard'>
        <div className='performerRow3'>
          <div className='performerColumn'>
            Username
          </div>
          <div className='performerColumn'>
            Centre
          </div>
          <div className='performerColumn'>
            Streak
          </div>
          
        </div>
      {topStreak.map((perfomer)=>(
        <div className='performerRow3'>
          <div className='performerColumn'>
            {perfomer.username}
          </div>
          <div className='performerColumn'>
            {perfomer.centre}
          </div>
          <div className='performerColumn'>
            {perfomer.streak}
          </div>
        </div>
      ))}
      </div>

      <h1>Top Schools</h1>
      <div className='miniboard'>
        <div className='performerRow3'>
          <div className='performerColumn'>
            Centre
          </div>
          <div className='performerColumn'>
            Province
          </div>
          <div className='performerColumn'>
            Average Score per Student
          </div>
        </div>
      {topCentres.map((centre)=>(
        <div className='performerRow3'>
          <div className='performerColumn'>
            {centre.centrename}
          </div>
          <div className='performerColumn'>
            {centre.province}
          </div>
          <div className='performerColumn'>
            {centre.centreAverage}
          </div>
        </div>
      ))}

      </div>
    </div>
  )
}

export default Leaderboard