import { app, createElement, difficultySettings } from "../globals";
import { DifficultyName } from "../../index.d";

export function createDifficultyScreen() {
    const mainContainer = createElement("div", "main-container", app);
    const container = createElement("div", "container", mainContainer);
    createElement("h1", "title", container, "Выбери сложность");
    const levelsNumbers = createElement("div", "level", container);

    addLevelImg("1", "one", levelsNumbers);
    addLevelImg("2", "two", levelsNumbers);
    addLevelImg("3", "three", levelsNumbers);

    const warning = createElement(
        "h1",
        ["warning", "warning_hidden"],
        container,
        "Сначала необходимо выбрать уровень!"
    );

    const startButton = createElement(
        "button",
        ["button", "start-button"],
        container,
        "Старт"
    );
    addEventListenerToLevels(warning);

    startButton.addEventListener("click", function () {
        if (!window.application.difficulty) {
            warning.classList.remove("warning_hidden");
            return;
        }

        window.application.renderScreen("game");
    });
}

function addEventListenerToLevels(warning: HTMLElement) {
    const levels = <NodeListOf<HTMLElement>>(
        document.querySelectorAll(".level__number")
    );

    levels.forEach((level) => {
        level.addEventListener("click", onClickDifficulty);
    });

    function onClickDifficulty(event: MouseEvent) {
        const target = <HTMLElement>event.target;
        if (target === null) {
            return;
        }
        levels.forEach((level) => {
            level.classList.remove("current-level");
        });
        warning.classList.add("warning_hidden");
        target.classList.add("current-level");

        const difficultyName = target.id as DifficultyName;
        window.application.difficulty = difficultySettings[difficultyName];
    }
}

function addLevelImg(id: string, alt: string, container: HTMLElement) {
    const levelNumber = <HTMLImageElement>(
        createElement("img", "level__number", container)
    );
    levelNumber.id = id;
    levelNumber.src = `static/image/${id}.png`;
    levelNumber.alt = alt;
}