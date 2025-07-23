import './chatBox.css'
import Stories from '../../components/stories/Stories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import CurrentUserData from '../../FackApis/CurrentUserData';
import { useState } from 'react';

function ChatBox() {
  const [messages, setMessages] = useState([]);  
  const [input, setInput] = useState("");        

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;  

    setMessages((prev) => [...prev, input]);
    setInput(""); 
  };

  return (
    <>
      <Stories />
      <div className="chat-box">
        <div className="chat-box-top">
          <img src={CurrentUserData[0].ProfieImage} alt=''/>
          <div className="user-name">
            <h3>{CurrentUserData[0].name}</h3>
            <h5>{CurrentUserData[0].username}</h5>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div className="chat-message" key={index}>
              {msg}
            </div>
          ))}
        </div>

        <div className="chat-box-bottom">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Write Something'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' className='btn btn-primary'>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
            <label className='btn btn-primary' htmlFor='CFile'>
              <FontAwesomeIcon icon={faFileAlt} />
              <input type='file' id='CFile'/>
            </label>
          </form>
        </div>
      </div>
    </>
  )
}

export default ChatBox;