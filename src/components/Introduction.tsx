import { useTranslation } from 'react-i18next';
import { BlinkingArrow } from './BlinkingArrow';
import { LanguageButton } from './LanguageButton';

interface IntroductionProps {
    moveToCareer: () => void
  }

export const Introduction = ({ moveToCareer }: IntroductionProps) => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="bg-slate-50 h-screen flex flex-col justify-between">
      <div className='flex justify-end'>
        <LanguageButton />
      </div>
    <div className='flex flex-col tablet:flex-row h-full w-full justify-center place-items-center p-10 gap-10'>
      <img className="rounded-full aspect-auto w-40 h-40"
        src={'profile.jpg'}
        alt="profile-avatar"
      />
      <div className='flex flex-col text-left justify-center'>
        <div className="text-slate-700 mb-2 text-2xl font-bold">
        {t('name')}
        </div>
        <div className="text-slate-700 mb-2 whitespace-pre-line">
          {'A Frontend Developer Based in Seoul, Korea'}
        </div>
        <div className="text-slate-500 text-sm whitespace-pre-line">
          {`I'm growing as passionate developer you've ever met!
            If you want to figure out that is true or not, keep scrolling!
          `}
        </div>
      </div>
    </div>

    <div onClick={moveToCareer} className="flex flex-col place-items-center text-center mb-4">
      <div className='font-bold text-md'> Down here </div>
      <BlinkingArrow />
    </div>
  </div>
)}