import React, {useState} from 'react'
import Path from './Path'
import './styles/Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailErr, setEmailErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    if(!email) {
      setEmailErr(true)
    } else setEmailErr(false)
    if(!password) {
      setPasswordErr(true)
    } else setPasswordErr(false)
  }
  return (
    <div className="content">
        <Path urlsAmount={1} url1='Logowanie'/>
        <div className="loginCategoryContainer">
            <div className="categoryHeader">
                <h1 className="categoryTitle">Logowanie</h1>
            </div>
            <div className="loginCategoryContent">
                <div className="loginItem">
                  <form onSubmit={handleFormSubmit}>
                    <div className="loginFormElement">
                     <label className='loginInputLabel'>E-mail</label>
                     <input className='loginInput' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                     {emailErr ? <p className="loginError">Wartość pola nie może być pusta</p> : ''}
                    </div>
                    <div className="loginFormElement">
                     <label className='loginInputLabel'>Hasło</label>
                     <input className='loginInput' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                     {passwordErr ? <p className="loginError">Wartość pola nie może być pusta</p> : ''}
                    </div>
                    <div className="loginFormElement">
                     <Link to='/remind-password'><p className='passwordRemind'>Nie pamiętasz hasła?</p></Link>
                     <button className='loginFormBtn'></button>
                    </div>
                    <div className="loginFormElement">
                     <h1>Nie masz konta?</h1>
                    </div>
                    <div className="loginFormElement">
                     <Link to='/register'><button className='formRegisterBtn'></button></Link>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login