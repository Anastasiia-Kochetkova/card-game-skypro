window.application.screens['game'] = function(){

    const title = document.createElement("h1");
    title.classList.add('title');
    title.textContent = 'Вы на экране игры'

    app.appendChild(title);
};