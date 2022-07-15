const generateMessage = (text) => {
    return {
        text: text,
        createdAt: new Date()
    }
}

const generateLocationMessage = (url) => {
    return {
        url,
        createdAt: new Date()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}