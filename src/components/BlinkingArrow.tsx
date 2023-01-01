import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDoubleDown } from "react-icons/fa";

type BlinkingArrowProps = {
    onClick?: () => void;
    textKey?: string;
    color?: string;
};

export const BlinkingArrow = ({ color, onClick, textKey }: BlinkingArrowProps) => {
    const { t } = useTranslation();
    return (
        <div onClick={onClick} className="flex flex-col place-items-center text-center">
            {textKey && <div className={`font-bold text-${color} text-md`}>{t(`${textKey}`)} </div>}
            <FaAngleDoubleDown size={24} className={`text-${color} animate-bounce`} />
        </div>
    );
};
