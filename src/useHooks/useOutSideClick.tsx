import { useRef } from 'react'

const useOutSideClick = ({onClose}) => {
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if(ref.current && !ref.current.contains(event.target)){
            onClose()
        }
    }

  return [ref,handleClickOutside]
}

export default useOutSideClick