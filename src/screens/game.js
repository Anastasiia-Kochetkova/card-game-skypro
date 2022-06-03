import { app, createElement } from "../globals";
import { cardsData } from "../card-collection";

export function createGameScreen() {
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

        window.application.pairCount = pairCount;

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
        let classList;

        const timer = createElement("div", "timer", container);

        const timerBlockMin = createElement("div", "timer__block", timer);

        classList = ["time__title", "time__title-min"];
        createElement("h2", classList, timerBlockMin, "min");

        classList = ["time", "minutes"];
        createElement("div", classList, timerBlockMin, "00");

        createElement("div", "time", timer, ".");

        const timerBlockSec = createElement("div", "timer__block", timer);
        classList = ["time__title", "time__title-sec"];
        createElement("h2", classList, timerBlockSec, "sec");

        classList = ["time", "seconds"];
        createElement("div", classList, timerBlockSec, "00");
    }

    function addCardImg(container, name) {
        const card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);

        const imageCard = document.createElement("img");
        imageCard.classList.add("image-card");
        imageCard.id = name;
        imageCard.alt = "card";
        imageCard.src = getImgByName(name);
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
            element.src = "./static/cards/back.png";
        });
        subscribeCardsOnClick();
    }

    function subscribeCardsOnClick() {
        const cards = document.querySelectorAll(".image-card");
        cards.forEach((element) => {
            element.addEventListener("click", cardOnClick);
        });
    }

    function cardOnClick(event) {
        const chosenCard = event.target;
        if (window.application.openCard === undefined) {
            // клик по первой карте
            chosenCard.src = `/static/cards/${chosenCard.id}.jpg`;
            chosenCard.removeEventListener("click", cardOnClick);
            window.application.openCard = chosenCard;
        } else {
            // клик по второй карте
            chosenCard.src = `/static/cards/${chosenCard.id}.jpg`;
            chosenCard.removeEventListener("click", cardOnClick);
            if (window.application.openCard.id === chosenCard.id) {
                window.application.pairCount--;
                if (window.application.pairCount === 0) {
                    setTimeout(showWinScreen, 500);
                }
                window.application.openCard = undefined;
            } else {
                setTimeout(showLoseScreen, 500); //игра заканчивается на этом моменте
            }
        }
    }

    function showLoseScreen() {
        alert("Вы проиграли эту битву (((");
    }

    function showWinScreen() {
        alert("Поздравляю, вы победили!");
    }
}
