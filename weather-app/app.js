const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address!')
} else {
    geocode(address, (err, {latitude, longitude, location}) => {
        if (err) {
            return console.log('Error: ', err)
        }
        forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                return console.log('Error: ', err)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
    
}

