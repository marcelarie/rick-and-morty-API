const main = {
    name: 'main',
    template: ` <main id="main"><strong>WELCOME</strong></main> `,
    renderEpisode: function (data) {
        const characters = data.characters;

        const main = document.getElementById('main');
        main.innerHTML = '';

        const episodeTemplate =
            `<section id="main__episode" class="main__episode">
                <div class="episode__name">${data.id}. ${data.name}</div>
                <div class="episode__air-date">${data.air_date}</div>
                <div id="episode__characters" class="episode__characters"></div>
            </section>`;

        main.insertAdjacentHTML('beforeend', episodeTemplate)
        this.renderCharacters(characters)
    },
    renderCharacters: function (characters) {
        characters.forEach(character => {
            this.getCharacter(character);
        })
    },
    getCharacter: function (character) {
        axios.get(character).then(({data}) => {
            const characterContainer = document.getElementById('episode__characters')
            console.log(data)
            const characterCard =
                `<div class="character" id="${data.name}">
                <img src="${data.image}" alt="${data.name}"/>
                <h2 class="character__names">${data.name}</h2>
                <p class="character__species ${data.status.toLowerCase()}">${data.species}  <span>●</span></p>
            </div>`
            characterContainer.insertAdjacentHTML('beforeend', characterCard)
        })
    }
}

export {main}
