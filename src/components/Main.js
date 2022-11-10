import React from 'react'
import './Main.css'
import Aside from './Aside'
import Content from './Content'

const Main = () => {
  return (
    <div className="mainbg">
      <div className='main-container'>
          <Aside/>
          <Content/>
      </div>
    </div>
  )
}

export default Main