import { useRef } from "react"


const useDebounce = (callback, delay) => {
    let timeOutId = useRef(null)

    const useDebounceFn = (event) => {
        if(timeOutId.current) clearTimeout(timeOutId.current)
        timeOutId.current = setTimeout(() => {
          callback(event);
        }, delay)
    }

  return useDebounceFn;
}

export default useDebounce;