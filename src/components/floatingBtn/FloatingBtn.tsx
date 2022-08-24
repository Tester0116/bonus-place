import { useState ,useEffect} from 'react'

import whatsappIcon from '../../assets/icons/Whatsapp.svg'

import './FloatingBtn.scss'

const FloatingBtn = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  
  const toggleVisibility = () => {
    if (window.pageYOffset > 150) 
      setIsVisible(true)
     else 
      setIsVisible(false)
  }
  return (<div className={isVisible?'floating-btn visible':'floating-btn'}><a target='_blank' href="https://web.whatsapp.com/">
      <img src={whatsappIcon} alt="whatsapp icon"/></a></div>  )
}

export default FloatingBtn