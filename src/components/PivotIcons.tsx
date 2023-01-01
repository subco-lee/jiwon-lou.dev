import { Github } from "./Github";
import { LinkedIn } from "./LinkedIn";
import { QuickCoffeeChatButton } from "./QuickCoffeeChatButton";

export const PivotIcons = () => (
    <div className="fixed flex flex-col place-items-center justify-center gap-4 left-0 bg-secondary w-12 h-48 rounded-r-md shadow-md">
        <Github />
        <LinkedIn />
        <QuickCoffeeChatButton />
    </div>
);
