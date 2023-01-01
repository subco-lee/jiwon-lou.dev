import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MdLanguage } from "react-icons/md";

export const LanguageButton = () => {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);

    const changeLanguageToKo = () => i18n.changeLanguage("ko");
    const changeLanguageToEn = () => i18n.changeLanguage("en");
    return (
        <div
            className="flex gap-2 place-items-center flex-grow-0"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            {show ? (
                <>
                    <div className="text-xs text-slate-400">{t("changeLanguage")}</div>
                    {i18n.language === "en" ? (
                        <button className="text-2xl" onClick={changeLanguageToKo}>
                            🇺🇸
                        </button>
                    ) : (
                        <button className="text-2xl" onClick={changeLanguageToEn}>
                            🇰🇷
                        </button>
                    )}
                </>
            ) : (
                <div className="text-2xl">💬</div>
            )}
        </div>
    );
};
