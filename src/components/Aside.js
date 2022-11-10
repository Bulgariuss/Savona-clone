import React from 'react'
import menu from '../img/menu.png'
import "./Aside.css"

const Aside = () => {
  return (
    <div className='main-aside'>
        <img src={menu} alt="" className='menubtn'/>
    </div>
  )
}

export default Aside