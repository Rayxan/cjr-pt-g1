const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
var path = require('path')
const app = express();

var login = "admin";
var password = "123456";

app.use(session({secret: 'a2jhsdha3shjk5dsa'}))
app.use(bodyParser.urlencoded({extended:true})) //Recuperar dados de login
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// app.use('/public', express.static(path.join(__dirname, 'public')));

app.post('/',(req,res)=>{
    if(req.body.password == password && req.body.login == login){
        //Logado com sucesso
        req.session.login = login;
        res.render('logado', {login: login});
    }else{
        res.render('index');
    }
})

app.get('/', (req,res)=>{
    if(req.session.login){
        res.render('logado', {login: login});
        console.log('O usuário ' + req.session.login + ' está logado no sistema')
    }else{
        res.render('index');
    }
})

app.listen(port,() =>{
    console.log('Servidor rodando')
})