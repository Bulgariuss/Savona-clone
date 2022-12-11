import React, {useState, useRef} from 'react'
import './styles/Contact.css'
import Path from './Path'
import { Link } from 'react-router-dom'
import { send } from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha"

const Contact = () => {
  const [detailsCity, setDetailsCity] = useState('')
  const [detailsAddress, setDetailsAddress] = useState('')
  const [detailsTel, setDetailsTel] = useState('')
  const [formInfo, setFormInfo] = useState({
    subject: '',
    email: '',
    message: '',
    captcha: false
  })
  const captchaRef = useRef(null)
  const inputFocus = useRef(null)

  const renderPizzeriaDetails = ()=>{
    return (
    <div className="pizzeriaDetails">
      <p className="pizzeriaDetailsText">{detailsCity}</p>
      <p className="pizzeriaDetailsText">{detailsAddress}</p>
      <p className="pizzeriaDetailsText">{detailsTel}</p>
    </div>)

  }
  
  const handleSelect = (e)=>{
    if(!e.target.value){
      setDetailsCity('')
      setDetailsAddress('')
      setDetailsTel('')
    }
    if(e.target.value==='pizzeria_1') {
      setDetailsCity('Białystok')
      setDetailsAddress('ul. Atłasowa 2')
      setDetailsTel('Zamów PIZZĘ 577 377 006')
    }
    if(e.target.value==='pizzeria_2') {
      setDetailsCity('Bielsk Podlaski')
      setDetailsAddress('ul. Poniatowskiego 3')
      setDetailsTel('Zamów PIZZĘ 785 555 455')
    }
    if(e.target.value==='pizzeria_3') {
      setDetailsCity('Choroszcz')
      setDetailsAddress('ul. Sienkiewicza 27C')
      setDetailsTel('Zamów PIZZĘ 576 067 496')
    }
    if(e.target.value==='pizzeria_4') {
      setDetailsCity('Białystok')
      setDetailsAddress('ul. Ciesielska 2')
      setDetailsTel('Zamów PIZZĘ 733 850 009')
    }
    if(e.target.value==='pizzeria_5') {
      setDetailsCity('Ełk')
      setDetailsAddress('ul. Armii Krajowej 36')
      setDetailsTel('880 372 012')
    }
    if(e.target.value==='pizzeria_6') {
      setDetailsCity('Grajewo')
      setDetailsAddress('ul. Ełcka 24')
      setDetailsTel('Zamów PIZZĘ 86 272 00 00')
    }
    if(e.target.value==='pizzeria_7') {
      setDetailsCity('Białystok')
      setDetailsAddress('ul. Legionowa 9/1')
      setDetailsTel('Zamów PIZZĘ 782 7000 55')
    }
    if(e.target.value==='pizzeria_8') {
      setDetailsCity('Białystok')
      setDetailsAddress('ul. Pogodna 11F')
      setDetailsTel('Zamów PIZZĘ 785 555 455')
    }
    if(e.target.value==='pizzeria_9') {
      setDetailsCity('Białystok')
      setDetailsAddress('ul. Rynek Kościuszki 8/1')
      setDetailsTel('Zamów PIZZĘ 785 555 455')
    }
    if(e.target.value==='pizzeria_10') {
      setDetailsCity('Białystok')
      setDetailsAddress('ul. Wysockiego 69')
      setDetailsTel('Zamów PIZZĘ 724 555 111')
    }
    inputFocus.current.blur()
  }
  const handleFormSubmit = (e)=>{
    e.preventDefault() 
    if(formInfo.subject && formInfo.email && formInfo.message && formInfo.captcha){
    send(
      'service_f4k8s8a',
      'template_xpu83qn',
      formInfo,
      'mXpJy34MkCrzP_75U'
    ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormInfo({
          subject: '',
          email: '',
          message: '',
          captcha: false
        })
      }).catch((err) => {
        console.log('FAILED...', err);
      })};
      captchaRef.current.reset()
      setFormInfo({...formInfo, 'captcha': false})
  }
  const handleInputChange = (e)=>{
    setFormInfo({...formInfo, [e.target.name]: e.target.value})
  }
  
  const captchaChange = ()=>{
    setFormInfo({...formInfo, 'captcha': true})
  }

  return (
    <div className="content">
        <Path urlsAmount={1} url1='Kontakt'/>
        <div className="contactContainer">
          <h1 className="contactTitle">Kontakt</h1>
          <p className="contactText margined">Za pomocą poniższego formularza prześlij do nas swoje zapytanie. Na e-mail odpowiemy najszybciej jak to możliwe. Formularz <span style={{textDecoration: 'underline'}}>nie służy</span> do składania zamówień online.</p>
          <p className="contactText"><strong>Online zamówisz</strong> <Link className='contactLink' to='/menu'>tutaj</Link>.</p>
          <p className="contactText margined"><strong><i>Kliknij przycisk wybierz swoją pizzerię, zamawiaj w bliskiej SAVONIE. Teraz każdy lokal ma swój numer telefonu - dzwoń do najbliższej SAVONY!</i></strong></p>
        </div>
        <div className="formContainer">
          <form className='contactForm' onSubmit={handleFormSubmit}>
            <h1 className="contactTitle">Formularz kontaktowy</h1>
            <input value={formInfo.subject} name='subject' className='formInput' type="text" placeholder='Temat' onChange={handleInputChange}/>
            <input value={formInfo.email} name='email' className='formInput' type="text" placeholder='E-mail' onChange={handleInputChange}/>
            <textarea value={formInfo.message} name='message' className='formInput textarea' type="text" placeholder='Treść wiadomości' onChange={handleInputChange}/>
            {/* <input value={formInfo.captcha} name='captcha' className='formInput' type="text" placeholder='Przepisz kod z obrazka' onChange={handleInputChange}/> */}
            <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={captchaRef}
            onChange={captchaChange}
            />
            <button className='formSubmitBtn' type='submit'></button>
          </form>
          <div className="choosePizzeria">
            <h1 className="contactTitle">Wybierz swoją pizzerię</h1>
            <select ref={inputFocus} onChange={handleSelect} id="pizzerias_select" style={{width: '280px'}}>
              <option ></option>
              <option value="pizzeria_1">Atłasowa</option>
              <option value="pizzeria_2">Bielsk Podlaski</option>
              <option value="pizzeria_3">Choroszcz</option>
              <option value="pizzeria_4">Ciesielska</option>
              <option value="pizzeria_5">Ełk</option>
              <option value="pizzeria_6">Grajewo</option>
              <option value="pizzeria_7">Legionowa</option>
              <option value="pizzeria_8">Pogodna</option>
              <option value="pizzeria_9">Rynek Kościuszki</option>
              <option value="pizzeria_10">Wysockiego</option>
            </select>
            {renderPizzeriaDetails()}
          </div>
        </div>
        <br />
        <div className="contactContainer">
          <h1 className="contactTitle">Dane kontaktowe</h1>
          <p className="contactText">SAVONA Arkadiusz Cichocki</p>
          <p className="contactText">ul. Rynek Kościuszki 8 lok 1</p>
          <p className="contactText">15-426 Białystok</p>
          <p className="contactText">NIP 542-113-98-67</p>
        </div>
    </div>
  )
}

export default Contact