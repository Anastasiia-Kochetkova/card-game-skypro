import "./styles/style.scss";
import { createDifficultyScreen } from "./screens/difficulty";
import { createGameScreen } from "./screens/game";
import { createResultScreen } from "./screens/result";
import { app } from "./globals";

window.application = {
    screens: {},
    renderScreen(screenName, clear = true) {
        if (clear) {
            app.textContent = "";
        }
        this.screens[screenName]();
    },
    openCard: undefined,
    timerId: undefined,
    timer: undefined,
    difficulty: undefined,
    pairCount: undefined,
};

window.application.screens["difficulty"] = createDifficultyScreen;
window.application.screens["game"] = createGameScreen;
window.application.screens["result"] = createResultScreen;

window.application.renderScreen("difficulty");
