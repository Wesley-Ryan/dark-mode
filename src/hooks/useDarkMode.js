import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'

export const useDarkMode = (key, intialValue) => { 
    const [darkMode, setDarkMode] = useLocalStorage(key, intialValue)
    useEffect(() => {
        console.log('THE APP DARK MODE =>', darkMode)
        darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
      }, [darkMode])
    
      return [darkMode, setDarkMode]
    
    }
