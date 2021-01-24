import {render} from './render/render.js'
import {sidebar} from './components/sidebar/sidebar.js'
import {header} from './components/header/header.js'


render.renderComponent(header.template, 'root');
render.renderComponent(sidebar.template, 'root');

sidebar.renderEpisodes();
