const character = {
    name: 'character',
    template:
        `<div id="character__menu" class="character__menu">
        </div>`,
    renderCharacter: function (data) {
        this.renderCharacterMenu()

        // scroll to main
        document.querySelector('#main').scrollIntoView({
            behavior: 'smooth'
        })

        console.log(data)

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
            <p>Origin: <button id="location-button" 
            data-url='${data.origin.url}'>${data.origin.name}</button></p>
        </div>
        <div class="character__menu__location">
            <div class="location__name"></div>
            <div class="location__type"></div>
            <div class="location__dimension"></div>
            <div class="location__residents"></div>
        </div>
        </div>`
        characterMenu.insertAdjacentHTML('beforeend', menu);
        this.locationListener();
    },
    renderCharacterMenu: function () {
        // main__episode
        const main = document.getElementById('character__container');

        main.innerHTML = this.template;
        // main.insertAdjacentHTML('beforeend', this.template);
    },
    renderLocation: function (event) {
        const url = event.target.getAttribute('data-url');
        console.log(url)
    },
    locationListener: function () {
        document.getElementById('location-button')
            .addEventListener('click', this.renderLocation)
    }
}

export {character}
