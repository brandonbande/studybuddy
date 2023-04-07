import React from 'react';
import { School, SportsEsports, Forum } from '@mui/icons-material';

const MyDivs = () => {
  const data = [
    {
      title: 'Educate',
      icon: <School style={{ fontSize: 150 }} />,
      quote: 'Education is the most powerful weapon which you can use to change the world. - Nelson Mandela',
      detail : 'Our curated content covers over 20+ subjects at all levels including O\'Level and A-Level to equip every student with the knowledge they need to ace their exams.On a side note , our learning content is updated weekly'
    },
    {
      title: 'Competition',
      icon: <SportsEsports style={{ fontSize: 150 }} />,
      quote: 'The only competition that matters is the one that takes place within yourself. - Anonymous',
      detail : 'Our curated content covers over 20+ subjects at all levels including O\'Level and A-Level to equip every student with the knowledge they need to ace their exams.On a side note , our learning content is updated weekly'
    },
    {
      title: 'Interact',
      icon: <Forum  style={{ fontSize: 150 }}/>,
      quote: 'The most important thing in communication is hearing what isn’t said. - Peter Drucker',
      detail : 'Our curated content covers over 20+ subjects at all levels including O\'Level and A-Level to equip every student with the knowledge they need to ace their exams.On a side note , our learning content is updated weekly'
    }
  ];

  const divStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    margin: '5px',
    borderRadius: '10px',
    width: '80%',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: '44px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const quoteStyle = {
    fontStyle: 'italic'
  };

  const detailStyle = {
    marginTop : '5px',
  }

  return (
    <>
      {data.map((item) => (
        <div key={item.title} style={divStyle}>
          {item.icon}
          <h2 style={titleStyle}>{item.title}</h2>
          <p style={quoteStyle}>{item.quote}</p>
          <p style={detailStyle}>{item.detail}</p>
        </div>
      ))}
    </>
  );
};

export default MyDivs;