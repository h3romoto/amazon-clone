import './Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth, createUserWithEmailAndPassword } from './firebaseconf'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    // prevent app from refreshing
    e.preventDefault()
  } 

const register = e => {
  // prevent app from refreshing
  e.preventDefault()

  createUserWithEmailAndPassword(auth, email, password)
  .then((auth) => {
    console.log(auth);
  })
  .catch(error => alert(error.message))
}

  return (
    <div className='login'>
      <Link to="/">
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.email)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setEmail(e.target.password)}/>
          <button type='submit' className='signIn__button' onClick={signIn}>Sign in</button>

          <p>
            By signing in, you are agreeing to the terms & conditions of this fake Amazon website.
          </p>
          <p className='accountSignUp__prompt'>
            Don't have an account?
          </p>
          <button type='submit' className='signUp__button' onClick={register}>Create your Amazon Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login