import React from 'react'
import logo from '../img/logodesign.png'
import img1 from '../img/login.svg'
import img2 from '../img/googleicon.png'


function Loginform(props) {

  return (
    <div className='w-full flex items-center justify-center '>
      <div className='bg-[#ffffff7e] xsm:w-[280px] xsm:h-[450px] lg:w-[320px] lg:h-[470px] flex flex-col items-center xsm:p-4 rounded-md shadow-lg'>
        <div className='flex items-center justify-center'>
          <img className='xsm:w-[55px] xsm:h-[55px] xsm:mr-2' src={logo} alt="logo" />
          <p className='xsm:text-2xl font-bold'>JoJo Quiz</p>
        </div>
        <img className='xsm:w-[200px] xsm:h-[300px] lg:w-[230px] lg:h-[320px] ' src={img1} alt="" />
        <div className='flex flex-row items-center justify-center xsm:px-8 lg:px-12 py-2 rounded-md  bg-white cursor-pointer duration-200 shadow-sm hover:shadow-md' onClick={props.signInHandler}>
          <img className='xsm:w-[25px] xsm:h-[25px]  xsm:mr-6 lg:mr-8' src={img2} alt="google icon" />
          <p className='text-[#585C65] xsm:text-sm lg:text-md font-bold'>LogIn with google</p>
        </div>
      </div>
    </div>
  )
}

export default Loginform