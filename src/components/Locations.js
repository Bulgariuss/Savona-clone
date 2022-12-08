import React, {useState} from 'react'
import Path from './Path'
import {BrowserRouter as Router, Routes, Route, useLocation, Link} from 'react-router-dom'
import dot from '../img/dot.gif'
import './styles/Locations.css'

const Locations = () => {
    const {pathname} = useLocation()
    const [activePage, setActivePage] = useState(1);

    const renderPagesSwapper = (pages)=>{
        return(
            <div className="pagesContainer">
                <div  className={`prev ${activePage===1 ? 'disabled' : ''}`} onClick={()=>handlePageSwap('prev')}></div>
                <div className="pages">
                    <div onClick={()=>handlePageSwap('1')} href="#" className={`page ${activePage===1 ? 'selected' : ''}`}>1</div>
                    {pages===2?<div onClick={()=>handlePageSwap('2')} href="#" className={`page ${activePage===2 ? 'selected' : ''}`}>2</div>: ''}
                </div>
                <div onClick={()=>handlePageSwap('next')} className={`next ${activePage===2 || pages===1 ? 'disabled' : ''}`}></div>
            </div>
        )
    }

    const handlePageSwap = (type)=>{
        if(type==='prev'){
            setActivePage(activePage-1)
        }
        if(type==='1'){
            setActivePage(1)
        }
        if(type==='2'){
            setActivePage(2)
        }
        if(type==='next'){
            setActivePage(activePage+1)
        }
    }

  return (
    <div className="content">
        <Path urlsAmount={1} url1='Nasze-lokale'/>
        <div className="infoBanner">
            <div className="infoBannerTop">
                <img src="http://savonapizza.pl/public/data/resource/upload/00001/647/centrala.png" alt="" />
            </div>
            <div className="infoBannerBot">
                <img src="http://savonapizza.pl/public/data/resource/upload/00002/1470/bez-nazwy-2.png" alt="" />
            </div>   
        </div>
        {renderPagesSwapper(1)}
        <div className="singleItem local">
            <Link to='zamowienia' className="localesTitle">zamówienia telefoniczne</Link>
            <p className="itemDate">27-07-2022</p>
            <p className="itemText">Wybierz Savonę w Twojej okolicy!</p>
        </div>
        {renderPagesSwapper(1)}
    </div>
  )
}

export default Locations