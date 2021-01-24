import {get} from '../../api/api.js'
import {render} from '../../render/render.js'

const sidebar = {
    name: 'sidebar',
    next: 'https://rickandmortyapi.com/api/episode',
    prev: '',
    template: `
        <aside id="sidebar" class="sidebar">
            <ul id="sidebar__episodes" class="sidebar__episodes">
            </ul>
            <div id='button-container'></div>
        </aside>`,
    renderEpisodes:
        function (url = 'https://rickandmortyapi.com/api/episode') {
            get(`${url}`).then(data => {
                document.getElementById('sidebar__episodes').innerHTML = ''
                document.getElementById('button-container').innerHTML = ''
                const {info, results} = data;
                results.forEach(result => {
                    const episode =
                        `<li id='${result.id}'class='episodes'>
                            ${result.episode}
                         </li>`
                    render.renderComponent(episode, 'sidebar__episodes');
                })
                const next = `<button id="${this.name}__next" 
                                class="${this.name}__next">Next</button>`

                render.renderComponent(next, 'button-container')
                this.next = info.next
                this.prev = info.prev
                this.nextButtonListener();
            });
        },
    nextButtonListener: function () {
        document.getElementById('sidebar__next').addEventListener('click', () =>
            this.renderEpisodes(this.next)
        );
    }
};

export {sidebar}

