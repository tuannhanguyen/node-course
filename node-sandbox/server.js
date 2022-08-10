import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
const port = process.env.PORT || 5500

app.use(express.json())

const books = [{
    id: 1,
    name: '123',
    author: 'ABC'
},
{
    id: 2,
    name: '456',
    author: 'XYZ'
}]

const auth = (req, res, next) => {
    const authorizationHeader = req.header('Authorization')
    const token = authorizationHeader.split(' ')[1]

    if (!token) {
        res.status(401).send('Not auth')
    }

    jwt.verify(token, 'thisismyproject', (err, data) => {
        if (err) {
            return res.send(err)
        }
        next()
    })
}

app.get('/books',auth, (req, res) => {
    res.send({status: 'success', data: books})
})

app.post('/login', (req, res) => {
    const data = req.body
    const token = jwt.sign(data, 'thisismyproject', {expiresIn: 30})

    res.send({token})
})


app.listen(port, () => {
    console.log(`server is on port ${port}`)
})