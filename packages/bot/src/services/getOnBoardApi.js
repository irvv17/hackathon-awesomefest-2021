const fetch = require("node-fetch");

const base_url = 'https://sandbox.getonbrd.dev/api/v0'
function searchJobs(query = 'php', per_page = 2, page = 1, expand = ['company']) {
    return fetch(`${base_url}/search/jobs?query=${query}&per_page=2&page=1&expand=["company"]`)
    .then(res=> {
        return res.json()
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error)
    })
}
module.exports = { searchJobs }