import { useState } from 'react'
import './App.css'
import PocketNoteTitleList from './Components/PocketNoteTitleList/PocketNoteTitleList'
import PocketNotesDescription from './Components/PocketNotesDescription/PocketNotesDescription'

function App() {

  return (
    <div className='app-container' >
        <PocketNoteTitleList />
        <PocketNotesDescription />
    </div>
  )
}


export default App
