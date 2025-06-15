import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../../assets/assets'
import { Context } from '../../../context/Context'

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>DevGPT</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>
      <div className="main-container">

        {!showResult ?
          <>
            <div className="greet">
              <p><span>Hello,Developers...</span></p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful UI designs and Ideas for Development</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Need an new website ideas and inspirations i can help you for that.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Debugging with AI Get fully developed web applications</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improved the readabliy of the following Code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
          : <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading?
               <div className='loader'>
                <hr />
                <hr />
                <hr />
               </div>
               :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                }
              
            </div>
          </div>
        }


        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Search...' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            DevGPT may display inaccurate info, including about people,so double-check its responses.Your privacy and DevGPT
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
