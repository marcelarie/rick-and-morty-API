
function get(url) {
    return axios({
        url: url,
        method: 'get',
    }).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error)
    });
}

export {get}

