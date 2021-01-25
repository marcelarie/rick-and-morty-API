import {main} from '../main/main.js'
import {episodes} from '../sidebar/episodes.js'

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

            episodes.openEpisode(event.target);
        }
    },
    openSeason: function (event) {
        if (event.target && event.target.classList
            .contains('sidebar__season')) {

            const episodes = event.target.querySelectorAll('li');
            const restOfEpisodes = document.getElementById('sidebar__seasons')
                .querySelectorAll('li')

            restOfEpisodes.forEach(episode => {
                episode.classList.add('none')
            })
            episodes.forEach(episode => {
                episode.classList.toggle('none')
            })
        }
    }
};

export {sidebar}

