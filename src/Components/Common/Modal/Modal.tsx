import { useEffect, useRef, useState } from 'react';
import './Modal.css';
import { BG_COLOR_LIST } from './Constant';
import useOutSideClick from '../../../useHooks/useOutSideClick';
import { generateRandomId } from '../../../Constant';

const Modal = ({ isOpen, onClose, setNotesList, notesList }: { isOpen: boolean, onClose: () => void, setNotesList: () => {}, notesList: [] }) => {
    const [modalOpen, setModalOpen] = useState(isOpen);
    const [bgClrList, setBgClrList] = useState(BG_COLOR_LIST);
    const [groupName, setGroupName] = useState('');
    const [showError, setShowError] = useState(false);
    const inputRef = useRef(null);
    const selectorColorRef = useRef(null);

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
            if (inputRef?.current?.value?.length) {
                const element = selectorColorRef.current.querySelector('.active');
                const style = window.getComputedStyle(element);
                
                const note = { 
                    title: inputRef?.current?.value, 
                    initialsBgColor: style.getPropertyValue('background-color') || '',
                    description: [],
                    isActive: false,
                    uniqueId: generateRandomId()
                }

                setNotesList(prev => {
                    const updatedList = [...prev, note];
                    localStorage.setItem('notes-list', JSON.stringify(updatedList));
                    return updatedList;
                });

                handleClose()
            } else {
                setShowError(true);
            }
        } else if(event.key === 'Escape'){
            handleClose();
        }
    }

    const createNote = () => {
        if (groupName.length) {
            const note = { 
                title: groupName, 
                initialsBgColor: bgClrList.find(item => item.isActive)?.color || '', 
                description: [],
                isActive: false,
                uniqueId: generateRandomId()
            }

            setNotesList(prev => {
                const updatedList = [...prev, note];
                localStorage.setItem('notes-list', JSON.stringify(updatedList));
                return updatedList;
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
            document.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen])

    return (
        <>
            {modalOpen && (
                <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={handleClickOutside} >
                    <div ref={ref} className="modal">
                        <div className='modal-content' >
                            <p>Create New group</p>
                            <div className='group-name'>
                                <label htmlFor='groupname' >Group Name</label>
                                <input ref={inputRef} className={`${showError ? 'error' : ''}`} onAnimationEnd={() => setShowError(false)} type="text" id="groupname" value={groupName} maxLength={30} placeholder='Enter group name' onChange={(event) => setGroupName(event.target.value)} />
                            </div>
                            <div className='choose-color-container' >
                                <span>Choose Colour</span>
                                <div ref={selectorColorRef} className='choose-color'  >
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
