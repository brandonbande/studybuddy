import React ,{useState} from 'react'


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

  const handleAnswerOptionClick = (isCorrect) =>{

    if(isCorrect){
      setscore(score+1)
    }

    const nextQuestion = currentQuestion + 1 ;
    if (nextQuestion < questions.length){
      setcurrentQuestion(nextQuestion)
    }else{
      setshowScore(true)
    }
  }

  const resetQuiz = () =>{
    setscore(0)
    setcurrentQuestion(0)
    setshowScore(false)
  }



  return (
    <div className='quiz' >

      {showScore ? (
        <div className='scoreSection'>
          <div className='score'>Score {score} / {questions.length}</div>
          <button onClick={() => resetQuiz()}>Retry</button>
        </div>
      ) : (
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
      )
    
    }

    </div>
  )
}

export default Quiz