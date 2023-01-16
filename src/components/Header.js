import React from 'react'
import './styles/Header.css'
import logo from '../img/logo.png'
import slogan from '../img/slogan.png'
import btnOrder from '../img/btnOrder.png'
import btnTrackOrder from '../img/btnTrackOrder.png'
import btnLogin from '../img/btnLogin.png'
import glow from '../img/glow.png'
import btnorder from '../img/btn_order.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-main'>
        <Link to="/"><img src={logo} alt="" className="header-logo"/></Link>
        <div className="header-right"> 
            <img src={slogan} alt="" className='slogan'/>
            <Link to='/menu'><img src={btnOrder} alt="" className='btnOrder'/></Link>
            <Link to='/order/track'><img src={btnTrackOrder} alt="" className='btnTrackOrder'/></Link>
            <Link to='/login'><img src={btnLogin} alt="" className='btnLogin'/></Link>
        </div>
        <img src={glow} alt="" className="glow" />

        <div className="order">
            <Link to='/order'><img src={btnorder} alt="" className="btnorder" /></Link>
            <div className="amountdiv">
                <span className="amount">0</span> szt.
            </div>
            <div className="pricediv">
                <span className="price">0.00</span> zł
            </div>
            
        </div>
    </header>
    
  )
}

export default Header