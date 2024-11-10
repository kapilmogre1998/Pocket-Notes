import BlankPreview from './BlankPreview'
import ArrowIcon from '../../assets/arrow-icon.svg'
import DescriptionList from './DescriptionList'
import './PocketNotesDescription.css'
import { getInitials } from '../PocketNoteTitleList/Constant'
import { useEffect, useState } from 'react'
import { formatDate, formatTime, storeDataInLocalStorage } from '../../Constant'
import useDebounce from '../../useHooks/useDebounce'

const PocketNotesDescription = ({ notesList, setNotesList }) => {
  const [userNote, setUserNote] = useState('');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const activeTabDetails = notesList.find((item) => item.isActive);
  const { title, initialsBgColor, description ,uniqueId } = activeTabDetails || {};

  const handleClickOnArrow = () => {
    const addDescription = {...activeTabDetails, description: [...activeTabDetails.description, { user_notes: userNote.trim(), date: formatDate(new Date()), time: formatTime(new Date()) }]}
    const updatedList = notesList.map(elem => elem.uniqueId == uniqueId ? addDescription : elem)
    storeDataInLocalStorage(updatedList);
    setNotesList(updatedList);
    setUserNote('');
  }

  const handleClickOnBack = () => {
    setNotesList(prev => prev.map(item => ({ ...item, isActive: false })))
  }

  const useDebounceFn = useDebounce((width) => setWindowSize(width),1000);

  useEffect(() => {
    window.addEventListener('resize', () => useDebounceFn(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () => useDebounceFn(window.innerWidth))
    }
  },[])

  return (
    <div className='rightside-container'>
      {
        activeTabDetails ? 
        <div className='descripton-container' >
          <div className='note-title' >
            {windowSize <= 600 ? <div className='back-arrow' onClick={handleClickOnBack} >&#8592;</div> : null}
            <div className='header-initials' style={{ backgroundColor: initialsBgColor }} >{getInitials(title)}</div>
            <div>{title}</div>
          </div>
          <div className='note-descriptions'>
            {description.map((item) => <DescriptionList item={item} />)}
          </div>
  
          <div className='input-description' >
            <div>
              <div className='input-area' >
                <textarea placeholder='Enter your text here...' id="note-descr" value={userNote} onChange={(e) => setUserNote(e.target.value)} ></textarea>
                <div className='submit-descr-btn' >
                  <img src={ArrowIcon} alt="arrow-icon" onClick={handleClickOnArrow} />
                </div>
              </div>
            </div>
          </div>
  
        </div> :
        <BlankPreview />
      }
    </div>
  )
}

export default PocketNotesDescription