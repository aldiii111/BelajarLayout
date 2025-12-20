import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="container-main">
          <div className="header-msg">
            <div className="profile">
              <img src="/me.jpg" alt="profil" className="profil-img"/>
              <div className="name">
                <p className="p-name1">Aldi Kurniawan</p>
                <p className="p-name2">aldiii.mutu@gmail.com</p>
              </div>
            </div>
            <div className="logos-twitt">
              <img src="/twitter.png" alt="twiter logo" className="twitter-img"/>
            </div>
          </div>
          <p className="text-msg">
            Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for best'?<a href="#">#programming</a><a href="#">#coding</a><a href="#">#debugging</a>
          </p>
          <div className="bottom-msg">
            <div className="like">
              <div className="like-msg">
                <button className="heart-button" onClick={() => setCount(count + 1)}>
                  <img src="/heart.png" alt="like" />
                </button>
                <p className="the-like">{count}</p>
              </div>
            </div>
            <p className="date-text">3:40 PM - Des 19, 2025</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
