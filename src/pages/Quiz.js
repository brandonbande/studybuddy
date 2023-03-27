import React ,{useState ,useEffect} from 'react'


const list =[
  {
    question: "What is the primary cause of global warming?",
    answerOptions: [
      { answerText: "Deforestation", isCorrect: false },
      { answerText: "Fossil fuel burning", isCorrect: true },
      { answerText: "Overfishing", isCorrect: false },
      { answerText: "Ozone depletion", isCorrect: false }
    ]
  },
  {
    question: "What is the largest source of greenhouse gas emissions in the United States?",
    answerOptions: [
      { answerText: "Transportation", isCorrect: true },
      { answerText: "Agriculture", isCorrect: false },
      { answerText: "Industry", isCorrect: false },
      { answerText: "Residential and commercial buildings", isCorrect: false }
    ]
  },
  {
    question:
      "Which country has the highest per capita carbon dioxide emissions?",
    answerOptions: [
      { answerText: "United States", isCorrect: false },
      { answerText: "China", isCorrect: false },
      { answerText: "Qatar", isCorrect: true },
      { answerText: "India", isCorrect: false }
    ]
  },
  {
    question:
      "What percentage of global greenhouse gas emissions come from livestock farming?",
    answerOptions: [
      { answerText: "5%", isCorrect: false },
      { answerText: "14.5%", isCorrect: true },
      { answerText: "25%", isCorrect:false},
      { answerText:"50%",isCorrect:false}
    ]
  },
  {
    question:
      "Which of the following gases has the highest global warming potential?",
    answerOptions:[
        {answerText:"Carbon dioxide (CO2)",isCorrect:false},
        {answerText:"Methane (CH4)",isCorrect:false},
        {answerText:"Nitrous oxide (N2O)",isCorrect:false},
        {answerText:"Chlorofluorocarbons (CFCs)",isCorrect:true}
    ]
  },
  {
    question:
      "What percentage of global water usage goes towards agriculture?",
    answerOptions:[
        {answerText:"20%",isCorrect:false},
        {answerText:"40%",isCorrect:false},
        {answerText:"70%",isCorrect:true},
        {answerText:"90%",isCorrect:false}
    ]
  },
  {
    question:
      "Which country produces the most renewable energy?",
    answerOptions:[
        {answerText:"China",isCorrect:true},
        {answerText:"United States",isCorrect:false},
        {answerText:"Germany",isCorrect:false},
        {answerText:"India",isCorrect:false}
    ]
  },
  {
    question:
      "What percentage of global electricity production comes from renewable sources?",
    answerOptions:[
        {answerText:"10%",isCorrect:false},
        {answerText:"26%",isCorrect:true},
        {answerText:"50%",isCorrect:false},
        {answerText:"75%",isCorrect:false}
    ]
  },
  {
    question: "What is the primary cause of deforestation in Africa?",
    answerOptions: [
      { answerText: "Agriculture", isCorrect: true },
      { answerText: "Urbanization", isCorrect: false },
      { answerText: "Mining", isCorrect: false },
      { answerText: "Tourism", isCorrect: false }
    ]
  },
  {
    question:
      "Which African country has the highest rate of deforestation?",
    answerOptions: [
      { answerText: "Nigeria", isCorrect: true },
      { answerText: "Democratic Republic of Congo", isCorrect: false },
      { answerText: "Sudan", isCorrect: false },
      { answerText: "Ethiopia", isCorrect: false }
    ]
  },
  {
    question:
      "What percentage of Africa's population relies on biomass for cooking?",
    answerOptions: [
      { answerText: "30%", isCorrect: false },
      { answerText: "50%", isCorrect: false },
      { answerText: "70%", isCorrect:true},
      { answerText:"90%",isCorrect:false}
    ]
  },
  {
    question:
      "Which African country has the highest carbon dioxide emissions per capita?",
    answerOptions:[
        {answerText:"South Africa",isCorrect:true},
        {answerText:"Nigeria",isCorrect:false},
        {answerText:"Egypt",isCorrect:false},
        {answerText:"Algeria",isCorrect:false}
    ]
  },
  {
    question:
      "What percentage of Africa's electricity production comes from renewable sources?",
    answerOptions:[
        {answerText:"10%",isCorrect:false},
        {answerText:"26%",isCorrect:false},
        {answerText:"50%",isCorrect:true},
        {answerText:"75%",isCorrect:false}
    ]
  },
  {
    question:
      "Which African country produces the most renewable energy?",
    answerOptions:[
        {answerText:"South Africa",isCorrect:true},
        {answerText:"Egypt",isCorrect:false},
        {answerText:"Morocco",isCorrect:false},
        {answerText:"Ethiopia",isCorrect:false}
    ]
  },
  {
    question:
      "What percentage of Africa's land area is threatened by desertification?",
    answerOptions:[
        {answerText:"30%",isCorrect:true},
        {answerText:"40%",isCorrect:false},
        {answerText:"50%",isCorrect:false},
        {answerText:"60%",isCorrect:false}
    ]
  },
  {
    question:
      "Which African country has the highest percentage of its land area covered by forest?",
    answerOptions:[
        {answerText:"Gabon",isCorrect:true},
        {answerText:"Democratic Republic of Congo",isCorrect:false},
        {answerText:"Cameroon",isCorrect:false},
        {answerText:"Central African Republic",isCorrect:false}
    ]
  },
];

const createQuestions = () =>{
  const questions = [];
  while (questions.length < 10) {
    const randomIndex = Math.floor(Math.random() * list.length);
    if (!questions.includes(list[randomIndex])) {
      questions.push(list[randomIndex]);
    }
}
return questions;
}

var questions = createQuestions();

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
  const resetQuiz = () => {
    setscore(0);
    setcurrentQuestion(0);
    setshowScore(false);
    const now = new Date();
    setTargetTime(new Date(now.getTime() + (5 * 60 * 1000)));
    questions = createQuestions();
  };


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
  const [targetTime, setTargetTime] = useState(new Date(now.getTime() + (5 * 60 * 1000)));
  const [timeRemaining, setTimeRemaining] = useState(targetTime - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(targetTime - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);




  return (
    <div className='quiz' >

{timeRemaining > 0 && !showScore ? (
  <>
    <div>
      Time remaining: {Math.floor((timeRemaining / (1000 * 60)) % 60)} minutes{" "}
      {Math.floor(timeRemaining / 1000) % 60} seconds
    </div>
    {showQuiz()}
  </>
) : (
  finishQuiz()
)}

    </div>
  )
}

export default Quiz