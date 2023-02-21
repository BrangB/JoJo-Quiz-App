import React from 'react'
import img1 from '../img/undrawR.svg'
import Animation from './Animation'
import { futureContinuousQuestions, futurePerfectContinuousQuestions, futurePerfectQuestions, pastContinuousQuestions, pastPerfectContinuousQuestions, pastPerfectQuestions, pastTenseQuestions, presentContinuousQuestions, presentPerfectContinuousQuestions, presentPerfectQuestions, simpleFutureQuestions} from '../Database/Data'
import { useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { actions } from '../store/store'
import { Link } from 'react-router-dom'
import { randomQuestions } from '../Database/Data'
import {FaAngleDoubleLeft , FaAngleDoubleRight} from "react-icons/fa";

function Quizpage() {
  const totalMark = useSelector(state => state.correctAnswerCount)
  // const currentPages = useSelector(state => state.currentPage)
  const currentContent = useSelector(state => state.currentContent)

  const [checkIndex, setCheckIndex] = useState(0)
  const [disabledBtn, setDisabledBtn] = useState([]);
  const [currentSelect, setCurrentSelect] = useState({num: 1});

  const [questions, setQuestion] = useState(JSON.parse(`${currentContent === "presentTense" ? JSON.stringify(randomQuestions)  : currentContent === "pastTense" ? JSON.stringify(pastTenseQuestions) : currentContent === "futureTense" ? JSON.stringify(simpleFutureQuestions) : currentContent === "presentContinuous" ? JSON.stringify(presentContinuousQuestions) : currentContent === "pastContinuous" ? JSON.stringify(pastContinuousQuestions) : currentContent === "presentPerfect" ? JSON.stringify(presentPerfectQuestions) : currentContent === "pastPerfect" ? JSON.stringify(pastPerfectQuestions) : currentContent === "presentPerfectContinuous" ? JSON.stringify(presentPerfectContinuousQuestions) : currentContent === "pastPerfectContinuous" ? JSON.stringify(pastPerfectContinuousQuestions) : currentContent === "futureContinuous" ? JSON.stringify(futureContinuousQuestions) : currentContent === "futurePerfect" ? JSON.stringify(futurePerfectQuestions) : currentContent === "futurePerfectContinuous" ? JSON.stringify(futurePerfectContinuousQuestions) : JSON.stringify(randomQuestions)}`))
  // console.log(currentContent)

  const dispatch = useDispatch();
  const add = () => {
    dispatch(actions.addCorrectCount())
  }
  const prevPage = () => {
    setCheckIndex(checkIndex - 1)
    dispatch(actions.reduceCheckIndex())
  }
  const nextPage = () => {
    setCheckIndex(checkIndex + 1)
    dispatch(actions.increaseCheckIndex())
  }
  const resetCorrect = () => {
      dispatch(actions.resetCorrectCount())
  }

  const getAnswer = (e) => {
    const correctAnswer = questions[checkIndex].answer;
    const selectedAnswer = questions[checkIndex].Choices[e.target.id]
    // const selectedAnswer = randomQuestion[e.target.id]
    setDisabledBtn([...disabledBtn, checkIndex])
    setCurrentSelect({num: parseInt(e.target.id, 10)})
    // console.log(currentSelect)
    if(correctAnswer === selectedAnswer){
      add();
      // console.log(totalMark)
    }else{
      console.log(totalMark)
    }
  }
  const TORF = disabledBtn.includes(checkIndex) ? true : false;
  const getIndexToshowColor = questions[checkIndex].Choices.indexOf(questions[checkIndex].answer)
  // const getIndexToshowColor = randomQuestion.indexOf(questions[checkIndex].answer)

  return (
    <div className='flex-col w-[100%] xsm:h-[75%] md:h-[100%] xsm:items-center md:items-start xsm:justify-center '>
        <Animation>
        <div className='flex xsm:p-4 xsm:items-center lg:px-20 xsm:mb-10 lg:mb-5 xsm:justify-center md:justify-start ' onClick={resetCorrect}>
          <Link to='/JoJo-Quiz-App/multipleC'><FaAngleDoubleLeft size={"35px"} className=' xsm:text-md text-white md:text-lg bg-[#5860f2e3] rounded-full border-1  border-[#5860f2e3] p-2 hover:scale-110 transition-all' /></Link>
          {/* <Link><FaAngleDoubleRight className=' xsm:text-md md:text-lg hover:text-[#585FF2] transition-all'/></Link> */}
        </div>
      </Animation>
      <Animation>
      <div className='flex flex-col w-[100%] h-[100%] items-center justify-center '>
        <div className="questionContainer xsm:w-[100%] sm:w-[400px] md:w-[600px]">
            <div className="question relative bg-white opacity-95 xsm:w-[100%] xsm:min-h-[100px] md:min-h-[120px] h-auto flex flex-col items-center justify-center xsm:py-8 m-auto">
                <div className="title absolute top-[-15px] bg-[#585FF2] xsm:px-4 xsm:py-1 md:px-6 md:py-1 lg:px-10 lg:rounded-md rounded-s text-white xsm:text-sm md:text-md ">Quiz</div>
                <Animation><p className='text-center xsm:text-sm md:text-lg p-2 text-[#444444]'>{questions[checkIndex].question}</p></Animation>
            </div>
            <div className="button w-full h-auto flex flex-wrap items-center justify-between xsm:mt-3 md:mt-5">
              {
                questions[checkIndex].Choices.map((choice, i) => {
                  return(
                    <button key={i} id={i} className={[`xsm:px-6  xsm:py-4 xsm:text-sm md:text-[1rem] lg:text[1.08rem] xl:text-lg xsm:w-[48%] border-[1px] text-center xsm:mb-2 lg:mb-2 text-[#444444] ${TORF ? 'bg-[#ffffffa4] text-[#525252]' : 'hover:border-[#3940c2e3] bg-white hover:bg-[#ACB1F9]  hover:text-[#282c75] hover:opacity-95'} transition-all duration-200 cursor-pointer`, disabledBtn.includes(checkIndex) ? `${i === getIndexToshowColor ? 'correct-answer' :  i === currentSelect.num ? 'wrong-answer' : ''}` : ''].join(' ')} disabled={TORF} onClick={getAnswer}>{choice}</button>
                  )
                })
              }
            </div>
            <div className="paging w-full flex items-center justify-center mt-4">
              <p className='xsm:text-sm lg:text-lg'>{questions[checkIndex].id}/{questions.length}</p>
            </div>
            <div className="button xsm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto h-auto flex flex-wrap items-center justify-around xsm:mt-8 md:mt-8">
              <button className={['xsm:w-[25%] bg-[#585FF2] opacity-95 rounded-sm text-center xsm:px-1 xsm:py-2 xsm:text-sm text-white ', questions[checkIndex].id === 1 ? 'opacity-70 cursor-not-allowed' : ""].join(' ')} disabled={questions[checkIndex].id === 1 ? true : false} onClick={prevPage}>Previous</button>
              <button className={['xsm:w-[25%] bg-[#585FF2] opacity-95 rounded-sm text-center xsm:px-1 xsm:py-2 xsm:text-sm text-white ', questions[checkIndex].id === questions[questions.length - 1].id ? 'opacity-70 cursor-not-allowed' : ""].join(' ')} disabled={questions[checkIndex].id === questions[questions.length - 1].id ? true : false} onClick={nextPage}>Next</button>
              <button className='xsm:w-[25%] bg-[#585FF2] opacity-95 rounded-sm text-center xsm:px-1 xsm:py-2 xsm:text-sm text-white'><Link to='/JoJo-Quiz-App/multipleC/result'>Check</Link></button>
            </div>
        </div>
        </div>
        </Animation>
    </div>
  )
}

export default Quizpage