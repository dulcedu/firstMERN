// Eventario 

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('./MongoClient');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/create/event/',(req,res)=>{
    const {nombreOrganizador,nombreEvento,descripcionEvento,palabrasclavesEvento,fechaEvento,
        lugarEvento,horaEvento,capacidadEvento,urlEvento
    } = req.body
    console.log(nombreOrganizador)
    console.log(nombreEvento)
    console.log(descripcionEvento)
    MongoClient.createEvent(nombreOrganizador,nombreEvento,descripcionEvento,palabrasclavesEvento,fechaEvento,
        lugarEvento,horaEvento,capacidadEvento,urlEvento).then(function(createEvent){

        res.send({createEvent})
    })
})


app.post('/signupUser/',(req,res)=>{
    const {mail,name,username,password} = req.body
    console.log(name)
    console.log(username)
   
    MongoClient.signupUser(mail,name,username,password).then(function(signupUser){

        res.send({signupUser})
    })
})


app.post('/login/user/',(req,res) =>{
	const {username,password} = req.body  
	MongoClient.loginUser(username,password).then(function(user){
res.send({user})
})
})




app.listen(3000,() => {
	console.log('Magic happens in port 3000!');

});
//Pasar dos numeros y me regresa el resultado
//Crear un arreglo de enteros y validar si el parametro está en el arreglo
//Saber si dos parametros son multiplos.
  