const fs = require('fs')


const dataBuffer = fs.readFileSync('./1-json.json')
const jsonData = dataBuffer.toString()
const parseData = JSON.parse(jsonData)
parseData.age = 22
parseData.name = 'Nhan Nguyen'

const userJSON = JSON.stringify(parseData)
fs.writeFileSync('1-json.json', userJSON)


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Tom'
// }

// const bookJSON = JSON.stringify(book)

// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)

// console.log(parseData)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

