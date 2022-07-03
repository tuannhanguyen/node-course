const Task = require('../src/models/task')
require('../src/db/mongoose')

Task.findByIdAndRemove("62c15478ab7a1e464c44998c")
    .then((result) => {
        console.log(result)  
        return Task.countDocuments({ compledted: true })  
    }).then((result) => {
        console.log(result)
    }).catch((err) => {
       console.log(err) 
    });


