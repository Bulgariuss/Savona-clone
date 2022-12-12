import React, {useState, useRef} from 'react'
import Path from './Path'
import ReCAPTCHA from "react-google-recaptcha"

const Newsletter = ({yourEmail='', setYourEmail}) => {
  const [promosChecked, setPromosChecked] = useState(true)
  const [newsChecked, setNewsChecked] = useState(true)
  const [captcha, setCaptcha] = useState(false)
  const captchaRef = useRef(null)
  const handleCheckbox = (type)=>{
    if(type==='promos') setPromosChecked(!promosChecked)
    if(type==='news') setNewsChecked(!newsChecked)
  }
  const captchaChange = ()=>{
    setCaptcha(true)
  }
  return (
    <div className="content">
      <Path urlsAmount={2} url1={'Newsletter'} url2='Rejestracja' path={'/biuletyn'}/>
      <form className="templateForm">
        <h1 className="formTitle">Rejestracja</h1>
        <input type="text" value={yourEmail} onChange={(e)=>setYourEmail(e.target.value)} className="formInput" placeholder='E-mail'/>
        <p>Kanały subskrypcji</p>
        <p style={{display: 'block'}}><input checked={promosChecked} onClick={()=>handleCheckbox('promos')} type="checkbox"/>Promocje</p>
        <p style={{display: 'block'}}><input checked={newsChecked} onClick={()=>handleCheckbox('news')} type="checkbox"/>Aktualności</p>
        <ReCAPTCHA
        sitekey={process.env.REACT_APP_SITE_KEY}
        ref={captchaRef}
        onChange={captchaChange}
         />
        <button className={`formSubmitBtn ${captcha===false || !yourEmail? 'disabled': ''}`} type='submit'></button>
      </form>
    </div>
  )
}

export default Newsletter