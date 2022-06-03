import "./styles/style.css";
import { createDifficultyScreen } from "./screens/difficulty";
import { createGameScreen } from "./screens/game";
import { app } from "./globals";

window.application = {
    screens: {},
    renderScreen(screenName) {
        app.textContent = "";
        this.screens[screenName]();
    },
    openCard: undefined,
    timers: [],
    difficulty: undefined,
    pairCount: undefined,
};
window.application.screens["difficulty"] = createDifficultyScreen;
window.application.screens["game"] = createGameScreen;

window.application.renderScreen("difficulty");
