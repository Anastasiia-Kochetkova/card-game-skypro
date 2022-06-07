import { app, createElement } from "../globals";

export function createDifficultyScreen() {
    const mainContainer = createElement("div", "main-container", app);

    const container = createElement("div", "container", mainContainer);

    createElement("h1", "title", container, "Выбери сложность");

    const levelsNumbers = createElement("div", "level", container);

    addLevelImg("1", "one");
    addLevelImg("2", "two");
    addLevelImg("3", "three");

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

    function addLevelImg(id, alt) {
        const levelNumber = createElement(
            "img",
            "level__number",
            levelsNumbers
        );
        levelNumber.id = id;
        levelNumber.src = `static/image/${id}.png`;
        levelNumber.alt = alt;
    }

    const levels = document.querySelectorAll(".level__number");

    levels.forEach((level) => {
        level.addEventListener("click", onClickDifficulty);
    });

    function onClickDifficulty(event) {
        levels.forEach((level) => {
            level.classList.remove("current-level");
        });
        warning.classList.add("warning_hidden");
        event.target.classList.add("current-level");
        window.application.difficulty = event.target.id;
    }

    startButton.addEventListener("click", function () {
        if (!window.application.difficulty) {
            warning.classList.remove("warning_hidden");
            return;
        }

        window.application.renderScreen("game");
    });
}
