import React, {useState, useRef} from 'react'
import Path from './Path'
import ReCAPTCHA from "react-google-recaptcha"

const Recommend = ({friendEmail, setFriendEmail, yourName, setYourName}) => {
  const [message, setMessage] = useState('')
  const [captcha, setCaptcha] = useState(false)
  const captchaRef = useRef(null)

  const captchaChange = ()=>{
    setCaptcha(true)
  }

  return (
    <div className="content">
      <Path urlsAmount={1} url1={'Poleć nas'}/>
      <form className="templateForm">
        <h1 className="formTitle">Poleć nas</h1>
        <input type="text" className="formInput" value={friendEmail} onChange={(e)=> setFriendEmail(e.target.value)} placeholder='Adres e-mail znajomego'/>
        <input type="text" className="formInput" value={yourName} onChange={(e)=> setYourName(e.target.value)} placeholder='Twoje imię'/>
        <textarea type="text" className="formInput textarea" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder='Wiadomość'/>
        <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITE_KEY}
        ref={captchaRef}
        onChange={captchaChange}
        />
        <button className={`formSubmitBtn ${captcha===false || !friendEmail || !yourName || !message? 'disabled': ''}`} type='submit'></button>
      </form>
    </div>
  )
}

export default Recommend