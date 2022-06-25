const request = require('request')
const geocode = require('./utils/geocode.js')

// const url = 'http://api.weatherstack.com/current?access_key=ec3ceb0134bdf8b53a1fef665e810d2d&query=37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out.' + ' It feels like ' + response.body.current.feelslike + ' degress out.' )
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibmhhbm52dCIsImEiOiJjbDRzNWhyZTcxMXFxM2pzODJlNGgzdDVnIn0.NI2z-yRwzYX1HPLZ349GAA&limit=1'

// request({url: url, json: true}, (err, response) => {

//     if (err) {
//         console.log("Unable to connect to weather service!")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out.' + ' It feels like ' + response.body.current.feelslike + ' degress out.' )
//     }
// })

// request({url: geocodeURL, json: true}, (err, response) => {

//     if (err) {
//         console.log("Unable to connect to weather service!")
//     } else if (response.body.features.length == 0) {
//         console.log("Unable to find location. Try another search.")
//     } else {
//         console.log(response.body.features[0].center[1], response.body.features[0].center[0])
//     }
// })

geocode('boston', (err, data) => {
    console.log('Error: ', err)
    console.log('Data: ', data)
})
