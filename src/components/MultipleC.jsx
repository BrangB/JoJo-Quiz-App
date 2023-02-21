import React from 'react'
import Animation from './Animation'
import {Link} from 'react-router-dom'
import {FaAngleDoubleLeft , FaAngleDoubleRight} from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/store';
import { Tenses } from '../Database/TenseData';

function MultipleC() {
  const dispatch = useDispatch();
  const currentContent = useSelector(state => state.currentContent)
  const resetCorrect = () => {
      dispatch(actions.resetCorrectCount())
  }
  const contentHandler = (param) => {
    dispatch(actions.changeCurrentContent(param))

  }
  return (
    <div className='flex flex-col'>
       <Animation>
        <div className='flex xsm:p-4 xsm:items-center xsm:justify-center md:justify-start'>
          <Link to='/JoJo-Quiz-App'><FaAngleDoubleLeft size={"20px"} className='mr-4 xsm:text-md md:text-lg hover:text-[#585FF2] transition-all' /></Link>
          {/* <Link><FaAngleDoubleRight className=' xsm:text-md md:text-lg hover:text-[#585FF2] transition-all'/></Link> */}
        </div>
      </Animation>
      <div className='flex flex-wrap max-h-[500px] items-start xsm:justify-center lg:justify-start transition-all  overflow-y-scroll'>
        {
          Tenses.map((tense, i) => {
            return(
              <li className='list-none' key={i} onClick={resetCorrect}>
                <Animation>
                  <Link to={tense.path} onClick={() => contentHandler(tense.functionParam)}>
                    <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                        <p className='card-title xsm:text-sm sm:text-md text-center'><span className='xsm:text-xl'>{tense.Char}</span>{tense.title}</p>
                    </div>
                  </Link>
                </Animation>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}

export default MultipleC