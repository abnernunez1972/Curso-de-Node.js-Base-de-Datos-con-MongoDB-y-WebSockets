const express = require('express')
const router = express.Router()
const multer = require('multer');
const response = require('../../network/response')
const controller = require('./controller')
//

const upload = multer({
	dest: 'public/files/',
});

router.get('/', (req, res) => {
	const filterMessages = req.query.user || null;
	controller.getMessages(filterMessages)
	.then((messageList) => {
		response.success(req,res,messageList,200);

	})
	.catch(e => {
		response.error(req,res,'Unpectex Error ',500)
	})
});	
//!||
router.post('/',upload.single('file'), (req, res) => {
	controller // -> Controller
		.addMessage(req.body.user, req.body.message,req.file)
		.then(fullMessage => {
			response.success(req, res, fullMessage, 201, 'Datos recibidos') // -> Response
		})
		.catch(() => {
			response.error(
				// -> Response error
				req,
				res,
				'Informacion invalida',
				403,
				'El usuario no ha introducido datos correctos',
			)
		})
	res.header({
		//-> Envía un header a el cliente
		Valor: 'Personalizado',
	})
})

router.patch('/:id', (req, res) => {
 controller.updateMessage(req.params.id,req.body.message)
 .then((data) =>{
	response.success(req,res,data,200);
	})
.catch(e => {
	response.error(req,res,'Error Interno',e);
})

})

//!||
router.delete('/:id', (req, res) => {
	controller.deleteMessage(req.params.id)
	.then(() => {
		response.success(req,res,`usuario ${req.params.id} eliminado `,200);	
	})
	.catch(e => {
		response.error(req,res,'Error Interno',e);
	})
	
})

module.exports = router