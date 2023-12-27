import React from 'react'
import Loginform from './components/Loginform'
import MainPage from './components/MainPage'
import { BrowserRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { app } from '../src/firebase/firebaseConfig'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { actions } from './store/store'

function App() {
  const signIn = useSelector(state => state.LogIncondition);
  
  let auth = getAuth()
  let googleProvider = new GoogleAuthProvider();
  const dispatch = useDispatch();

  const checkSignIn = () => {
    dispatch(actions.signInFnc())
  }

  const signInHandler = () => {
    signInWithPopup(auth, googleProvider)
    .then(res => {
      console.log(res.user)
      checkSignIn();
      console.log(signIn)
    })
    .catch(err => {
      console.log(err.message)
    })
  }

  return (
    <div className='w-full h-screen overflow-hidden flex '>
      <BrowserRouter basename="/JoJo-Quiz-App">
      {/* {signIn ? <MainPage /> : <Loginform signInHandler={signInHandler} />} */}
        <MainPage />
        {/* <Loginform /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
