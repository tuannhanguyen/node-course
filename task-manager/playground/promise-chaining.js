const User = require('../src/models/user')
require('../src/db/mongoose')

const _id = "62c15bd475a57618f8cda78f"

User.findByIdAndUpdate(_id, { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});