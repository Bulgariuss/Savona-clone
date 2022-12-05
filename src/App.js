import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Menu from './components/Menu.js'
import Aside from './components/Aside.js'
import Promos from './components/Promos.js'
import Locations from './components/Locations.js'
import Error from './components/Error.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="mainbg">
       <div className='main-container'>
          <Aside/>
          <Routes>
           <Route exact path="/" element={<Main/>}/>
           <Route exact path="/menu" element={<Menu/>}></Route>
           <Route exact path="/promocje" element={<Promos/>}></Route>
           <Route exact path="/nasze-lokale" element={<Locations/>}></Route>
           <Route path="*" element={<Error/>}></Route>
          </Routes>
      </div>
     </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
