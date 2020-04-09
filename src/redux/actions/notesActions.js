import actionTypes from "../actionTypes"

export default {
      addNote: (note) => ({
            type: actionTypes.ADD_NOTE,
            note
      }),
      updateNote: (index, note) => ({
            type: actionTypes.UPDATE_NOTE,
            index,
            note
      }),
      deleteNote: (index) => ({
            type: actionTypes.REMOVE_NOTE,
            index
      })
}