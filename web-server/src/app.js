const express = require('express')
const path = require('path')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Set up static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Nguyen Vo Tuan Nhan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Nguyen Vo Tuan Nhan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is some helpful text'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Sapa'
    })
})

app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})