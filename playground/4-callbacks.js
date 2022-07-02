// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const geocode = (address, callback) => {
//     setTimeout(() =>{
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)
// }

// geocode('vietnam', (data) =>{
//     console.log(data)
// })


// const add = (a, b, callback) => {
//    setTimeout(() =>{
//     callback(a + b)
//    }, 2000)
// }

// add(1,4, (sum) => {
//     console.log(sum)
// })




doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('This is error', undefined)
        callback(undefined, 'This is result')
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})