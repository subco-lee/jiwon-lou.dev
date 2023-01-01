import { useTranslation } from "react-i18next";

type CareerCardProps = {
    selectedTab: string;
};

export const CareerCard = ({ selectedTab }: CareerCardProps) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col p-2 pt-6">
            <div className="font-bold text-slate-700">{t(`title${selectedTab}`)}</div>
            <div className="font-think text-sm text-slate-500">{t(`period${selectedTab}`)}</div>
            <div className="mt-4">{t(`content${selectedTab}`)}</div>
        </div>
    );
};
