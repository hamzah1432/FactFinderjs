import React from 'react'
import './App.css'
import ForgetPassword from './login/ForgetPassword'
import LoginForm from './login/LoginForm'
import SetPassword from './login/SetPassword'
import Successful from './login/Successful'
import SignupForm from './signup/SignupForm'
import VerifyForm from './signup/VerifyForm'



function App() {
  return (
    <div className='Auth'>
      <div className='LeftSide'>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className='RightSide'>
        <ForgetPassword />
        {/* <LoginForm /> */}
        {/* <SetPassword /> */}
        {/* <Successful /> */}
        {/* <VerifyForm /> */}
        {/* <SignupForm  /> */}
      </div>
    </div>
  )
}

export default App
