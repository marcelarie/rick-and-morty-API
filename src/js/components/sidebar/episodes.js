let episodes = {
    name: 'episodes',
    seasons: {},
    next: '',
    getSeasons: function (
        url = 'https://rickandmortyapi.com/api/episode') {
        return new Promise((resolve, reject) => {
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
                    };
                });

                // check for more episodes
                if (this.next) {
                    // this.getSeasons(this.next);
                    resolve(data)
                } else {
                    console.log(data)
                    resolve(data);
                }
                // }).then(function () {
                // episodes.renderSeasons()
                // console.log(episodes.seasons.length)
            })
        })
    },
    renderSeasons: function () {
    }
};

export {episodes}
