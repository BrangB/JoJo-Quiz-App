import React from 'react'
import Animation from './Animation'
import {Link} from 'react-router-dom'
import {FaAngleDoubleLeft , FaAngleDoubleRight} from "react-icons/fa";

function MultipleC() {
  return (
    <div className='flex flex-col '>
      <Animation>
        <div className='flex xsm:p-4 xsm:items-center xsm:justify-center md:justify-start'>
          <Link to='/exercises'><FaAngleDoubleLeft className='mr-4 xsm:text-md md:text-lg hover:text-[#585FF2] transition-all' /></Link>
          <Link><FaAngleDoubleRight className=' xsm:text-md md:text-lg hover:text-[#585FF2] transition-all'/></Link>
        </div>
      </Animation>
      <div className='flex flex-wrap items-start xsm:justify-center md:justify-start transition-all'>
        <Animation>
          <Link to='/exercises/multipleC/Quiz'>
            <div className='xsm:w-[200px] xsm:h-[100px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>P</span>resent Tense</p>
            </div>
          </Link>
        </Animation>
        <Animation>
          <Link to='/exercises/multipleC'>
            <div className='xsm:w-[200px] xsm:h-[100px] sm:w-[230px] sm:h-[100px] md:w-[180px] md:h-[80px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg transition-all'>
                <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>P</span>ast Tense</p>
            </div>
          </Link>
        </Animation>
      </div>
    </div>
  )
}

export default MultipleC