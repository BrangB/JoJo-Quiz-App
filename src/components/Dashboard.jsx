import React, {useEffect} from 'react'
import multipleChoice from '../img/multiplechoice.svg'
import dog from '../img/dog.svg'
import {motion} from 'framer-motion'
import Animation from './Animation'
import { Link } from 'react-router-dom'
import { useLottie } from "lottie-react";
import comingSoon from "../15003-lottie-coming-soon.json";

function Dashboard(){

    const options = {
        animationData: comingSoon,
        loop: true
      };
    
      const { View } = useLottie(options);
    return (
        <div className='flex justify-center items-center xsm:h-[550px] md:h-[350px] transition-all' >

                <div className='xsm:w-[90%] sm:w-[45%] md:w-[40%] flex justify-center items-center' >
                <Animation>
                    {View}
                    <h1 className='flex items-center justify-center comingSoon text-2xl '><span className='text-3xl'>C</span>oming Soon</h1>
                </Animation>
                </div>

            {/* <Link to='/exercises/multipleC'>
                <div className='xsm:w-[220px] sm:w-[250px] md:w-[240px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg'>
                    <img className='xsm:w-[120px] xsm:h-[60px] sm:w-[150px] sm:h-[80px] md:w-[140px] md:h-[75px] xsm:m-2 lg:m-3' src={multipleChoice} alt="" />
                    <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>M</span>ultiple Choice</p>
                </div>
            </Link>
            </Animation>
            <Animation>
            <Link to='/exercises/completeAns'>
                <div className='xsm:w-[220px] sm:w-[250px] md:w-[240px] xl:w-[260px] flex flex-col items-center justify-center bg-white xsm:m-3 xsm:p-4 md:p-3 xsm:shadow-sm md:shadow-md hover:md:shadow-lg'>
                    <img className='xs30w-[120px] xsm:h-[60px] sm:w-[150px] sm:h-[80px] md:w-[140px] md:h-[75px] xsm:m-2 lg:m-3' src={dog} alt="" />
                    <p className='card-title xsm:text-sm sm:text-md lg:text-lg text-center'><span className='xsm:text-2xl'>C</span>omplete the answer</p>
                </div>
            </Link> */}

        </div>

    )
}

export default Dashboard