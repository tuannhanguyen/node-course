const request = require('request')
const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ec3ceb0134bdf8b53a1fef665e810d2d&query= ' + lat + ',' + long
    request({ url, json: true}, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out.' + ' It feels like ' + body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast