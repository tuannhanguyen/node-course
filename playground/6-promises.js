const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([5,4,8])
        resolve([5,4,8])
        reject('This is error')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log('Error: ', error)
})