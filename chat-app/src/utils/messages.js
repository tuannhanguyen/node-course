const generateMessage = (username, text) => {
    return {
        username,
        text: text,
        createdAt: new Date()
    }
}

const generateLocationMessage = (username, url) => {
    return {
        username,
        url,
        createdAt: new Date()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage
}