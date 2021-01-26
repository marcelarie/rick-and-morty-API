const character = {
    name: 'character',
    template:
        `<div id="character__menu" class="character__menu">
        </div>`,
    renderCharacter: function (data) {
        this.renderCharacterMenu()
        const characterMenu = document.getElementById('character__menu')
        const menu = `<div id="${data.id}" class="character__menu__card">
        <div class="character__menu__card__left">
            <img src="${data.image}" alt="${data.name}"/>
            <h2 class="hide-text">${data.name}</h2>
        </div>
        <div class="character__menu__card__right">
            <p>Status: <span>${data.status}</span></p>
            <p>Species: <span>${data.species}</span></p>
            <p>Gender: <span>${data.gender}</span></p>
            <p>Origin: <span>${data.origin.name}</span></p>
        </div>
        </div>`
        characterMenu.insertAdjacentHTML('beforeend', menu);
    },
    renderCharacterMenu: function () {
        // main__episode
        const main = document.getElementById('character__container');
        main.innerHTML = '';
        main.insertAdjacentHTML('beforeend', this.template);
    }
}

export {character}
