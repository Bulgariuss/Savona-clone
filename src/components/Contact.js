import React from 'react'
import './styles/Contact.css'
import Path from './Path'

const Contact = () => {
  return (
    <div className="content">
        <Path urlsAmount={1} url1='Kontakt'/>
        <div className="contactContainer"></div>
        <div className="formContainer"></div>
        <div className="contactContainer"></div>
    </div>
  )
}

export default Contact