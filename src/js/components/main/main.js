const main = {
    name: 'main',
    template: ` <main id="main"></main> `,
    renderEpisode: function (data) {
        const main = document.getElementById('main')
        console.log(data)
    }
}

export {main}
