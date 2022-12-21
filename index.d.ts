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
    difficulty?: DifficultySetting;
    pairCount?: number;
    timeoutID?: NodeJS.Timeout;
};

export type DifficultySetting = {
    cardsPairs: number;
};

export type ScreenName = "difficulty" | "game" | "result";
export type DifficultyName = "1" | "2" | "3";
