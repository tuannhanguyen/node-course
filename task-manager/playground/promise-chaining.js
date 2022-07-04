const User = require('../src/models/user')
require('../src/db/mongoose')

const _id = "62be9c2b109c433b5c58dff0"

// User.findByIdAndUpdate(_id, { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 30 })
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age})

    return count
}

updateAgeAndCount('62c255b29c310d4128348653', 1)
    .then((count) => {
        console.log(count)
    }).catch((e) => {
        console.log(e)
    })