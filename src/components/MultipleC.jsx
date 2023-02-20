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
  const contentHandler = (param) => {
    dispatch(actions.changeCurrentContent(param))

  }
  return (
    <div className='flex flex-col'>
       <Animation>
        <div className='flex xsm:p-4 xsm:items-center xsm:justify-center md:justify-start'>
          <Link to='/exercises'><FaAngleDoubleLeft size={"20px"} className='mr-4 xsm:text-md md:text-lg hover:text-[#585FF2] transition-all' /></Link>
          {/* <Link><FaAngleDoubleRight className=' xsm:text-md md:text-lg hover:text-[#585FF2] transition-all'/></Link> */}
        </div>
      </Animation>
      <div className='flex flex-wrap max-h-[500px] items-start xsm:justify-center lg:justify-start transition-all  overflow-y-scroll'>
        {
          Tenses.map(tense => {
            return(
              <li className='list-none'>
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
        {/* <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("presentTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>P</span>resent Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>P</span>ast Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("futureTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>F</span>uture Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md  text-center'><span className='xsm:text-xl'>P</span>resent Continuous Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md text-center'><span className='xsm:text-xl'>P</span>ast Continuous Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md text-center'><span className='xsm:text-xl'>P</span>resent Perfect Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md  text-center'><span className='xsm:text-xl'>P</span>ast Perfect Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md text-center'><span className='xsm:text-xl'>P</span>resent Perfect Continuous Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md text-center'><span className='xsm:text-xl'>P</span>ast Perfect Continuous Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md text-center'><span className='xsm:text-xl'>F</span>uture Continuous Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md text-center'><span className='xsm:text-xl'>F</span>uture Perfect Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC/Quiz' onClick={() => contentHandler("pastTense")}>
            <div className='xsm:w-[180px] xsm:h-[80px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md text-center'><span className='xsm:text-xl'>F</span>uture Perfect Continuous Tense</p>
            </div>
          </Link>
        </Animation> */}
      </div>
    </div>
  )
}

export default MultipleC