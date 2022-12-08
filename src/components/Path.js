import React from 'react'
import Aside from './Aside'
import './styles/Path.css'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import dot from '../img/dot.gif'

const Path = ({urlsAmount, url1, url2='', path=''}) => {

  if(urlsAmount===1)return (
    <div className='path'>
        Jesteś na: <Link to='/' className='pathToMain'> Strona główna</Link> <img src={dot} alt="" /> <span className='pathname'>{url1}</span> 
    </div>
  )
  if(urlsAmount===2)return (
    <div className='path'>
        Jesteś na: <Link to='/' className='pathToMain'> Strona główna</Link> <img src={dot} alt="" /> <Link to={path} className='pathToMain'>{url1}</Link> <img src={dot} alt="" /> <span className='pathname'>{url2}</span>
    </div>
  )
}

export default Path