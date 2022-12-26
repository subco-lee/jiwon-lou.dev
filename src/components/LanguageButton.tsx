import { useState } from 'react';
import { useTranslation } from 'react-i18next'

export const LanguageButton = () => {
  const { t, i18n } = useTranslation()
  const [ show, setShow ] = useState(false); 

  const changeLanguageToKo = () => i18n.changeLanguage('ko')
  const changeLanguageToEn = () => i18n.changeLanguage('en')
  return (
    <div className="m-3">
        <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {
            i18n.language === 'en' ? 
            <button className='text-2xl' onClick={changeLanguageToKo}>🇺🇸</button> :
            <button className='text-2xl' onClick={changeLanguageToEn}>🇰🇷</button>  
        }
        </div>
        {
            show && 
            <div className='absolute  right-0 text-xs text-slate-400'>
            {t('changeLanguage')}
        </div>
}

    </div>
  )
}