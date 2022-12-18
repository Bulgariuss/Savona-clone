import React, {useState} from 'react'
import Path from './Path'
import './styles/TrackOrder.css'

const TrackOrder = () => {
    const [telNum, setTelNum] = useState('')
  return (
    <div className="content">
        <Path urlsAmount={2} url1='Zamówienie' url2='Śledzenie zamówień' path='/order'/>
        <div className="trackOrderContainer">
            <div className="trackOrderHeader">
                <h1 className="trackOrderTitle">Śledź zamówienie</h1>
            </div>
            <div className="trackOrderContent">
                <p className="trackOrderTel">Numer telefonu</p>
                <form>
                    <input type="text" value={telNum} onChange={(e)=>setTelNum(e.target.value)} className="formInput xd" placeholder='Podaj numer telefonu'/>
                    <button className="trackOrderBtn"></button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default TrackOrder