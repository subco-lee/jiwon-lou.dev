import { Github } from "./Github";
import { LinkedIn } from "./LinkedIn";
import { QuickCoffeeChatButton } from "./QuickCoffeeChatButton";

export const PivotIcons = () => (
    <div className="fixed z-10 flex flex-col place-items-center justify-center gap-6 left-0 top-auto bg-secondary w-12 h-48 rounded-r-md shadow-md">
        <Github />
        <LinkedIn />
        <QuickCoffeeChatButton />
    </div>
);
