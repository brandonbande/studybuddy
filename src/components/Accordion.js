import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      title: 'What kind of educational content does the organization offer?',
      content: 'The organization offers a wide range of educational content, including courses, tutorials, and interactive quizzes.'
    },
    {
      title: 'How does the organization make learning interactive and competitive?',
      content: 'The organization uses gamification techniques to make learning more engaging and fun. Learners can earn points and badges for completing tasks and compete with others on leaderboards.'
    },
    {
      title: 'What sets the organization apart from other educational content providers?',
      content: 'The organization is unique in its focus on delivering educational content in an interactive and competitive manner. Our courses are designed to be engaging and challenging, helping learners to stay motivated and achieve their goals.'
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3 onClick={() => handleClick(index)}>
            {question.title}
            <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`}></span>
          </h3>
          {activeIndex === index && <p>{question.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;