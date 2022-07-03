const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Passsword cannot contain "password" ')
            }
        },
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})

// const me = new User({
//     name: 'Huynh     ',
//     email: 'huynh123@gmail.com       ',
//     password: '      rrrrrrrr       '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    compledted: {
        type: Boolean,
        default: false
    }
})

const task = new Task({
    description: '        coding       ',
    compledted: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})