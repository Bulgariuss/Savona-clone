import React from 'react'
import './styles/Content.css'
import header from '../img/headerfb.png'
import promobanner from '../img/promobanner.jpg'
import locationbanner from '../img/locationbanner.jpg'
import bbqbanner from '../img/bbqbanner.png'
import logoSmall from '../img/savona-logo-small.png'
import { BrowserRouter as Route,Routes, Link } from 'react-router-dom'
import {allNews} from './data/news'

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
                <div className='fullItem' key={item.id}>
                  <span className="newsDate">{item.date}</span> 
                  <Link to={`/news/${item.id}`} className='newsItem'>{item.text}</Link>
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