import { useState } from 'react'
import Modal from '../Common/Modal/Modal'
import NoteTitle from './NoteTitle'
import './PocketNoteTitleList.css'

const PocketNoteTitleList = ({ notesList,setNotesList }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClickOnPlusIcon = () => {
    setOpenModal(true)
  }

  return (
    <div className='pocketnotestitlelist-container' >
      <h1 className='title' >Pocket Notes</h1>
      <div className='notes-title-list' >
        {
          notesList.map(({ title, initialsBgColor }) => <NoteTitle {...{title, initialsBgColor}} />)
        }
      </div>
      <div className='add-note' onClick={handleClickOnPlusIcon} >+</div>
      {openModal ? <Modal isOpen={openModal} onClose={() => setOpenModal(false)} {...{setNotesList, notesList}} /> : null}
    </div>
  )
}

export default PocketNoteTitleList