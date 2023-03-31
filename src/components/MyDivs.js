import React from 'react';
import { School, SportsEsports, Forum } from '@mui/icons-material';

const MyDivs = () => {
  const data = [
    {
      title: 'Educate',
      icon: <School style={{ fontSize: 250 }} />,
      quote: 'Education is the most powerful weapon which you can use to change the world. - Nelson Mandela'
    },
    {
      title: 'Competition',
      icon: <SportsEsports style={{ fontSize: 250 }} />,
      quote: 'The only competition that matters is the one that takes place within yourself. - Anonymous'
    },
    {
      title: 'Interact',
      icon: <Forum  style={{ fontSize: 250 }}/>,
      quote: 'The most important thing in communication is hearing what isn’t said. - Peter Drucker'
    }
  ];

  const divStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    margin: '5px',
    borderRadius: '10px',
    width: '80%',
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

  return (
    <>
      {data.map((item) => (
        <div key={item.title} style={divStyle}>
          {item.icon}
          <h2 style={titleStyle}>{item.title}</h2>
          <p style={quoteStyle}>{item.quote}</p>
        </div>
      ))}
    </>
  );
};

export default MyDivs;