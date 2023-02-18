import React from 'react'
import logo from '../img/JoJo_Quiz_App.png'
import img1 from '../img/login.svg'
import img2 from '../img/googleicon.png'

function Loginform() {
  return (
    <>
      <p className='loginSmallCircle rounded-full w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-[#ACB1F9] absolute top-[25%] left-[4%] md:top-[28%] md:left-[22%] lg:top-[15%] lg:left-[28%] z-0'></p>
      <p className='loginBigCircle rounded-full w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px] bg-[#ACB1F9] absolute top-[65%] left-[65%]  md:top-[60%] md:left-[60%] lg:top-[60%] lg:left-[60%] z-0'></p>
      <div className='p-5 flex flex-col items-center justify-start lg:w-[480px] lg:h-[712px] w-[290px] h-[500px] md:w-[330px] md:h-[560px] bg-[#ffffff7e] rounded-md lg:rounded-xl relative z-10'>
        <img className='w-[120px] h-[120px] lg:w-[180px] lg:h-[180px]' src={logo} alt="logo" />
        <img className='w-[270px] h-[170px] md:w-[300px] md:h-[200px] lg:w-[350px] lg:h-[250px] mt-4 lg:mt-8' src={img1} alt="" />
        <div className='flex flex-row items-center justify-center px-6 md:px-9 py-2 rounded-md mt-24 bg-white cursor-pointer'>
          <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] mr-6' src={img2} alt="google icon" />
          <p className='text-[#585C65] text-sm md:text-lg  font-bold'>LogIn with google</p>
        </div>
      </div>
    </>
  )
}

export default Loginform