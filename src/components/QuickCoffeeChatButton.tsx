import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCoffee } from "react-icons/fa";

export const QuickCoffeeChatButton = () => {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    return (
        <div
            className="flex place-items-center gap-2"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            onClick={() => {}}
        >
            {show && <div className="text-xs text-slate-400">{t("coffeeChat")}</div>}
            <FaCoffee className="fill-tertiary" size={20} />
        </div>
    );
};
