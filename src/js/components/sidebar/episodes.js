let episodes = {
    name: 'episodes',
    seasons: {},
    next: '',
    getSeasons: function (
        url = 'https://rickandmortyapi.com/api/episode') {
        axios.get(url).then(({data}) => {
            // save url of next batch
            this.next = data.info.next;

            // split episodes in seasons
            data.results.forEach(episode => {
                const season = episode.episode.slice(0, 3);
                if (this.seasons[`${season}`]) {
                    this.seasons[`${season}`].push(episode)
                } else {
                    this.seasons[`${season}`] = [];
                    this.seasons[`${season}`].push(episode)
                };
            });

            // check for more episodes
            this.next ? this.getSeasons(this.next) : this.renderSeasons();
        })
    },
    renderSeasons: function () {
        Object.keys(this.seasons).forEach(season => {
            const ul = `<ul id="${season}" class="">${season}</ul>`;
            const sidebar = document.getElementById('sidebar__seasons');
            sidebar.insertAdjacentHTML('beforeend', ul);

            //renderEpisodes
            const episodes = this.seasons[season]
            episodes.forEach(episode => {
                this.renderEpisodes(season, episode);
            })
        })
    },
    renderEpisodes: function (season, episode) {
        const li = `<li id="${episode.id}" class="sidebar__episodes">${episode.name}</li>`;
        const ul = document.getElementById(season);
        ul.insertAdjacentHTML('beforeend', li);
    }

};

export {episodes}
