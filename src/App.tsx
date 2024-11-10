import { useEffect, useState } from 'react'
import './App.css'
import PocketNoteTitleList from './Components/PocketNoteTitleList/PocketNoteTitleList'
import PocketNotesDescription from './Components/PocketNotesDescription/PocketNotesDescription'

function App() {
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    const notesList = localStorage.getItem(('notes-list'))
    if(notesList){
      setNotesList(JSON.parse(notesList) || []);
    }
  },[])

  return (
    <div className='app-container' >
        <PocketNoteTitleList { ...{notesList,setNotesList}} />
        <PocketNotesDescription { ...{notesList,setNotesList}} />
    </div>
  )
}


export default App
