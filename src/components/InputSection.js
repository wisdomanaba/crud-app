import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notesActions from '../redux/actions/notesActions'
import inputActions from '../redux/actions/inputActions'
import "./inputSection.style.css"

const InputSection = () => {

      const id = useSelector( state => state.inputs.id)
      const title = useSelector( state => state.inputs.title)
      const content = useSelector( state => state.inputs.content)
      const dispatch = useDispatch()

      const addNote = () => {
            if(title && content) {
                  dispatch(notesActions.addNote({
                        title,
                        content
                  }))
                  dispatch(inputActions.resetInputs())
            }
      }

      const updateNote = () => {
            if(title && content){
                  dispatch(notesActions.updateNote(id, {
                        title, content
                  }))
                  dispatch(inputActions.resetInputs())
            }
      }

      const deleteNote = () => {
            dispatch(notesActions.deleteNote(id))
            dispatch(inputActions.resetInputs())
      }

      return (
            <div className="InputSection_container">
                  <input 
                        type="text" placeholder="Note title" 
                        value={title} 
                        onChange={ e => 
                              dispatch(inputActions.setInputTitle(e.target.value))
                        }
                  />
                  <textarea
                        placeholder="Note content" 
                        value={content} 
                        onChange={ e => 
                              dispatch(inputActions.setInputContent(e.target.value))
                        }
                  ></textarea>
                  <div
                        className="InputSection_container_btnWrapper"
                  >
                        <button
                              onClick={id === -1 ? addNote : updateNote}
                        >
                              {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
                        </button>
                        {id !== -1 && 
                              <button
                                    onClick={deleteNote}
                                    style={{ marginLeft: "1em", backgroundColor: "#ec4444" }}
                              >
                                    DELETE NOTE
                              </button>
                        }
                  </div>
            </div>
      )
}

export default InputSection
