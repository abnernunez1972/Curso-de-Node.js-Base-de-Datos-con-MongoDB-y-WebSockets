const Model = require('./model');

function addUser(user) {
const Myuser = new Model(user);
return Myuser.save();
}

function listUsers() {
    return Model.find();
    }
    

module.exports = {
    add: addUser,
    list: listUsers,
}