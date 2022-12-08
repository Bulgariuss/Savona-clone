import React from 'react'
import dot from '../img/dot.gif'
import Path from './Path'
import {BrowserRouter as Router, Routes, Route, useLocation, Link} from 'react-router-dom'

const LocationsTel = () => {
  return (
    <div className='content'>
        <Path urlsAmount={2} url1={'Nasze lokale'} url2={'zamówienia telefoniczne'} path={'/nasze-lokale'}/>
        <div className="singlePromo inside">
            <h1 to='zamowienia' className="localesTitle inside">zamówienia telefoniczne</h1>
            <p className="promoDate">27-07-2022</p>
            <p className="promoText bigger">Wybierz Savonę w Twojej okolicy!</p>
        </div>
            <div className="infoBannerTop">
                <img src="http://savonapizza.pl/public/data/resource/upload/00001/647/centrala.png" alt="" />
            </div>
    </div>
  )
}

export default LocationsTel