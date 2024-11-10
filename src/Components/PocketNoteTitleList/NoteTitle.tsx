import './NoteTitle.css'
import { getInitials } from './Constant';

type TitleProps = {
  title: string;
  initialsBgColor: string;
  isActive?: boolean;
  clickOnTitle: () => void;
  uniqueId: number
}

const NoteTitle = ({ title, initialsBgColor, isActive = false, clickOnTitle, uniqueId }: TitleProps) => {

  return (
    <div className={`notes ${isActive ? 'active' : ''}`} onClick={() => clickOnTitle(uniqueId)} >
      <div style={{ backgroundColor: initialsBgColor }} className='initials' >{getInitials(title)}</div>
      <div title={title} >{title}</div>
    </div>
  )
}

export default NoteTitle