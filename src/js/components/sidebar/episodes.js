import {get} from '../../api/api.js'

const episodes = {
    name: 'episodes',
    seasons: {},
    next: '',
    getEpisodes: function (url = 'https://rickandmortyapi.com/api/episode') {
        get(url).then(data => {
            this.next = data.info.next;

            data.results.forEach(episode => {
                const season = episode.episode.slice(0, 3);
                if (this.seasons[`${season}`]) {
                    this.seasons[`${season}`].push(episode.episode)
                } else {
                    this.seasons[`${season}`] = [];
                }
            });
            console.log(this.seasons);
            if (this.next) {
                this.getEpisodes(this.next);
            }
        })
    }
}

export {episodes}
