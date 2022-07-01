// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectID} = require('mongodb')

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

    db.collection('users').insertOne({
        name: 'John',
        age: 27
    }, (error, result) => {
        if (error) {
          return  console.log('Unable to insert user')
        } 

        console.log(result.ops)
    })

    db.collection('users').insertMany([
        {
            name: 'Nguyen Vo Tuan Nhan',
            age: 22
        },
        {
            name: 'Huynh Thi My Linh',
            age: 22
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    db.collection('tasks').insertMany([
        {
            description: 'running',
            compledted: true
        }, {
            description: 'coding',
            compledted: true
        }, {
            description: 'cooking',
            compledted: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert task')
        }

        console.log(result.ops)
    })

})