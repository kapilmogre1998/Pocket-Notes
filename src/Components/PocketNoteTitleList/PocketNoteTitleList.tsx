import NoteTitle from './NoteTitle'
import './PocketNoteTitleList.css'

const PocketNoteTitleList = () => {
  return (
    <div className='pocketnotestitlelist-container' >
      <h1 className='title' >Pocket Notes</h1>
      <div className='notes-title-list' >
        <NoteTitle />
      </div>
    </div>
  )
}

export default PocketNoteTitleList