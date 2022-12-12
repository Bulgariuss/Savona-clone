import React, {useState} from 'react'
import './styles/Footer.css'
import {Link} from 'react-router-dom'

const Footer = ({yourEmail, setYourEmail, friendEmail, setFriendEmail, yourName, setYourName}) => {
  const [yourEmailFooter, setYourEmailFooter] = useState(yourEmail)
  const [friendEmailFooter, setFriendEmailFooter] = useState(friendEmail)
  const [yourNameFooter, setYourNameFooter] = useState(yourName)

  const handleNewsletterInput = (e)=>{
    setYourEmail(e.target.value)
    setYourEmailFooter(e.target.value)
  }
  const handleRecommendEmail = (e)=>{
    setFriendEmail(e.target.value)
    setFriendEmailFooter(e.target.value)
  }
  const handleRecommendName = (e)=>{
    setYourName(e.target.value)
    setYourNameFooter(e.target.value)
  }
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerTop">
          <div className="newsletter">
            <div className="footerDivHeader"></div>
            <form>
              <input type="text" value={yourEmailFooter} onChange={handleNewsletterInput} className="footerInput" placeholder='Twój adres e-mail' />
              <Link to='/biuletyn' onClick={()=> setYourEmailFooter('')}><button className="footerBtn"></button></Link>
            </form>
          </div>
          <div className="recommend">
            <div className="footerDivHeader"></div>
            <form>
              <input type="text" value={friendEmailFooter} onChange={handleRecommendEmail} className="footerInput" placeholder='Adres e-mail znajomego' />
              <input type="text" value={yourNameFooter} onChange={handleRecommendName} className="footerInput" placeholder='Twoje imię' />
              <Link to='/polec-nas' onClick={()=> {
                setFriendEmailFooter('')
                setYourNameFooter('')
              }}><button className="footerBtn"></button></Link>
            </form>
          </div>
          <div className="important">
            <div className="footerDivHeader"></div>
            <Link to="/formularz-kontaktowy" className="importantElement" >Kontakt</Link>
          </div>
        </div>
        <div className="footerBot">
          Wszelkie prawa zastrzeżone © 2008-2020 dla Savona
          <br />
          <a href="http://www.epro.com.pl/" target="_blank" className="footerA">Strony internetowe</a>
          <a href="http://www.epro.com.pl/" target="_blank" className="footerLogo footerA"></a>
        </div>
      </div>
    </div>
  )
}

export default Footer