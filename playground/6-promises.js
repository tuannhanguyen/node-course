// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve([5,4,8])
//         resolve([5,4,8])
//         reject('This is error')
//     }, 2000)
// })

// doWorkPromise.then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(3,4).then((sum) => {
//     console.log(sum)

//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

add(1,2).then((sum) => {
    console.log(sum)
    return add(sum, 3)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 3)
}).then((sum3) => {
    console.log(sum3)
}).catch((e) => {
    console.log(e)
})