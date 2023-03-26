import React ,{useState ,useEffect} from 'react'


const questions =[
  {
    question : 'What is 1+1 in JS',
    answerOptions : [
      {answerText: '11' , isCorrect:true},
      {answerText: '10' , isCorrect:false},
      {answerText: '17' , isCorrect:false},
      {answerText: '2' , isCorrect:false},
    ]
  },
  {
    question : 'What is 1+11 in JS',
    answerOptions : [
      {answerText: '111' , isCorrect:true},
      {answerText: '104' , isCorrect:false},
      {answerText: '1447' , isCorrect:false},
      {answerText: '2w34' , isCorrect:false},
    ]
  },
  {
    question : 'What is 1+10 in JS',
    answerOptions : [
      {answerText: '111' , isCorrect:true},
      {answerText: '107' , isCorrect:false},
      {answerText: '17' , isCorrect:false},
      {answerText: '11' , isCorrect:false},
    ]
  }

]

function Quiz() {

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);


  // what happens when someone clicks on an option
  const handleAnswerOptionClick = (isCorrect) =>{

    //add to score for correct answer
    if(isCorrect){
      setscore(score+1)
    }

    //go to next question
    const nextQuestion = currentQuestion + 1 ;
    if (nextQuestion < questions.length){
      setcurrentQuestion(nextQuestion)
    }else{
      setshowScore(true)
    }
  }


  //reset Quiz by indexing first question and clearing scores + removing the score
  const resetQuiz = () =>{
    setscore(0)
    setcurrentQuestion(0)
    setshowScore(false)
  }


  //Finish Quiz Page showing score and retry button
  const finishQuiz = () =>{
    return (
      <div className='scoreSection'>
          <div className='score'>Score {score} / {questions.length}</div>
          <button onClick={() => resetQuiz()}>Retry</button>
      </div>
    );
  }

  //show the quiz in the page
const showQuiz = () =>{
  return(
    <div className='questionSection'>
          <div className='questionCount'>
            Question : {currentQuestion + 1} / {questions.length}
          </div>
          <div className='questionRoot'>
            <div className='questionText'>
              {questions[currentQuestion].question}
            </div>
            <div className='answerSection'>
              {questions[currentQuestion].answerOptions.map((answerOption)=>(
                <button onClick={()=>handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </div>

        </div>
  );
}

const now = new Date();
  const [targetTime, setTargetTime] = useState(new Date(now.getTime() + (0.2 * 60 * 1000)));
  const [timeRemaining, setTimeRemaining] = useState(targetTime - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(targetTime - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);




  return (
    <div className='quiz' >

      {timeRemaining > 0 ? (
        <div>
          Time remaining: 
          {Math.floor((timeRemaining / (1000 * 60)) % 60)} minutes{' '}
          {Math.floor(timeRemaining / 1000) % 60} seconds
        </div>
      ) : (
        finishQuiz()
      )}
      
    {showScore ? (
        finishQuiz()
      ) : (
        !showQuiz()
      )
    }

    </div>
  )
}

export default Quiz