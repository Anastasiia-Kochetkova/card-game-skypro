export {};
declare global {
    interface Window {
        application: App;
    }
}

type App = {
    screens: Record<ScreenName, Function>;
    renderScreen(screen: ScreenName, clear?: boolean): void;
    openCard?: HTMLImageElement;
    timerId?: NodeJS.Timer;
    timer?: string;
    difficulty?: string;
    pairCount?: number;
};

export type ScreenName = "difficulty" | "game" | "result";
