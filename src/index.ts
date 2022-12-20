import "./styles/style.scss";
import { createDifficultyScreen } from "./screens/difficulty";
import { createGameScreen } from "./screens/game";
import { createResultScreen } from "./screens/result";
import { app, difficultySettings } from "./globals";
import { ScreenName } from "../index.d";

window.application = {
    screens: {
        difficulty: createDifficultyScreen,
        game: createGameScreen,
        result: createResultScreen,
    },
    renderScreen(screen: ScreenName, clear = true): void {
        if (clear && app !== null) {
            app.textContent = "";
        }
        this.screens[screen]();
    },
    openCard: undefined,
    timerId: undefined,
    timer: undefined,
    difficulty: undefined,
    pairCount: undefined,
};

window.application.renderScreen("difficulty");
