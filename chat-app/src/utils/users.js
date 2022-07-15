const users = []

const addUser = ({id, username, room}) => {

    // Clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate data
    if (!username || !room) {
        return {
            error: 'Username and room is required'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.username === username && user.room === room
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'username is in use'
        }
    }

    // Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    
    if (index != -1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (roomName) => {
    roomName = roomName.toLowerCase().trim()
    return users.filter((user) => user.room === roomName)
}

addUser({
    id: 245,
    username: 'Nhan',
    room: 'hanh thuan'
})

addUser({
    id: 246,
    username: 'Sinh',
    room: 'hanh thuan'
})

addUser({
    id: 247,
    username: 'Linh',
    room: 'hanh duc'
})
console.log(users)
const usersInHanhThuan = getUsersInRoom('hanh thuan ')
console.log(usersInHanhThuan)

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}