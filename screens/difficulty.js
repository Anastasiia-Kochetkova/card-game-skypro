/*global app*/

window.application.screens["difficulty"] = function () {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");
    app.appendChild(mainContainer);

    const container = document.createElement("div");
    container.classList.add("container");
    mainContainer.appendChild(container);

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Выбери сложность";

    container.appendChild(title);

    const levelsNumbers = document.createElement("div");
    levelsNumbers.classList.add("level");

    container.appendChild(levelsNumbers);

    addLevelImg("1", "one");
    addLevelImg("2", "two");
    addLevelImg("3", "three");

    const warning = document.createElement("h1");
    warning.classList.add("warning");
    warning.classList.add("warning_hidden");
    warning.textContent = "Сначала необходимо выбрать уровень!";

    container.appendChild(warning);

    const startButton = document.createElement("button");
    startButton.classList.add("button");
    startButton.textContent = "Старт";

    container.appendChild(startButton);

    function addLevelImg(id, alt) {
        const levelNumber = document.createElement("img");
        levelNumber.id = id;
        levelNumber.classList.add("level__number");
        levelNumber.src = `image/${id}.png`;
        levelNumber.alt = alt;

        levelsNumbers.appendChild(levelNumber);
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
        if (window.application.difficulty === undefined) {
            warning.classList.remove("warning_hidden");
            return;
        }

        window.application.renderScreen("game");
    });
};
