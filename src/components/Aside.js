import React from 'react'
import menu from '../img/menu.png'
import "./styles/Aside.css"
import {Link} from 'react-router-dom'

const Aside = () => {
  return (
    <div className='main-aside'>
      <Link to="/menu"><img src={menu} alt="" className='menubtn'/></Link> 
    </div>
  )
}

export default Aside