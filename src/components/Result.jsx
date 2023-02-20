import React from 'react'
import { useSelector } from 'react-redux'
import {Data} from '../Database/Data'
import { FaCheckCircle, FaTimesCircle} from "react-icons/fa";
import { randomQuestions } from '../Database/Data';


function Result() {
    const totalMark = useSelector(state => state.correctAnswerCount)

  return (
    <div className='w-full flex items-center justify-center p-10'>
        <div className="resultContainer xsm:w-[300px] xsm:h-auto bg-white p-5">
            <h1 className='w-full flex items-center justify-center xsm:text-lg font-bold xsm:mb-5 text-[#85751a]'>Result</h1>
            <div className='w-full flex-col items-center justify-center text-[#00cd21] text-center mb-4 xsm:text-md'>
                <p>Congradulations</p>
                <p>you made it!!!</p>
            </div>
            <ul className='p-2 mb-2'>
                <li className='w-full flex items-center justify-between p-3'>
                    <p className='xsm:text-sm'>Number Of Questions</p>
                    <p>{randomQuestions.length}</p>
                </li>
                <li className='w-full flex items-center justify-between p-3'>
                    <p className='xsm:text-sm flex items-center justify-center'><span className='mr-2'>Correct Quantity</span><FaCheckCircle color='#00cd21'/></p>
                    <p>{totalMark}</p>
                </li>
                <li className='w-full flex items-center justify-between p-3'>
                    <p className='xsm:text-sm flex items-center justify-center'><span className='mr-2'>Wrong Quantity</span> <FaTimesCircle color='#EF0000'/></p>
                    <p>{randomQuestions.length - totalMark}</p>
                </li>
            </ul>
            <p className='w-full text-center'><span className='text-[#00cd21]'>{Math.floor((totalMark / randomQuestions.length) * 100)}%</span> Success</p>
        </div>
    </div>
  )
}

export default Result