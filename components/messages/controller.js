const socket = require('../../socket').socket;
const store = require('./store');

function addMessage(user, message,file) {
	return new Promise((resolve, reject) => {
		if (!user || !message) {
			console.error('[MessageController] No hay usuario o mensaje')
			reject('Los datos son incorrectos')
			return false
		}
		let fileUrl = '';
		if (file) {
			fileUrl = 'http://localhost:3000/app/files/' + file.filename;
		}
		const fullMessage = {
			user: user,
			message: message,
			date: new Date(),
			file : fileUrl,
		}
		
		store.add(fullMessage);
		socket.io.emit('message', fullMessage);
		resolve(fullMessage)
	})
}

function getMessages(filterUser) {
	return new Promise((resolve,reject) => {
		resolve(store.list(filterUser));
	})
}

function updateMessage(id,message) {
	if (!id || !message) {
		reject('Invalid Data');
		return false;
	}
	return new Promise(async (resolve,reject) => {
		const result = await store.updateText(id,message);
		resolve(result);

})
}

function deleteMessage(id) {
	return new Promise(async (resolve,reject) => {
		if (!id) {
			reject('Id invalido');
			return false;
		}
		store.remove(id)
		.then(() => {
			resolve();
		})
		.catch(e => {
			reject();
		})
	
	})

}
module.exports = {
	addMessage,
	getMessages,
	updateMessage,
	deleteMessage,
}
