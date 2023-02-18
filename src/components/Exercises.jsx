import React from 'react'
import multipleChoice from '../img/multiplechoice.svg'
import dog from '../img/dog.svg'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import Animation from './Animation'
import { useDispatch } from 'react-redux'
import { actions } from '../store/store'

function Exercises(){
    const dispatch = useDispatch()
    const resetCorrect = () => {
        dispatch(actions.resetCorrectCount())
    }
    return (
        <div className='flex flex-wrap items-start xsm:justify-center md:justify-start transition-all xsm:mt-6'>
            <Animation>
            <Link to='/exercises/multipleC'>
                <div className='xsm:w-[220px] sm:w-[250px] md:w-[240px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg' onClick={resetCorrect}>
                    <img className='xsm:w-[120px] xsm:h-[60px] sm:w-[150px] sm:h-[80px] md:w-[140px] md:h-[75px] xsm:m-2 lg:m-3' src={multipleChoice} alt="" />
                    <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>M</span>ultiple Choice</p>
                </div>
            </Link>
            </Animation>
            <Animation>
            <Link to='/exercises/multipleC'>
                <div className='xsm:w-[220px] sm:w-[250px] md:w-[240px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg' onClick={resetCorrect}>
                    <img className='xs30w-[120px] xsm:h-[60px] sm:w-[150px] sm:h-[80px] md:w-[140px] md:h-[75px] xsm:m-2 lg:m-3' src={dog} alt="" />
                    <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>C</span>omplete the answer</p>
                </div>
            </Link>
            </Animation>
            {/* <Animation>
            <div className='xsm:w-[220px] sm:w-[250px] md:w-[240px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg'>
                <img className='xsm:w-[120px] xsm:h-[60px] sm:w-[150px] sm:h-[80px] md:w-[140px] md:h-[75px] xsm:m-2 lg:m-3' src={multipleChoice} alt="" />
                <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>M</span>ultiple Choice</p>
            </div>
            </Animation>
            <Animation>
            <div className='xsm:w-[220px] sm:w-[250px] md:w-[240px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg'>
                <img className='xs30w-[120px] xsm:h-[60px] sm:w-[150px] sm:h-[80px] md:w-[140px] md:h-[75px] xsm:m-2 lg:m-3' src={dog} alt="" />
                <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>C</span>omplete the answer</p>
            </div>
            </Animation> */}
        </div>
    )
}

export default Exercises