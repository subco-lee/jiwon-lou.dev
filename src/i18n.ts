import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

const resources = {
    en: { 
      translation: {
        "name": "Hi, I'm Jiwon",
        "changeLanguage": "Click Me to change language!"
      }
    },
    ko: {
      translation: {
        "name": "안녕하세요!",
        "changeLanguage": "언어를 바꾸려면 클릭하세요!"
      }
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
});

export default i18n;