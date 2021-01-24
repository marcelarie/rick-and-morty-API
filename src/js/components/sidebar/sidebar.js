import {get} from '../../api/api.js'
import {render} from '../../render/render.js'
import {episodes} from './episodes.js'

const sidebar = {
    name: 'sidebar',
    next: 'https://rickandmortyapi.com/api/episode',
    prev: '',
    template: `
        <aside id="sidebar" class="sidebar">
            <ul id="sidebar__episodes" class="sidebar__episodes">
            </ul>
            <button id="sidebar__next" class="sidebar__next">Next</button>
        </aside>`,
    buttonListeners: function () {
        document.getElementById('sidebar__next').addEventListener('click',
            () => this.renderEpisodes(this.next));
    }
};

export {sidebar}

