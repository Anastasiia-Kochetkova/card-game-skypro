/*global app, cardsData*/

window.application.screens["game"] = function () {
    const head = createHeadContainer();
    createTimer(head);
    createResetButton(head);

    const cardsField = createCardsField();
    fillWithCards(cardsField);

    setTimeout(flipTheCard, 5000);

    function createResetButton(container) {
        const startAgainButton = document.createElement("button");
        startAgainButton.classList.add("button");
        startAgainButton.textContent = "Начать заново";
        container.appendChild(startAgainButton);
    }

    function createHeadContainer() {
        const head = document.createElement("div");
        head.classList.add("head");
        app.appendChild(head);
        return head;
    }

    function fillWithCards(container) {
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
            let randomIndex = Math.floor(Math.random() * allCards.length);
            let randomElement = allCards[randomIndex];

            allCards.splice(randomIndex, 1);

            pairCards.push(randomElement);
            pairCards.push(randomElement);
        }

        shuffle(pairCards);

        pairCards.forEach((element) => {
            addCardImg(container, element);
        });
    }

    function createCardsField() {
        const containerForField = document.createElement("div");
        containerForField.classList.add("container-for-field");
        app.appendChild(containerForField);

        const cardsField = document.createElement("div");
        cardsField.classList.add("cards-field");
        containerForField.appendChild(cardsField);
        return cardsField;
    }

    function createTimer(container) {
        const timer = document.createElement("div");
        timer.classList.add("timer");
        container.appendChild(timer);

        const timerBlockMin = document.createElement("div");
        timerBlockMin.classList.add("timer__block");
        timer.appendChild(timerBlockMin);

        const timeTitleMin = document.createElement("h2");
        timeTitleMin.classList.add("time__title");
        timeTitleMin.classList.add("time__title-min");
        timeTitleMin.textContent = "min";
        timerBlockMin.appendChild(timeTitleMin);

        const minutes = document.createElement("div"); //оптимизировать верстку таймера через шаблонизатор
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
    }

    function addCardImg(container, name) {
        const card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);

        const imageCard = document.createElement("img");
        imageCard.classList.add("image-card");
        imageCard.id = name;
        imageCard.alt = "card";
        imageCard.src = getImgByName(name); //  Попробовать делать массив из чисел индексов, а не строк из поля name. меньше циклов.
        card.appendChild(imageCard);
    }

    function getImgByName(name) {
        let imageSrc = undefined;
        cardsData.forEach((element) => {
            if (element.name === name) {
                imageSrc = element.image;
            }
        });
        return imageSrc;
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

    function flipTheCard() {
        const currentCards = document.querySelectorAll(".image-card");
        currentCards.forEach((element) => {
            element.src = "./cards/back.png";
        });
    }
};
