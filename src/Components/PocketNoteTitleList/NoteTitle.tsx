import { useEffect } from 'react';
import './NoteTitle.css'
import { getInitials } from './Constant';

type TitleProps = {
  title: string
}

const NoteTitle = ({ title, initialsBgColor }: TitleProps) => {

  useEffect(() => {
  },[])

  return (
    <div className={`notes ${false ? 'active' : ''}`} >
      <div style={{ backgroundColor: initialsBgColor }} className='initials' >{getInitials(title)}</div>
      <div>{title}</div>
    </div>
  )
}

export default NoteTitle