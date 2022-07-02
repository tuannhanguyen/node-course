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

    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID('62bf06497d24ed2bb8650032')
    }, {
        $set: {
            name: 'My Linh'
        }
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });

    db.collection('tasks').updateMany({
        compledted: true
    }, {
        $set: {
            compledted: false
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
   

})