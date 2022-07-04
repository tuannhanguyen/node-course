const Task = require('../src/models/task')
require('../src/db/mongoose')

// Task.findByIdAndRemove("62c15478ab7a1e464c44998c").then((result) => {
//     console.log(result)  
//     return Task.countDocuments({ compledted: true })  
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err) 
// });

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ compledted: false })
    return count
}

deleteTaskAndCount("62c25cae9203aa45fc03ef71").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
