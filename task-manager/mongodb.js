// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectID} = require('mongodb')
const Db = require('mongodb/lib/db')

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').deleteMany({
            age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
   

})