const store = require('./store');

function addChat(users) {
  
    const newChat = {
        users: users
    }
    return store.add(newChat);
}

async function listChats() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

module.exports = {
    addChat,
    listChats
}