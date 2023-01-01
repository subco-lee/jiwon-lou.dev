import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageButton = () => {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);

    const changeLanguageToKo = () => i18n.changeLanguage("ko");
    const changeLanguageToEn = () => i18n.changeLanguage("en");
    return (
        <div className="mt-2 mr-3">
            {show ? (
                <div onMouseLeave={() => setShow(false)}>
                    {i18n.language === "en" ? (
                        <button className="text-2xl" onClick={changeLanguageToKo}>
                            🇺🇸
                        </button>
                    ) : (
                        <button className="text-2xl" onClick={changeLanguageToEn}>
                            🇰🇷
                        </button>
                    )}
                    <div className="absolute right-2 text-xs text-slate-400">{t("changeLanguage")}</div>
                </div>
            ) : (
                <div className="relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                    <div className="text-2xl">💬</div>
                </div>
            )}
        </div>
    );
};
