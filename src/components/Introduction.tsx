import { useTranslation } from "react-i18next";
import { BlinkingArrow } from "./BlinkingArrow";
import { LanguageButton } from "./LanguageButton";
import { PivotIcons } from "./PivotIcons";

type IntroductionProps = {
    moveToCareer: () => void;
};

export const Introduction = ({ moveToCareer }: IntroductionProps) => {
    const { t } = useTranslation();

    return (
        <div className="bg-primary h-screen flex justify-center place-items-center">
            <PivotIcons />
            <div className="bg-slate-50 flex flex-col h-5/6 w-10/12 p-4 justify-between rounded-md drop-shadow-md">
                <div className="flex flex-col place-items-end">
                    <LanguageButton />
                </div>
                <div className="mb-10 flex-col gap-8">
                    <div className="flex flex-col tablet:flex-row justify-center place-items-center gap-10">
                        <img className="rounded-full aspect-auto w-40 h-40" src={"profile.jpg"} alt="profile-avatar" />
                        <div className="flex flex-col text-left justify-center">
                            <div className="text-slate-700 mb-2 text-2xl font-bold">{t("name")}</div>
                            <div className="text-slate-700 mb-2 whitespace-pre-line">{t("introTitleWithLocation")}</div>
                            <div className="text-slate-500 text-sm whitespace-pre-line">{t("introDetail")}</div>
                        </div>
                    </div>
                </div>
                <BlinkingArrow onClick={moveToCareer} color="primary" />
            </div>
        </div>
    );
};
