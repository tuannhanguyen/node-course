const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoibmhhbm52dCIsImEiOiJjbDRzNWhyZTcxMXFxM2pzODJlNGgzdDVnIn0.NI2z-yRwzYX1HPLZ349GAA&limit=1'
    request({url: url, json: true}, (err, response) => {
        if (err) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.features.length == 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latidute: response.body.features[0].center[1],
                longidute: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode