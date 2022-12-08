import React from 'react'
import './styles/Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerTop">
          <div className="newsletter">
            <div className="footerDivHeader"></div>
            <form>
              <input type="text" className="footerInput" placeholder='Twój adres e-mail' />
              <button className="footerBtn"></button>
            </form>
          </div>
          <div className="recommend">
            <div className="footerDivHeader"></div>
            <form>
              <input type="text" className="footerInput" placeholder='Adres e-mail znajomego' />
              <input type="text" className="footerInput" placeholder='Twoje imię' />
              <button className="footerBtn"></button>
            </form>
          </div>
          <div className="important">
            <div className="footerDivHeader"></div>
            <Link to="/formularz-kontaktowy" className="importantElement">Kontakt</Link>
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