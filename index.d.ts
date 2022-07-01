declare module "*.jpg";
declare module "*.jpeg";

export {};
declare global {
    interface Window {
        application: App; 
    }
}
type App ={
    screens: any,  //здесь не получилось избавиться от any, если пишу тип object, то ошибки при добавлении в него экранов, не смогла их убрать.
    renderScreen(screenName: string, clear?: boolean): void;
    openCard?: HTMLImageElement,
    timerId?: NodeJS.Timer,
    timer?: string,
    difficulty?: string,
    pairCount?: number,
}