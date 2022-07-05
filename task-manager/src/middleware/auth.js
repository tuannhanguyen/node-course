const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer', '')
        console.log(token)
    } catch (error) {
        res.status(401).send({ error: 'Pleaes authenticate.' })
    }
}

module.exports = auth