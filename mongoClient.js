
const MongoClient = require('mongodb').MongoClient;
const db =require('./configDB')

function createEvent(
                        nombreOrganizador,
                        nombreEvento,
                        descripcionEvento,
                        palabrasclavesEvento,
                        fechaEvento,
                        lugarEvento,
                        horaEvento,
                        capacidadEvento,
                        urlEvento
                    ){
	return MongoClient.connect(db.url).then(
		function (client) {
			let db = client.db('eventario')
			let collections = db.collection('eventos')
			let data = {
                        "nombreOrganizador" :nombreOrganizador,
                        "nombreEvento" :nombreEvento,
                        "descripcionEvento" :descripcionEvento,
                        "palabrasclavesEvento" :palabrasclavesEvento,
                        "fechaEvento" :fechaEvento,
                        "lugarEvento" :lugarEvento,
                        "horaEvento" :horaEvento,
                        "capacidadEvento" :capacidadEvento,
                        "urlEvento " :urlEvento,
			}
			return collections.insert(data)
		}).then(function(docs){
			return docs

		})
}


function signupUser(mail,name,username,password){
	return MongoClient.connect(db.url).then(
		function (client) {
			let db = client.db('eventario')
			let collections = db.collection('users')
			let data = {
				"mail":mail,
				"name":name,
				"username":username,
				"password":password
			}
			return collections.insert(data)
		}).then(function(docs){
			return docs

		})
}


function loginUser(username,password)
{
	return MongoClient.connect(db.url).then(function(client)
	{
			let db = client.db('eventario')
			let collections = db.collection('users')
			
			return collections.find({"username":username,"password":password}).toArray()
			}).then(function(docs){
				return docs
			}).catch(function(err){
							return err

			})
}


function findEvent(nombreEvento)
{
	return MongoClient.connect(db.url).then(function(client)
	{
			let db = client.db('eventario')
			let collections = db.collection('eventos')
			
			return collections.find({"palabrasclavesEvento":palabrasclavesEvento}).toArray()
			}).then(function(docs){
				return docs 
			}).catch(function(err){
							return err

			})
}

module.exports.createEvent =createEvent
module.exports.signupUser =signupUser
module.exports.loginUser =loginUser
module.exports.findEvent =findEvent