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

    db.collection('users').findOne({_id: ObjectID('62bea79016d64432f0827eef')}, (error, user) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(user)
    })

    db.collection('users').find({age: 22}).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').find({age: 22}).count((error, count) => {
        console.log(count)
    })

    db.collection('tasks').findOne({_id: new ObjectID('62beb3cf1c3aad1cc419d9a1')}, (error, task) => {
        if (error) {
            return console.log('Unable to fetch')
        }

        console.log(task)
    })

    db.collection('tasks').find({compledted: false}).toArray((error, tasks) => {
        console.log(tasks)
    })

})