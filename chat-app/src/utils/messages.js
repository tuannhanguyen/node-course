const generateMessage = (text) => {
    return {
        text: text,
        createdAt: new Date().toString()
    }
}

module.exports = {
    generateMessage
}