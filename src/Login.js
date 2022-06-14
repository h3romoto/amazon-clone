import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login__container'>
      <Link to="/">
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
        />
      </Link>
    </div>
  )
}

export default Login