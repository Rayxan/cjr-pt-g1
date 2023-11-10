const express = require('express');
const session = require('express-session');

const port = 3000;
var path = require('path')
const app = express();

app.use(session({secret: 'a2jhsdha3shjk5dsa'}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));


app.post('/',(req,res)=>{
    res.render('index');
})

app.get('/', (req,res)=>{
    res.render('index');
})

app.listen(port,() =>{
    console.log('Servidor rodando')
})