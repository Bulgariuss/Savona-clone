import React, {useState} from 'react'
import Path from './Path'
import './styles/Promos.css'
import {BrowserRouter as Router, Routes, Route, useLocation, Link} from 'react-router-dom'
import dot from '../img/dot.gif'
const allPromos = [{
    id: 1,
    title: 'Zestaw CZTEROPAK',
    date: '27-07-2022',
    text: 'ZESTAW „CZTEROPAK SAŁATKOWY” cztery dowolne sałatki koszt  zestawu (nie wliczając opakowań) wynosi 105.00 złpromocja dostępna na telefon oraz przy zamówieniu on-li...'
}, {
    id: 2,
    title: 'Zestaw IMPREZOWY',
    date: '27-07-2022',
    text: 'ZESTAW IMPREZOWY dwie dowolne maxi pizze + 1 x coca-cola 0,85l+ 2 dowolne sosy koszt zestawu 123.00 zł+ opakowanie promocja dostępna na telefon i onlinena wynos i na dowóz'
}, {
    id: 3,
    title: 'CZTEROPAK',
    date: '27-07-2022',
    text: 'ZESTAW PROMOCYJNY „CZTEROPAK” cztery duże (30cm) dowolne  pizzekoszt zestawu (nie wliczając opakowań) wynosi 115.00 złpromocja dostępna na telefon oraz przy zamówi...'
}, {
    id: 4,
    title: 'ZESTAW DLA KAŻDEGO COŚ',
    date: '27-07-2022',
    text: 'ZESTAW PROMOCYJNY „DLA KAŻDEGO COŚ DOBREGO” dowolna duża pizza (30 cm) dowolna sałatka  dowolna pasta koszt  zestawu (nie wliczając opakowań) wynosi 8...'
}, {
    id: 5,
    title: 'FIT ZESTAW',
    date: '27-07-2022',
    text: 'ZESTAW PROMOCYJNY „FIT ZESTAW” dwie dowolne sałatki dwie wody 0,5 L koszt zestawu (nie wliczając opakowań) wynosi 60.00zł promocja dostępna na telefon ...'
}]



const Promos = () => {
    const {pathname} = useLocation()
    const [activePage, setActivePage] = useState(1);
    
    const renderPromos = ()=>{
        if(activePage===1){ 
            return (
                allPromos.map((e, index)=>{
                if(index > 3) return;
                return(<div className="singleItem" key={e.id}>
                    <h1 className="itemTitle">{e.title}</h1>
                    <p className="itemDate">{e.date}</p>
                    <p className="itemText">{e.text}</p>
                </div>)
            }))}
        if(activePage===2){ 
            return (
                allPromos.map((e, index)=>{
                if(index < 4) return;
                return(<div className="singleItem" key={e.id}>
                    <h1 className="itemTitle">{e.title}</h1>
                    <p className="itemDate">{e.date}</p>
                    <p className="itemText">{e.text}</p>
                </div>)
            }))}
    }

    const renderPagesSwapper = ()=>{
        return(
            <div className="pagesContainer">
                <div  className={`prev ${activePage===1 ? 'disabled' : ''}`} onClick={()=>handlePageSwap('prev')}></div>
                <div className="pages">
                    <div onClick={()=>handlePageSwap('1')} href="#" className={`page ${activePage===1 ? 'selected' : ''}`}>1</div>
                    <div onClick={()=>handlePageSwap('2')} href="#" className={`page ${activePage===2 ? 'selected' : ''}`}>2</div>
                </div>
                <div onClick={()=>handlePageSwap('next')} className={`next ${activePage===2 ? 'disabled' : ''}`}></div>
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
    <div className='content'>
        <Path urlsAmount={1} url1='Promocje'/>
        <div className="infoBanner">
            <div className="infoBannerTop">
                <img src="http://savonapizza.pl/public/data/resource/upload/00001/647/centrala.png" alt="" />
            </div>
            <div className="infoBannerBot">
                <img src="http://savonapizza.pl/public/data/resource/upload/00002/1470/bez-nazwy-2.png" alt="" />
            </div>   
        </div>
        <div className="promos">
            {renderPagesSwapper()}
            <div className="promosList">
                {renderPromos()}
            </div>
            {renderPagesSwapper()}
        </div>
    </div>
  )
}

export default Promos