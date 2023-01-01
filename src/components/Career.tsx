import React, { FC, useState } from "react";
import { BlinkingArrow } from "./BlinkingArrow";
import { CareerCard } from "./CareerCard";
import { LanguageButton } from "./LanguageButton";

interface CareerProps {
    moveToFooter: () => void;
}
const tabs = ["GEEKBLE", "NAVER", "PACE", "CLASS101"];

const selectedStyle = "bg- ";

export const Career: FC<CareerProps> = ({ moveToFooter }: CareerProps) => {
    const [selectedTab, setSelectedTab] = useState("CLASS101");
    return (
        <div className="bg-slate-700 h-screen flex justify-center place-items-center">
            <div className="bg-slate-50 flex flex-col h-5/6 w-10/12 p-4 justify-between place-items-center rounded-md drop-shadow-md">
                <div className="flex flex-col self-end">
                    <LanguageButton />
                </div>
                <div className="flex flex-col max-w-2xl h-full p-20 divide-y space-y-6">
                    <div className="text-sm place-items-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`hover:bg-slate-200
                                    ${tab === selectedTab ? "bg-slate-200 font-extra-bold" : ""} 
                                    text-slate-700 font-semibold w-32 px-4 py-2`}
                                onClick={() => setSelectedTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <CareerCard selectedTab={selectedTab} />
                </div>
                <BlinkingArrow onClick={moveToFooter} />
            </div>
        </div>
    );
};
