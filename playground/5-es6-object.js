const name = 'Nhan'
const userAge = 22

// const user = {
//     name,
//     age: userAge,
//     location: 'saigon'
// }

// console.log(user)

const product = {
    label: 'samsung a52',
    price: 3,
    stock: 200,
    salePrice: undefined,
    //rating: 4.2
}

// const {label: labelProduct, stock, rating = 5} = product

// console.log(rating)

const tracsaction = (type, {label = 'label-default', stock = 2} = {}) => {
    console.log(type, label, stock)
}

tracsaction('order', product)