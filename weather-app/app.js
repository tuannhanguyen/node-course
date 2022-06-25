const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address!')
} else {
    geocode(address, (err, data) => {
        if (err) {
            return console.log('Error: ', err)
        }
        forecast(data.latidute, data.longidute, (err, forecastData) => {
            if (err) {
                return console.log('Error: ', err)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
    
}

