import React from 'react'
import './styles/Menu.css'
import Aside from './Aside'
import Path from './Path'
import {BrowserRouter as Router, Routes, Route, useParams, useLocation, Link} from 'react-router-dom'
import {pizzas} from './menu_products'

const categories = ['Pizza','Sosy', 'Ekstra dodatki', 'Pasta','Sałatki','Inne propozycje','Napoje', 'Zestawy Promocyjne', 'Strefa Malucha i nie tylko']

const Menu = () => {
    // let menu = useParams()
    // console.log(menu)
    const {pathname} = useLocation()
  return (
    <div className='content'>
        <Path location={pathname}/>
        <div className="categories">
          {categories.map((e, index)=>{
            return(
              <div className="categoryContainer" key={e}>
                <Link to={`/menu/${e.toLowerCase().replace(/\s+/g, '-')}`} className='category'>{e}</Link>
                {index!==8?<div className="separate"></div>:''}  
              </div>
            )
          })}
        </div>
    </div>
    
  )
}

export default Menu