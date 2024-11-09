import { useEffect, useState } from 'react';
import './Modal.css';
import { BG_COLOR_LIST } from './Constant';
import useOutSideClick from '../../../useHooks/useOutSideClick';

type Note = {
    title: string;
    initialsBgColor: string;
    description: string[]
}

const Modal = ({ isOpen, onClose, setNotesList, notesList }: { isOpen: boolean, onClose: () => void, setNotesList: () => {}, notesList: [] }) => {
    const [modalOpen, setModalOpen] = useState(isOpen);
    const [bgClrList, setBgClrList] = useState(BG_COLOR_LIST);
    const [groupName, setGroupName] = useState('');
    const [showError, setShowError] = useState(false);

    const handleClose = () => {
        setModalOpen(false);
        onClose();
    };

    const [ref, handleClickOutside] = useOutSideClick({ onClose: handleClose })

    const handleClickOnColor = (id: number) => {
        const modifiedList = bgClrList.map((item) => ({ ...item, isActive: id == item.id ? true : false }))
        setBgClrList(modifiedList)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log("🚀 ~ handleKeyDown ~ groupName:", groupName)
            if (groupName.length) {

            } else {
                setShowError(true);
            }
        }
    }

    const createNote = () => {
        if(groupName.length){
            const note = { title: groupName, initialsBgColor: bgClrList.find(item => item.isActive)?.color || '', description: '' }
            setNotesList(prev => {
                localStorage.setItem('notes-list', JSON.stringify([...prev, note]));
                return [...prev, note];
            });
            handleClose()
        } else {
            setShowError(true)
        }
    }


    useEffect(() => {
        setModalOpen(isOpen);

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            // document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            // document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen])

    return (
        <>
            {modalOpen && (
                <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={handleClickOutside} >
                    <div ref={ref} className="modal">
                        <div className='modal-content' style={{ width: '700px' }} >
                            <p>Create New group</p>
                            <div className='group-name'>
                                <label htmlFor='groupname' >Group Name</label>
                                <input className={`${showError ? 'error' : ''}`} onAnimationEnd={() => setShowError(false)} type="text" id="groupname" value={groupName} maxLength={30} placeholder='Enter group name' onChange={(event) => setGroupName(event.target.value)} />
                            </div>
                            <div className='choose-color-container' >
                                <span>Choose Colour</span>
                                <div className='choose-color' >
                                    {
                                        bgClrList.map(({ color, isActive, id }) => <p onClick={() => handleClickOnColor(id)} key={id} className={`${isActive ? 'active' : ''}`} style={{ background: color }} ></p>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='create-btn' >
                            <button onClick={createNote} >Create</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
