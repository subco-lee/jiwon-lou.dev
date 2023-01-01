import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            name: "Hi, I'm Jiwon",
            changeLanguage: "Click Me to change language!",
            introTitleWithLocation: "A Frontend Developer Based in Seoul, Korea.",
            introDetail: `I'm growing as passionate developer you've ever met!\nIf you want to figure out that is true or not, keep scrolling!
            `,
            seeMore: "See More!",
            coffeeChat: "Let's Talk!",
            titleGEEKBLE: "Chief Operating Officer @GEEKBLE",
            periodGEEKBLE: "Dec. 2017 - Dec. 2019",
            contentGEEKBLE:
                "Managing and elaborating sales, strategy, finance in company. Achieved 185% annual growth rate in 2019.",
            titleNAVER: "Developer Internship @NAVER",
            periodNAVER: "Jan. 2021 - Apr. 2021",
            contentNAVER:
                "Developing shopping search indicators for analyzing and improving search engine quality and user engagement using Hadoop and Scala.",
            titlePACE: "Frontend Developer @PACE",
            periodPACE: "Jul. 2021 - Feb. 2022",
            contentPACE:
                "Developing a web for simulating CAE and a standalone application for monitoring and predicting real-time values from sensors.",
            titleCLASS101: "Software Engineer @CLASS101",
            contentCLASS101: "Contributing open-source project named Vibrant",
        },
    },
    ko: {
        translation: {
            name: "안녕하세요 :)",
            changeLanguage: "언어를 바꾸려면 클릭하세요!",
            introTitleWithLocation: "프론트엔드 엔지니어, 이지원입니다. 반갑습니다!",
            introDetail: `풀스택 엔지니어로 성장하고 싶은 욕심많은 엔지니어입니다.\n자세한 포트폴리오에 관심이 있으시다면 아래로 이동해주세요.
            `,
            seeMore: "CV",
            coffeeChat: "커피챗은 늘 환영입니다!",
            titleGEEKBLE: "Chief Operating Officer @GEEKBLE",
            periodGEEKBLE: "Dec. 2017 - Dec. 2019",
            contentGEEKBLE:
                "Managing and elaborating sales, strategy, finance in company. Achieved 185% annual growth rate in 2019.",
            titleNAVER: "Developer Internship @NAVER",
            periodNAVER: "Jan. 2021 - Apr. 2021",
            contentNAVER:
                "Developing shopping search indicators for analyzing and improving search engine quality and user engagement using Hadoop and Scala.",
            titlePACE: "Frontend Developer @PACE",
            periodPACE: "Jul. 2021 - Feb. 2022",
            contentPACE:
                "Developing a web for simulating CAE and a standalone application for monitoring and predicting real-time values from sensors.",
            titleCLASS101: "Software Engineer @CLASS101",
            periodCLASS101: "May. 2022 - ing",
            contentCLASS101: "Contributing open-source project named Vibrant",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "ko",
});

export default i18n;
