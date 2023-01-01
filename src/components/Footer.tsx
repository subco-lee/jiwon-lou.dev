import React, { FC } from "react";

export const Footer: FC = () => {
    return (
        <div className="flex bg-slate-200 h-screen place-items-center justify-center">
            <div className="text-slate-500 text-sm text-center whitespace-pre-line">
                {`Thanks for your attention and precious time.
        Hope we'll be reached soon!`}
            </div>
        </div>
    );
};
