const request = require('request')
const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ec3ceb0134bdf8b53a1fef665e810d2d&query= ' + lat + ',' + long
    request({url: url, json: true}, (err, response) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out.' + ' It feels like ' + response.body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast