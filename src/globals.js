export function createElement(tagName, classList, container, textContent) {
    const newElement = document.createElement(tagName);
    if (classList !== undefined) {
        if (typeof classList === "string") {
            newElement.classList.add(classList);
        } else if (Array.isArray(classList)) {
            classList.forEach((className) => {
                newElement.classList.add(className);
            });
        }
    }

    if (container !== undefined) {
        container.appendChild(newElement);
    }

    if (textContent !== undefined) {
        newElement.textContent = textContent;
    }

    return newElement;
}
export const app = document.querySelector(".app");
export const imgPath = "./static/cards/";
