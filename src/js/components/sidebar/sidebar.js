import {get} from '../../api/api.js'
import {render} from '../../render/render.js'
import {episodes} from './episodes.js'

const sidebar = {
    name: 'sidebar',
    template: `
        <aside id="sidebar" class="sidebar">
            <ul id="sidebar__episodes" class="sidebar__episodes">
            </ul>
            <button id="sidebar__next" class="sidebar__next">Next</button>
        </aside>`,
    // buttonListeners: function () {
    // document.getElementById('sidebar__next').addEventListener('click',
    // () => );
    // }
};

export {sidebar}

