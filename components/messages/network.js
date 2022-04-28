const express = require('express')
const router = express.Router()

// Modulos locales
const response = require('../../network/response')
const controller = require('./controller')

//!||
router.get('/', (req, res) => {
	controller.getMessages()
	.then((messageList) => {
		response.success(req,res,messageList,200);

	})
	.catch(e => {
		response.error(req,res,'Unpectex Error ',500)
	})
});	
//!||
router.post('/', (req, res) => {
	//? Enviamos info de el req a el archivo -> controller lo que retorna una promesa
	//? Después recibimos la response de el archivo response y enviamos success o error
	controller // -> Controller
		.addMessage(req.body.user, req.body.message)
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

//!||
router.delete('/', (req, res) => {
	//console.log(req.headers)
	console.log(req.body)
	console.log(req.query)
	res.header({
		Valor: 'Personalizado',
	})
	//?Enviamos un send desde otras funciones en otro archivo (response)
	if (req.query.error == 'ok') {
		response.error(
			req,
			res,
			'Tu peticion por url no puede ser completada',
			403,
			'Parametro rechazado',
		)
	} else {
		response.error(
			req,
			res,
			'hola desde delete aqui te retornaré un 404 :B',
			403,
			'Trataron de usar delete',
		)
	}
})

module.exports = router