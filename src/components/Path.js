import React from 'react'
import Aside from './Aside'
import './styles/Path.css'
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import dot from '../img/dot.gif'

const Path = (props) => {
  return (
    <div className='path'>
        Jesteś na: <Link to='/' className='pathToMain'> Strona główna</Link> <img src={dot} alt="" /> <span className='pathname'>{props.location.slice(1).charAt(0).toUpperCase() + props.location.slice(2)}</span> 
    </div>
  )
}

export default Path