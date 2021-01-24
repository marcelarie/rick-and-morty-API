import {render} from './render/render.js'
import {sidebar} from './components/sidebar/sidebar.js'
import {episodes} from './components/sidebar/episodes.js'
import {header} from './components/header/header.js'

render.renderComponent(header.template, 'root');
render.renderComponent(sidebar.template, 'root');

async function nombre() {
    const algo = await episodes.getSeasons();
    episodes.renderSeasons();
    console.log(algo)
}
nombre()

// setTimeout(episodes.renderSeasons, 5000);
// sidebar.renderEpisodes();
