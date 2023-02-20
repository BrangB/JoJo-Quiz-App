import React from 'react'
import cat from '../img/cat.png'

import logo from '../img/logodesign.png'
import {Route, Routes, Link, NavLink,} from 'react-router-dom'
import Dashboard from './Dashboard'
import Exercises from './Exercises'
import MultipleC from './MultipleC'
import CompleteAns from './CompleteAns'
import {AnimatePresence} from 'framer-motion'
import { FaTimes , FaAlignJustify } from "react-icons/fa";
import { useState , useEffect} from 'react'
import Quizpage from './Quizpage'
import Result from './Result'
import { FaTv, FaBook, FaInfoCircle, FaAngleRight } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import Animation from './Animation'

function MainPage() {
  const [navControl, setNavControl] = useState(false);
  const [open, setOpen] = useState(true)
  const [activeNav, setActiveNav] = useState(1);

  const handlerNav = () => {
    setNavControl(navControl => !navControl)
  }

  return (
    <>
      <div className='absolute top-5 left-8 rounded-full p-2 z-10 bg-white xsm:block lg:hidden hover:bg-[#dee9f7] duration-200' onClick={handlerNav}><AiOutlineMenu size={'25px'} /></div>
      <div className={`miniNavigator fixed w-[100%] h-[100%]   bg-[#00000068] backdrop-blur-sm justify-center items-center ${navControl ? 'z-20 opacity-[1]': 'z-[-999] opacity-0'} xsm:flex lg:hidden transition duration-[400ms]`}>
        <div className='xsm:w-[200px] xsm:h-[250px] sm:w-[250px] sm:h-[300px] bg-[#ECECFE] xsm:p-2 relative flex flex-col items-center justify-center'>
          <div className="cross absolute top-0 m-auto bg-[#585FF2] xsm:p-3 xsm:text-md sm:text-lg text-[#ECECFE]">
            <FaTimes onClick={() => handlerNav()} />
          </div>
          <ul>
            <Link to='' onClick={() => handlerNav()} ><li className='xsm:text-md sm:text:lg nav-title xsm:m-6 sm:m-8 cursor-pointer hover:text-[#585FF2] transition-all font-bold text-[#585C65] text-center'>Dashboard</li></Link>
            <Link to='/exercises' onClick={() => handlerNav()} ><li className='xsm:text-md sm:text:lg nav-title xsm:m-6 sm:m-8 cursor-pointer hover:text-[] font-bold text-[#585C65] text-center'>Exercises</li></Link>
            <li className='xsm:text-md sm:text:lg nav-title xsm:m-6 sm:m-8 cursor-pointer hover:text-[] font-bold text-[#585C65] text-center'>About me</li>
          </ul>
        </div>
      </div>
        <div className={`${open ? "w-72" : "w-24" } duration-300 h-screen p-5 pt-3 bg-white xsm:hidden lg:block relative`}>
          <div className={`absolute border-2 border-[#2e4694] cursor-pointer bg-white rounded-full p-1 -right-3 duration-300 top-8 ${open && 'rotate-180'}`} onClick={() => setOpen(!open)}><HiChevronRight color='#2e4694' size={'16px'} /></div>
          <div className='flex items-center'>
            <img className={`w-[40px] h-[40px] mr-2 duration-300 ${!open && 'rotate-180'}`} src={logo} alt="logo" />
            <h1 className={`${!open && "scale-0"} duration-300 md:text-lg xsm:hidden lg:block lg:text-xl font-bold`}>JoJo Quiz</h1>
          </div>
          <ul className='flex flex-col pt-8'>
              <Link to='' >
                <li className={`flex items-center justify-start mb-3 py-3 md:mb-4 md:py-2 xsm:px-3 rounded-xl duration-200  cursor-pointer  hover:bg-[#EBF0FE]  hover:text-[#2e4694] ${activeNav === 1 ? "bg-[#EBF0FE] text-[#2e4694]" : 'text-[#626369]'}` } onClick={() => setActiveNav(1)}>
                  <div className='xsm:mr-4'><FaTv size={'20px'} /></div>
                  <p className={`xsm:text-sm lg:text-[1rem] duration-300 ${!open && "hidden"}`}>Dashboard</p>
                </li>
              </Link>
              <Link to='/exercises' >
              <li className={`flex items-center justify-start mb-3 py-3 md:mb-4 md:py-2 xsm:px-3 rounded-xl duration-200  cursor-pointer  hover:bg-[#EBF0FE] hover:text-[#2e4694] ${activeNav === 2 ? "bg-[#EBF0FE] text-[#2e4694]" : 'text-[#626369]'}` } onClick={() => setActiveNav(2)}>
                  <div className='md:mr-4 '><FaBook size={'20px'}/></div>
                  <p className={`xsm:text-sm lg:text-[1rem] duration-300 ${!open && "hidden"}`}>Exercises</p>
                </li>
              </Link>
              <li className={`flex items-center justify-start mb-3 py-3 md:mb-4 md:py-2 xsm:px-3 rounded-xl duration-200  cursor-pointer  hover:bg-[#EBF0FE] hover:text-[#2e4694] ${activeNav === 3 ? "bg-[#EBF0FE] text-[#2e4694]" : 'text-[#626369]'}` } onClick={() => setActiveNav(3)}>
                <div className='md:mr-4 '><FaInfoCircle size={'20px'}/></div>
                <p className={`xsm:text-sm lg:text-[1rem] duration-300 ${!open && "hidden"}`}>About me</p>
              </li>
            </ul>
        </div>
        <div className={`relative  xsm:top-[50px] xsm:w-[100%] xsm:h-auto lg:w-[84%] bg-[#ececfe00] xsm:p-4 md:p-8 `}>
              <Routes>
                  <Route  path='' element={<Dashboard/>}/>
                  <Route  path='/exercises' element={<Exercises/>}/>
                  <Route path='/exercises/multipleC' element={<MultipleC/>}/>
                  <Route path='/exercises/completeAns' element={<CompleteAns/>}/>
                  <Route path='/exercises/multipleC/Quiz' element={<Quizpage />} />
                  <Route path='/exercises/multipleC/result' element={<Result />} />
              </Routes>
        </div>
        <Animation>
          <img className='fixed bottom-0 xsm:right-0 xsm:w-[180px] xsm:h-[70px] sm:w-[200px] sm:h-[80px]' src={cat} alt="" />
        </Animation>
    </>
  )
}

export default MainPage