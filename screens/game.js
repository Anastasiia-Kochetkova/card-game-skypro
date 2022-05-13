/*global app, cardsData*/

/* <body>
        <div class="head">
            <div class="timer">
                <div class="timer__block">
                    <h2 class="time__title time__title-min">min</h2>
                    <div class="time minutes">00</div>
                </div>
                <div class="time">.</div>
                <div class="timer__block">
                    <h2 class="time__title time__title-sec">sec</h2>
                    <div class="time seconds">00</div>
                </div>
            </div>
            <button class="button">Начать заново</button>
        </div>
        <div class="container-for-field">
            <div class="cards-field">
                <div class="card">
                    <img src="./cards/back.png" alt="card">
                </div> 

                ....    - повторить блок 18 раз в сумме

                <div class="card">
                    <img src="./cards/back.png" alt="card">
                </div>
                
*/

window.application.screens["game"] = function () {
    const head = document.createElement("div");
    head.classList.add("head");
    app.appendChild(head);

    const timer = document.createElement("div");
    timer.classList.add("timer");
    head.appendChild(timer);

    const timerBlockMin = document.createElement("div");
    timerBlockMin.classList.add("timer__block");
    timer.appendChild(timerBlockMin);

    const timeTitleMin = document.createElement("h2");
    timeTitleMin.classList.add("time__title");
    timeTitleMin.classList.add("time__title-min");
    timeTitleMin.textContent = "min";
    timerBlockMin.appendChild(timeTitleMin);

    const minutes = document.createElement("div");
    minutes.classList.add("time");
    minutes.classList.add("minutes");
    minutes.textContent = "00";
    timerBlockMin.appendChild(minutes);

    const point = document.createElement("div");
    point.classList.add("time");
    point.textContent = ".";
    timer.appendChild(point);

    const timerBlockSec = document.createElement("div");
    timerBlockSec.classList.add("timer__block");
    timer.appendChild(timerBlockSec);

    const timeTitleSec = document.createElement("h2");
    timeTitleSec.classList.add("time__title");
    timeTitleSec.classList.add("time__title-sec");
    timeTitleSec.textContent = "sec";
    timerBlockSec.appendChild(timeTitleSec);

    const seconds = document.createElement("div");
    seconds.classList.add("time");
    seconds.classList.add("seconds");
    seconds.textContent = "00";
    timerBlockSec.appendChild(seconds);

    const startAgainButton = document.createElement("button");
    startAgainButton.classList.add("button");
    startAgainButton.textContent = "Начать заново";
    head.appendChild(startAgainButton);

    const containerForField = document.createElement("div");
    containerForField.classList.add("container-for-field");
    app.appendChild(containerForField);

    const cardsField = document.createElement("div");
    cardsField.classList.add("cards-field");
    containerForField.appendChild(cardsField);

    let allCards = [];
    for (let indexCard = 0; indexCard < cardsData.length; indexCard++) {
        allCards.push(cardsData[indexCard].name);
    }

    let pairCount = undefined;
    if (window.application.difficulty === "1") {
        pairCount = 3;
    } else if (window.application.difficulty === "2") {
        pairCount = 6;
    } else if (window.application.difficulty === "3") {
        pairCount = 9;
    }

    let pairCards = [];
    for (let i = 0; i < pairCount; i++) {
        // get random index in allCards array
        let randomIndex = Math.floor(Math.random() * allCards.length);
        let randomElement = allCards[randomIndex];

        // remove element from allCards array
        allCards.splice(randomIndex, 1);

        pairCards.push(randomElement);
        pairCards.push(randomElement);
    }

    shuffle(pairCards);

    pairCards.forEach((element) => {
        addCardImg(element);
    });

    function addCardImg(id) {
        const card = document.createElement("div");
        card.classList.add("card");
        cardsField.appendChild(card);

        const imageCard = document.createElement("img");
        imageCard.id = id;
        imageCard.alt = "card";
        imageCard.src = "cards/back.png";
        imageCard.alt = card;
        card.appendChild(imageCard);
    }

    function shuffle(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    }
};
