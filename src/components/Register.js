import React, {useState} from 'react'
import Path from './Path'
import './styles/Register.css'


const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [password2,setPassword2] = useState('')
  const [name,setName] = useState('')
  const [surname,setSurname] = useState('')
  const [city,setCity] = useState('')
  const [postcode,setPostcode] = useState('')
  const [address,setAddress] = useState('')
  const [tel,setTel] = useState('')
  const [check, setCheck] = useState(false)

  const renderElement = (name, state, setState)=>{
        return (
        <div className="registerElement">
          <label className='registerInputLabel'>{name}</label>
          <input className='registerInput' type={name==='Hasło' || name === 'Potwierdzenie hasła' ? 'password' : 'text'} value={state} onChange={(e) => setState(e.target.value)}/>
          {!state && check ? <p className="registerError">Wartość pola nie może być pusta</p> : ''}
        </div>
        )
  }

  const registerCheck = ()=>{
    setCheck(true)
  }

  return (
    <div className="content">
      <Path urlsAmount={1} url1='Rejestracja'/>
      <div className="registerCategoryContainer">
        <div className="categoryHeader">
          <h1 className="categoryTitle">Rejestracja</h1>
        </div>
        <div className="registerCategoryContent">
          <div className="registerItem">
            {renderElement('E-mail', email, setEmail)}
            {renderElement('Hasło', password,setPassword)}
            {renderElement('Potwierdzenie hasła', password2,setPassword2)}
            {renderElement('Imię', name,setName)}
            {renderElement('Nazwisko', surname,setSurname)}
            {renderElement('Miejscowość', city,setCity)}
            {renderElement('Kod pocztowy', postcode,setPostcode)}
            {renderElement('Adres', address,setAddress)}
            {renderElement('Telefon', tel,setTel)}
            <div className="registerElement">
              <button className='registerBtn' onClick={registerCheck}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register