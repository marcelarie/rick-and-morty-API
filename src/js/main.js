import {render} from './render/render.js'
import {sidebar} from './components/sidebar/sidebar.js'
import {episodes} from './components/sidebar/episodes.js'
import {header} from './components/header/header.js'
import {main} from './components/main/main.js'

render.renderComponent(header.template, 'root');
render.renderComponent(sidebar.template, 'root');
render.renderComponent(main.template, 'root');

episodes.getSeasons();



