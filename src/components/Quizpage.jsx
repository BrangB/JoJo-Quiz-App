import React from 'react'
import img1 from '../img/undrawR.svg'
import Animation from './Animation'
import {Data} from '../Database/Data'
import { useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { actions } from '../store/store'
import { Link } from 'react-router-dom'
import { randomQuestions } from '../Database/Data'

function Quizpage() {
  const totalMark = useSelector(state => state.correctAnswerCount)
  const currentPages = useSelector(state => state.currentPage)

  const [questions, setQuestion] = useState(randomQuestions)
  const [checkIndex, setCheckIndex] = useState(0)
  const [disabledBtn, setDisabledBtn] = useState([]);
  const [currentSelect, setCurrentSelect] = useState({num: 1});

  console.log(randomQuestions[0])

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

  const getAnswer = (e) => {
    const correctAnswer = questions[checkIndex].answer;
    const selectedAnswer = questions[checkIndex].Choices[e.target.id]
    // const selectedAnswer = randomQuestion[e.target.id]
    setDisabledBtn([...disabledBtn, checkIndex])
    setCurrentSelect({num: parseInt(e.target.id, 10)})
    console.log(currentSelect)
    if(correctAnswer === selectedAnswer){
      add();
      console.log(totalMark)
    }else{
      console.log(totalMark)
    }
  }
  const TORF = disabledBtn.includes(checkIndex) ? true : false;
  const getIndexToshowColor = questions[checkIndex].Choices.indexOf(questions[checkIndex].answer)
  // const getIndexToshowColor = randomQuestion.indexOf(questions[checkIndex].answer)

  return (
    <div className='flex w-[100%] xsm:h-[75%] md:h-[100%] xsm:items-center md:items-start xsm:justify-center md:pt-[100px]'>
      <Animation>
      <div className='flex flex-col w-[100%] h-[100%] items-center justify-center '>
        <div className="questionContainer xsm:w-[100%] sm:w-[400px] md:w-[600px]">
            <div className="question relative bg-white opacity-95 xsm:w-[100%] xsm:min-h-[100px] md:min-h-[120px] h-auto flex flex-col items-center justify-center xsm:py-8 m-auto">
                <div className="title absolute top-[-15px] bg-[#585FF2] xsm:px-4 xsm:py-1 md:px-6 md:py-1 lg:px-10 lg:rounded-md rounded-s text-white xsm:text-sm md:text-md ">Quiz</div>
                <Animation><p className='text-center xsm:text-sm md:text-lg p-2 '>{questions[checkIndex].question}</p></Animation>
            </div>
            <div className="button w-full h-auto flex flex-wrap items-center justify-between xsm:mt-3 md:mt-5">
              {
                questions[checkIndex].Choices.map((choice, i) => {
                  return(
                    <button key={i} id={i} className={[`xsm:px-6  xsm:py-4 xsm:text-sm md:text-[1rem] lg:text[1.08rem] xl:text-lg xsm:w-[48%] border-[1px] text-center xsm:mb-2 lg:mb-2 text-black ${TORF ? 'bg-[#ffffffa4] text-[#525252]' : 'hover:border-[#3940c2e3] bg-white hover:bg-[#ACB1F9]  hover:text-[#282c75] hover:opacity-95'} transition-all duration-200 cursor-pointer`, disabledBtn.includes(checkIndex) ? `${i === getIndexToshowColor ? 'correct-answer' :  i === currentSelect.num ? 'wrong-answer' : ''}` : ''].join(' ')} disabled={TORF} onClick={getAnswer}>{choice}</button>
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
              <button className='xsm:w-[25%] bg-[#585FF2] opacity-95 rounded-sm text-center xsm:px-1 xsm:py-2 xsm:text-sm text-white'><Link to='/exercises/multipleC/result'>Check</Link></button>
            </div>
        </div>
        </div>
        </Animation>
    </div>
  )
}

export default Quizpage