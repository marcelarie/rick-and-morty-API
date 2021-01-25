import {main} from '../main/main.js'

const sidebar = {
    name: 'sidebar',
    template: `
        <aside id="sidebar" class="sidebar">
            <div id="sidebar__seasons" class="sidebar__seasons">
            </div>
        </aside> `,
    openEpisode: function (event) {
        if (event.target && event.target.classList
            .contains('sidebar__episodes')) {

            console.log(event.target)
        }
    },
    openSeason: function (event) {
        if (event.target && event.target.classList
            .contains('sidebar__season')) {

            const episodes = event.target.querySelectorAll('li');

            episodes.forEach(episode => {
                episode.classList.toggle('none');
            })
        }
    }
};

export {sidebar}

