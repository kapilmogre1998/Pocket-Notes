import { useState } from 'react'
import Modal from '../Common/Modal/Modal'
import NoteTitle from './NoteTitle'
import './PocketNoteTitleList.css'

const PocketNoteTitleList = ({ notesList,setNotesList }) => {
  const [openModal, setOpenModal] = useState(false);
  const isAnyTabActive = notesList.find(elem => elem.isActive);

  const handleClickOnPlusIcon = () => {
    setOpenModal(true)
  }

  const handleClickOnTitle = (id: number) => {
    const updatedList = notesList.map(item => ({ ...item, isActive: item.uniqueId == id ? true : false }))
    setNotesList([ ...updatedList ]);
  }

  return (
    <div className={`pocketnotestitlelist-container ${isAnyTabActive ? 'tab-active' : ''}`} >
      <h1 className='title' >Pocket Notes</h1>
      <div className='notes-title-list' >
        {
          notesList.map(({ title, initialsBgColor, isActive, uniqueId }) => <NoteTitle key={uniqueId} {...{title, initialsBgColor, isActive, uniqueId}} clickOnTitle={handleClickOnTitle} />)
        }
      </div>
      <div className='add-note' onClick={handleClickOnPlusIcon} >+</div>
      {openModal ? <Modal isOpen={openModal} onClose={() => setOpenModal(false)} {...{setNotesList, notesList}} /> : null}
    </div>
  )
}

export default PocketNoteTitleList