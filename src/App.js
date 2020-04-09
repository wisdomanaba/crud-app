import React from 'react'
import { Provider } from "react-redux"
import store from "./redux/createStore"
import './App.css'
import InputSection from "./components/InputSection"
import NotesSection from "./components/NotesSection"

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>My Notes</h1>
        <InputSection />
        <div className="line"></div>
        <NotesSection />
      </div>
    </Provider>
  )
}

export default App;
