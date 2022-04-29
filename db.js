const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url)
	.then(() => {
		console.log('[db connection] Database connected')
	})
	.catch( error => {
		console.error('[db connection] Connection failed', error.message) 
	});
}

module.exports = connect;