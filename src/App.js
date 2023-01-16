import React, {useState} from 'react';
import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Menu from './components/Menu.js'
import Aside from './components/Aside.js'
import Promos from './components/Promos.js'
import Locations from './components/Locations.js'
import LocationsTel from './components/LocationsTel.js'
import Error from './components/Error.js'
import News from './components/News.js'
import Contact from './components/Contact.js'
import Newsletter from './components/Newsletter.js'
import Recommend from './components/Recommend.js'
import Order from './components/Order.js'
import TrackOrder from './components/TrackOrder.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import RemindPass from './components/RemindPass.js'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'


function App() {
  const [yourEmail, setYourEmail] = useState('')
  const [friendEmail, setFriendEmail] = useState('')
  const [yourName, setYourName] = useState('')
  return (
    <Router>
    <div className="App">
      <Header/>
      <div className="mainbg">
       <div className={`main-container`}>
          <Aside/>
          <Routes>
           <Route exact path="/" element={<Main/>}/>
           <Route path="/menu" element={<Menu/>}></Route>
           <Route exact path="/promocje" element={<Promos/>}></Route>
           <Route exact path="/nasze-lokale" element={<Locations/>}></Route>
           <Route exact path="/nasze-lokale/zamowienia" element={<LocationsTel/>}></Route>
           <Route path="/news/*" element={<News/>}></Route>
           <Route path="/order" element={<Order/>}></Route>
           <Route path="/order/track" element={<TrackOrder/>}></Route>
           <Route path="/formularz-kontaktowy" element={<Contact/>}></Route>
           <Route path="/biuletyn" element={<Newsletter yourEmail={yourEmail} setYourEmail={setYourEmail}/>}></Route>
           <Route path="/polec-nas" element={<Recommend friendEmail={friendEmail} setFriendEmail={setFriendEmail} yourName={yourName} setYourName={setYourName}/>}></Route>
           <Route path="/login" element={<Login/>}></Route>       
           <Route path="/register" element={<Register/>}></Route>       
           <Route path="/remind-password" element={<RemindPass/>}></Route>       
           <Route path="*" element={<Error/>}></Route>       
          </Routes>
      </div>
     </div>
      <Footer yourEmail={yourEmail} setYourEmail={setYourEmail} friendEmail={friendEmail} setFriendEmail={setFriendEmail} yourName={yourName} setYourName={setYourName}/>
    </div>
    </Router>
  );
}

export default App;
