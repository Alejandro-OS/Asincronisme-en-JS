let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

let api = 'https://rickandmortyapi.com/api/character/'

function fetchdata(url_api, callback){
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = (event) => {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}
//es necesario colocar lo ";" después de los if por que genera error si no
fetchdata(api, (error1, data1) => {
    if(error1) return console.error(error1);
    fetchdata(api + data1.results[0].id, (error2, data2) => {
        if(error2) return console.error(error2);
        fetchdata(data2.origin.url, (error3, data3) => {
            if (error3) return console.error(error3);
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})