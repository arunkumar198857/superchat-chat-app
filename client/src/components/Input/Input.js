import React from 'react'
import './Input.css'

 const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form action="" className="form">
            <input 
            type="text"
            className="input"
            placeholder="type a message..."
            value = {message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button 
            className="send-button"
            onClick={(event) => sendMessage(event)}
            >
            Send
            </button>
        </form>
    )

}

export default Input;