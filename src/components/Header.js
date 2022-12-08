import React from 'react'
import './styles/Header.css'
import logo from '../img/logo.png'
import slogan from '../img/slogan.png'
import btn1 from '../img/btn-1.png'
import btn2 from '../img/btn-2.png'
import btn3 from '../img/btn-3.png'
import glow from '../img/glow.png'
import btnorder from '../img/btn_order.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-main'>
        <Link to="/"><img src={logo} alt="" className="header-logo"/></Link>
        <div className="header-right"> 
            <img src={slogan} alt="" className='slogan'/>
            <Link to='/menu'><img src={btn1} alt="" className='btn1'/></Link>
            <img src={btn2} alt="" className='btn2'/>
            <img src={btn3} alt="" className='btn3'/>
        </div>
        <img src={glow} alt="" className="glow" />

        <div className="order">
            <img src={btnorder} alt="" className="btnorder" />
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