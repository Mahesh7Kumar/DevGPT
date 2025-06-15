import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'
import { Context } from '../../context/Context'
const Sidebar = () => {

  // function to handel the sidebar
  const [extended, setExtended] = useState(false)
  const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context)

  const loadprompt= async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }



  return (
    <div className='sidebar'>
      <div className="top">
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="Menu" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="New Chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ?
          <div className="recent">
            <p className="recent-title">Recent Chats</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={()=>loadprompt()} className="recent-entry">
              <img src={assets.message_icon} alt="Message-icon" />
              <p>{item.slice(0,18)}...</p>
            </div>
              )
            })}
            
          </div> : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history" />
          {extended ? <p>History</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
