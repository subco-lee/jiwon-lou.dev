import React, { FC } from "react";
import { BlinkingArrow } from "./BlinkingArrow";

interface CareerProps {
    moveToFooter: () => void;
}

export const Career: FC<CareerProps> = ({ moveToFooter }: CareerProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col h-screen bg-slate-100 place-items-center justify-center">
                <BlinkingArrow onClick={moveToFooter} textKey="Time to End" />
            </div>
        </div>
    );
};
