import './NoteTitle.css'
import { getInitials } from './Constant';

const NoteTitle = ({ title, initialsBgColor, isActive = false, clickOnTitle, uniqueId }) => {

  return (
    <div className={`notes ${isActive ? 'active' : ''}`} onClick={() => clickOnTitle(uniqueId)} >
      <div style={{ backgroundColor: initialsBgColor }} className='initials' >{getInitials(title)}</div>
      <div title={title} >{title}</div>
    </div>
  )
}

export default NoteTitle