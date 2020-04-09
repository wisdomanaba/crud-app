import React from 'react'
import "./noteItem.style.css"

const NoteItem = ({ title, content, onItemClicked }) => {
      return (
            <div 
                  className="NoteItem_container" 
                  role="button" 
                  onClick={onItemClicked}
            >
                  <h2>{ title }</h2>
                  <p>{ content }</p>
            </div>
      )
}

export default NoteItem
