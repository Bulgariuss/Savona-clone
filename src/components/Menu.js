import React, {useState} from 'react'
import './styles/Menu.css'
import Path from './Path'
import {BrowserRouter as Router, Routes, Route, useParams, useLocation, Link} from 'react-router-dom'
import {pizzas, sauces, extra, pasta, salads, others, drinks, promos, forKids} from './data/menu_products.js'


const categories = ['Pizza','Sosy', 'Ekstra dodatki', 'Pasta','Salatki','Inne propozycje','Napoje', 'Zestawy Promocyjne', 'Strefa Malucha i nie tylko']

const Menu = () => {
    // let menu = useParams()
    // console.log(menu)
    const path = useLocation()
    console.log(path)

    const renderClosedCategory = (title, url)=>{
      return(
      <div className="menuCategoryContainer">
        <Link Link to={url} >
          <div  className="menuCategoryHeader">
            <h1 className="menuCategoryTitle">{title}</h1>
          </div>
        </Link>
      </div> )
    }

    const renderActiveCategory = (title, category=[])=>{
      return(
      <div className="menuCategoryContainer">
          <div  className="menuCategoryHeader">
            <h1 className="menuCategoryTitle">{title}</h1>
            {title==='Pizza' || title==='Ekstra dodatki' ? 
              <div className='sizes'>
                <div className='size'><p>24cm</p></div>
                <div className='size'><p>30cm</p></div>
                <div className='size'><p>50cm</p></div>
              </div>
           : ''}
            {title==='Napoje' ?
              <div className='sizes'>
                <div className='size'><p>0.5l</p></div>
                <div className='size'><p>litr</p></div>
              </div>
           : ''}
          </div>
          <div className='menuCategoryContent'>
            {category.map((e)=>{
              return(
                <div className={`menuItem ${e.name==='ZESTAW DLA KAŻDEGO COŚ DOBREGO' && e.ingredients.length===3?'threeIngredients': ''}`}>
                  <img src={e.img ? e.img : 'http://savonapizza.pl/public/img/imageNotFoundMini.gif'} alt="" className="menuItemImg" />
                  <div className={`menuItemInfoBox ${e.price.length===1?'onePrice':''} ${e.length===2?'twoPrices':''}`}>
                    <h1 className={`menuItemName ${!e.ingredients ? 'noIngredients' : ''}`}>{e.name}</h1>
                    {e.name!=='ZESTAW DLA KAŻDEGO COŚ DOBREGO'?<p className="menuItemIngredients">{e.ingredients?e.ingredients.join(', '):''}</p> : 
                    e.ingredients.map((e)=>{
                      return <p className="menuItemIngredients">{e}</p>
                    })}
                  </div>
                  <div className={`menuItemSizes ${e.name==='ZESTAW DLA KAŻDEGO COŚ DOBREGO' && e.ingredients.length===3?'bigger': ''}`}>
                  {e.price.map((e)=>{
                    return(
                    <div className="menuItemSize">
                      <h1 className="menuItemPrice">{typeof e === 'number'? e.toFixed(2) : '-'}</h1>
                      {typeof e === 'number'?<button className="menuItemAdd"></button>: ''}
                    </div>
                    )
                  })}
                  </div>
                </div>
              )
            })}
          </div>
      </div> )
    }


  return (
    <div className='content'>
        <Path urlsAmount={1} url1='Menu'/>
        <div className="categories">
          {categories.map((e, index)=>{
            return(
              <div className="categoryContainer" key={e}>
                <Link to={`/menu#${e.toLowerCase().replace(/\s+/g, '-')}`} className='category'>{e}</Link>
                {index!==categories.length - 1?<div className="separate"></div>:''}  
              </div>
            )
          })}
        </div>
        {path.hash==='#pizza' || !path.hash ? renderActiveCategory('Pizza', pizzas) : renderClosedCategory('Pizza', '/menu#pizza')}
        {path.hash==='#sosy' ? renderActiveCategory('Sosy', sauces) : renderClosedCategory("Sosy", '#sosy')}
        {path.hash==='#ekstra-dodatki' ? renderActiveCategory('Ekstra dodatki', extra) : renderClosedCategory('Ekstra dodatki','/menu#ekstra-dodatki')}
        {path.hash==='#pasta' ? renderActiveCategory('Pasta', pasta) : renderClosedCategory('Pasta','/menu#pasta')}
        {path.hash==='#salatki' ? renderActiveCategory('Sałatki', salads) : renderClosedCategory('Sałatki','/menu#salatki')}
        {path.hash==='#inne-propozycje' ? renderActiveCategory('Inne propozycje', others) : renderClosedCategory('Inne propozycje','/menu#inne-propozycje')}
        {path.hash==='#napoje' ? renderActiveCategory('Napoje', drinks) : renderClosedCategory('Napoje','/menu#napoje')}
        {path.hash==='#zestawy-promocyjne' ? renderActiveCategory('Zestawy Promocyjne', promos) : renderClosedCategory('Zestawy Promocyjne','/menu#zestawy-promocyjne')}
        {path.hash==='#strefa-malucha-i-nie-tylko' ? renderActiveCategory('Strefa Malucha i nie tylko', forKids) : renderClosedCategory('Strefa Malucha i nie tylko','/menu#strefa-malucha-i-nie-tylko')}
    </div>
    
  )
}

export default Menu