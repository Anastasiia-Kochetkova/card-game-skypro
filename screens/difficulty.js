
window.application.screens['difficulty'] = function () {

    const container = document.createElement("div");
    container.classList.add('container');

    app.appendChild(container);


    const title = document.createElement("h1");
    title.classList.add('title');
    title.textContent = 'Выбери сложность'

    container.appendChild(title);


    const levelsNumbers = document.createElement("div");
    levelsNumbers.classList.add('level');

    container.appendChild(levelsNumbers);

    addLevelImg('1', "one");
    addLevelImg('2', "two");
    addLevelImg('3', "three");

    const warning = document.createElement("h1");
    warning.classList.add('warning');
    warning.classList.add('warning_hidden');
    warning.textContent = 'Сначала необходимо выбрать уровень!';

    container.appendChild(warning);


    const StartButton = document.createElement("button");
    StartButton.classList.add('button');
    StartButton.textContent = 'Старт';

    container.appendChild(StartButton);


    function addLevelImg(id, alt) {
        const levelNumber = document.createElement("img");
        levelNumber.id = id;
        levelNumber.classList.add('level__number');
        levelNumber.src = `image/${id}.png`;
        levelNumber.alt = alt;

        levelsNumbers.appendChild(levelNumber);
    }

    
    const levels = document.querySelectorAll(".level__number");

    levels.forEach(level => {
        level.addEventListener('click', onClickDifficulty);
    })

    function onClickDifficulty(event) {
        levels.forEach(level => {
            level.classList.remove('current-level');
        })
        warning.classList.add('warning_hidden');
        event.target.classList.add('current-level');
        window.application.difficulty = event.target.id;
    }


    StartButton.addEventListener('click', function(){
        if(window.application.difficulty===undefined){
            warning.classList.remove('warning_hidden');
            return
        }

        window.application.renderScreen('game'); //экран игры ещё не создан
    })

}