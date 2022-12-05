import React from 'react'
import './styles/Error.css'
import Path from './Path.js'
import {useLocation} from 'react-router-dom'

const Error = () => {
  const {pathname} = useLocation()
    
  return (
    <div className='content'>
      <Path location={pathname}/>
      <h1 className="notFound">Strona nie została odnaleziona</h1>
    </div>
  )
}

export default Error