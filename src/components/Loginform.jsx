import React, { useState } from 'react'
import logo from '../img/logodesign.png'
import img1 from '../img/login.svg'
import img2 from '../img/googleicon.png'
import { useSelector, useDispatch } from 'react-redux'
import { app } from '../firebase/firebaseConfig'
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { actions } from '../store/store'


function Loginform(props) {
  const [data, setData] = useState({})
  const auth = getAuth();
  const dispatch = useDispatch();

  const handler = (event) => {
    let newInput = { [event.target.name] : event.target.value}
    setData({...data, [event.target.name] : event.target.value })
  }

  const checkSignIn = () => {
    dispatch(actions.signInFnc())
  }

  const handlerLogIn = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(res => {
      console.log(res.user)
      checkSignIn()
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div className='w-full flex items-center justify-center '>
      <div className='bg-[#ffffff7e] xsm:w-[280px] xsm:h-[450px] lg:w-[320px] lg:h-[470px] flex flex-col items-center xsm:p-4 rounded-md shadow-lg'>
        <div className='flex items-center justify-center'>
          <img className='xsm:w-[55px] xsm:h-[55px] xsm:mr-2' src={logo} alt="logo" />
          <p className='xsm:text-2xl font-bold'>JoJo Quiz</p>
        </div>
        <img className='xsm:w-[140px] xsm:h-[200px] lg:w-[170px] lg:h-[220px] ' src={img1} alt="" />
        {/* <div className='flex flex-row items-center justify-center xsm:px-8 lg:px-12 py-2 rounded-md  bg-white cursor-pointer duration-200 shadow-sm hover:shadow-md' onClick={props.signInHandler}>
          <img className='xsm:w-[25px] xsm:h-[25px]  xsm:mr-6 lg:mr-8' src={img2} alt="google icon" />
          <p className='text-[#585C65] xsm:text-sm lg:text-md font-bold'>LogIn with google</p>
        </div> */}
        <div className=' flex flex-col w-full items-center justify-center'>
          <input className='xsm:w-[100%] xsm:h-[40px] mb-3  p-2 xsm:text-sm md:text-md xsm:rounded-sm md:rounded-md' placeholder='Email' name='email' type="email" onChange={(event) => handler(event)}/>
          <input className='xsm:w-[100%] xsm:h-[40px] mb-3  p-2 xsm:text-sm md:text:md xsm:rounded-sm md:rounded-md' placeholder='Passsword' name='password' type="password" onChange={(event) => handler(event)} />
          <button className='text-white xsm:text-sm md:text:md xsm:px-5 xsm:py-2 bg-[#585FF2] xsm:mt-5 xsm:rounded-sm hover:bg-[#6e75fa] duration-200' onClick={handlerLogIn}>Log In</button>
        </div>
      </div>
    </div>
  )
}

export default Loginform