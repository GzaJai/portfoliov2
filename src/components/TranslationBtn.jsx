import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ArgentinaFlag from './icons/ArgentinaFlag'
import UkFlag from './icons/UkFlag'

const TranslationBtn = () => {

    const [currentLng, setCurrentLng] = useState("")
    const { i18n } = useTranslation();

    useEffect(() => {
        setCurrentLng(i18n.language)
    }, []);

    const handleLngSwitch = () => {
        if (currentLng=="es"){
            setCurrentLng("en")
            i18n.changeLanguage("en")
        } else if (currentLng=="en") {
            setCurrentLng("es")
            i18n.changeLanguage("es")
        }
    }

  return (
    <button onClick={handleLngSwitch} className="fixed bottom-8 right-4 z-9999 p-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl backdrop-blur-sm border border-indigo-400/30">
        { currentLng=="es"&&<ArgentinaFlag width={32} height={32} />}
        { currentLng=="en"&&<UkFlag width={32} height={32} />}
    </button>
  )
}

export default TranslationBtn