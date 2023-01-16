import React, {useState} from 'react'
import Path from './Path'
import './styles/RemindPass.css'

const RemindPass = () => {
  const [email, setEmail] = useState('')

  const handleSend = ()=>{
    alert(`This one won't send you any email due to max number of  templates on EmailJS free account.`)
  }

  return (
    <div className='content'>
      <Path urlsAmount={1} url1='Nie pamiętasz hasła ?'/>
      <div className="remindContainer">
        <div className="categoryHeader">
            <h1 className="categoryTitle">Nie pamiętasz hasła ?</h1>
        </div>
        <div className="remindCategoryContent">
          <div className="remindItem">
              <div className="remindElement">
                <h1>Podaj adres e-mail użyty przy rejestracji</h1>
              </div>
              <div className="remindElement">
                  <label className='remindInputLabel'>E-mail</label>
                  <input className='remindInput' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <button className="remindSendBtn" onClick={handleSend}></button>
              </div>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemindPass