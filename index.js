const app = document.querySelector(".app");
window.application = {
    blocks: {},
    screens: {},
    renderScreen(screenName) {
        app.textContent = "";
        this.screens[screenName]();
    },
    renderBlock(blockName, container) {
        this.blocks[blockName](container);
    },
    timers: [],
    difficulty: undefined,
};
