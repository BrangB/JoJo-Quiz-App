import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Animation from './Animation'
import AnimateHeight from 'react-animate-height';
import { useLottie } from "lottie-react";
import liveanimate from "../84565-about-us.json";

function About() {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const options = {
        animationData: liveanimate,
        loop: true
      };
    
      const { View } = useLottie(options);
  return (
    <Animation>
    <div className='flex-col xsm:w-[100%] xsm:h-screen xsm:py-10 md:py-3 xsm:px-4 lg:px-10 xsm:items-center md:items-start xsm:justify-center overflow-y-scroll'>
        <div className='flex justify-center items-center w-full xsm:mb-4'>
            <div className='xsm:w-[90%] sm:w-[45%] ' >
                <Animation>
                    {View}
                </Animation>
            </div>
        </div>
        <AnimateHeight id="example-panel" duration={500} height={open1 ? "auto" : 60}>
            <div className={`bg-white xsm:p-4 mb-3 relative duration-300`}>
                <div className={`${open1 ? "rotate-180" : ''} duration-300 absolute top-5 right-4`}  onClick={() => setOpen1(!open1)}><FaChevronDown /></div>
                <h2 className='xsm:text-md lg:text-lg font-bold text-[#3d4d57] xsm:mb-5 lg:mb-4'>About The Website & Purpose</h2>
                <p className='xsm:text-sm md:text-md text-justify'>This quiz app is an interactive and engaging platform that allows users to test their knowledge on English grammar. The app is designed with a user-friendly interface and offers a variety of question formats such as multiple choice, true or false (coming soon), and fill in the blank (coming soon).</p>
            </div>
        </AnimateHeight>
        <AnimateHeight id="example-panel" duration={500} height={open2 ? "auto" : 60}>
        <div className={`bg-white xsm:p-4 mb-3 relative duration-300 border-t-4 border-[#ECECFE]`}>
            <div className={`${open2 ? "rotate-180" : ''} duration-300 absolute top-5 right-4`} onClick={() => setOpen2(!open2)}><FaChevronDown /></div>
            <h2 className='xsm:text-md lg:text-lg font-bold text-[#3d4d57] xsm:mb-5 lg:mb-4'>Future plan</h2>
            <p className='xsm:text-sm md:text-md text-justify'>Some of my potential ideas may include expanding the range of subjects available for users to quiz themselves on, adding interactive features such as admin dashboard or rewards for high scores, implementing more advanced question types such as image or audio-based questions, and improving the app's performance and user experience through user feedback and testing. As a new features, I also want to add some exercises (multiple choice) deal with basic web development (HTML and CSS). And the future plans for your quiz app will depend on the needs and interests of the user base.</p>
        </div>
        </ AnimateHeight >
        <AnimateHeight id="example-panel" duration={500} height={open3 ? "auto" : 60}>
        <div className={`bg-white xsm:p-4 mb-3 relative duration-300 border-t-4 border-[#ECECFE]`}>
            <div className={`${open3 ? "rotate-180" : ''} duration-300 absolute top-5 right-4`} onClick={() => setOpen3(!open3)}><FaChevronDown /></div>
            <h2 className='xsm:text-md lg:text-lg font-bold text-[#3d4d57] xsm:mb-5 lg:mb-4'>Developer & Languages</h2>
            <p className='xsm:text-sm md:text-md text-justify'>This quiz app is an interactive and engaging platform that allows users to test their knowledge on English grammar. The app is designed with a user-friendly interface and offers a variety of question formats such as multiple choice, true or false (coming soon), and fill in the blank (coming soon).</p>
        </div>
        </ AnimateHeight >
        {/* {data.map(item => {
            return(
            <Animation>
            <div className={`bg-white xsm:p-4 mb-3 ${open ? "h-auto" : "h-[60px] overflow-hidden"} rounded-2xl transition-all relative duration-300`}>
                <div className='absolute top-5 right-4' onClick={() => setOpen(!open)}>{open ? <FaChevronDown /> : <FaChevronUp />}</div>
                <h2 className='xsm:text-md lg:text-lg font-bold text-[#3d4d57] mb-4'>{item.title}</h2>
                <p className='xsm:text-sm md:text-md text-justify'>{item.paragraph}</p>
            </div>
            </Animation>
            )
        })} */}
    </div>
    </Animation>
  )
}

export default About