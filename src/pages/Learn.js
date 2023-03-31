import React, { useState } from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const list = [
    {
      questionText: "What is the definition of entrepreneurship?",
      answerOptions: [
        { optionText: "The process of starting and running a business venture", isCorrect: true },
        { optionText: "The process of working for someone else's business", isCorrect: false },
        { optionText: "The process of investing in stocks and bonds", isCorrect: false },
        { optionText: "The process of managing a non-profit organization", isCorrect: false },
      ],
      explanation: "Entrepreneurship involves starting and running a business.",
      topic: "Entrepreneurship"
    },
    {
      questionText: "What is the most effective way to reduce plastic waste?",
      answerOptions: [
        { optionText: "Recycling all plastic products", isCorrect: false },
        { optionText: "Using biodegradable alternatives to plastic", isCorrect: true },
        { optionText: "Burning plastic waste in incinerators", isCorrect: false },
        { optionText: "Dumping plastic waste in landfills", isCorrect: false },
      ],
      explanation: "Using biodegradable alternatives to plastic can help reduce plastic waste.",
      topic: "Environment"
    },
    {
      questionText: "What is the main goal of social entrepreneurship?",
      answerOptions: [
        { optionText: "Maximizing profits for shareholders", isCorrect: false },
        { optionText: "Creating social and environmental impact while also generating revenue", isCorrect: true },
        { optionText: "Providing goods and services to low-income communities at a discount", isCorrect: false },
        { optionText: "Advocating for government policies that support social causes", isCorrect: false },
      ],
      explanation: "Social entrepreneurship involves using business principles to create positive social and environmental change.",
      topic: "Entrepreneurship, Social"
    },
    {
      questionText: "What is one way to promote gender equality in the workplace?",
      answerOptions: [
        { optionText: "Hiring only men for leadership positions", isCorrect: false },
        { optionText: "Offering flexible work arrangements to all employees", isCorrect: true },
        { optionText: "Paying women less than men for the same job", isCorrect: false },
        { optionText: "Excluding women from networking and professional development opportunities", isCorrect: false },
      ],
      explanation: "Offering flexible work arrangements can help promote gender equality by allowing both men and women to balance work and family responsibilities.",
      topic: "Social"
    },
  ];

  const createQuestions = () =>{
    const questions = [];
    while (questions.length < 4) {
      const randomIndex = Math.floor(Math.random() * list.length);
      if (!questions.includes(list[randomIndex])) {
        questions.push(list[randomIndex]);
      }
  }
  return questions;
  }
  
  var questions = createQuestions();

const Learn = () => {
  const [showExp, setshowExp] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
    setshowExp(true);
    if (questions[currentQuestionIndex].answerOptions[answerIndex].isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestionClick = () => {
    setSelectedAnswerIndex(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Your final score is ${score}/${questions.length}`);
      questions = createQuestions();
    }
    setshowExp(false)
  };

  return (
    <div className="learn">
        <div className='questionCount'>
            {Array.from({ length: questions.length }, (_, index) => (
              <FiberManualRecordIcon
                key={index}
                sx={{
                  color: index === currentQuestionIndex ? 'darkgreen' : 'lightgreen',
                  fontSize: index === currentQuestionIndex ? '3rem' : '2rem',
                }}
              />
            ))}
          </div>
        <div className="learnRoot">
             <h2 className="questionText">{questions[currentQuestionIndex].questionText}</h2>
             <div className="answerSection">
                {questions[currentQuestionIndex].answerOptions.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        style={{
                            backgroundColor:
                            selectedAnswerIndex === index
                                ? option.isCorrect
                                ? "green"
                                : "red"
                                : null,
                        }}
                        >
                        {option.optionText}
                    </button>
                        
                    ))}
                </div>
    </div>
    {showExp ? <p className="explanation">{questions[currentQuestionIndex].explanation}</p> : null}
      <button className="nextQuestionButton"
      onClick={handleNextQuestionClick}>
        {currentQuestionIndex < questions.length - 1
          ? "Next Question"
          : "Finish"}
      </button>
    </div>
  );
};

export default Learn;

