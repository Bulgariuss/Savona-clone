import React from 'react'
import './styles/Content.css'
import header from '../img/headerfb.png'
import promobanner from '../img/promobanner.jpg'
import locationbanner from '../img/locationbanner.jpg'
import bbqbanner from '../img/bbqbanner.png'
import logoSmall from '../img/savona-logo-small.png'
import { BrowserRouter as Route,Routes, Link } from 'react-router-dom'


const allNews = [{
  id: 1,
  date: '16-09-2013',
  text: 'Franczyza - czas na Twoją SAVONĘ !'
}, {
  id: 2,
  date: '17-04-2014',
  text: 'FanPage'
}, {
  id: 3,
  date: '19-10-2014',
  text: '20 Urodziny Savony'
}, {
  id: 4,
  date: '22-07-2020',
  text: 'Uwaga dodatkowa forma płatności'
}]


const Content = () => {
 
  return (
    <div className="content">
        <a href="https://www.facebook.com/savona.pizzaclub" target="_blank">
          <img src={header} alt=""  className='headerfb'/>
        </a>
        <div className="info">
          <div className="leftColumn">
            <Link to='/promocje'><img className="leftItem" src={promobanner} alt="" /></Link>
            <Link to='/nasze-lokale'><img className="leftItem" src={locationbanner} alt="" /></Link>
            <Link to='/bbq'><img className="leftItem" src={bbqbanner} alt="" /></Link>
          </div>
          <div className="rightColumn">
            <div className="news">
              {allNews.slice(0).reverse().map((item) => (
                <div className='fullItem'>
                  <span className="newsDate">{item.date}</span> 
                  <a href='#' className='newsItem'>{item.text}</a>
                </div>
              ) )}
            </div>
            <div className="fbBanner">
              <div className="fbBannerBlur"></div>
              <a href='https://www.facebook.com/savona.pizzaclub/' alt="" className="fbLogo" target="_blank"/>
              <a href='https://www.facebook.com/savona.pizzaclub/' className="bannerName" target="_blank">Savona PizzaClub</a>
              <h2 className="bannerFollows">5600 obserwujący</h2>
              <a href='https://www.facebook.com/savona.pizzaclub/' className="follow" target="_blank"></a>
              <a href='https://www.facebook.com/savona.pizzaclub/' className="share" target="_blank"></a>
            </div>
          </div>
        </div>
        <div className="space">
          <img src={logoSmall} alt="" />
        </div>
    </div>
  )
}

export default Content