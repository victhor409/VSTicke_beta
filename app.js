const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Ticket = require('./models/Ticket');
const Ususario = require('./models/usuario');
const Cliente = require('./models/cliente');
const db = require('./models/db');
const { sequelize } = require('./models/db');


//config
//template para teste
app.engine('handlebars',handlebars({defaultLayout: 'main'}));
app.set('view engine','handlebars');
//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get('/', function(req, res){
    res.send("Bem vindo ao VSoftware");
});

//cadastro de usuario
app.get('/cadUsuario',function(req, res){

    res.render('CadastroUsuario')
})

app.post('/addUsuario',function(req,res){
    Ususario.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        dataDeNascimento: req.body.dataDeNascimento,
        login: req.body.login,
        senha: req.body.senha
    }).then(()=>{
        res.redirect('/')
    }).catch(function(err){
        res.send("Erro ao cadastrar usuario"+ err);
    })
});

//cadastro de cliente
app.get('/cadastroDeCliente', function(req, res){
    res.render('CadastroCliente');
})

app.post('/addCliente', function(req, res){
    Cliente.create({
        razaoSocial: req.body.razaoSocial,
        nomeFantasia: req.body.nomeFantasia,
        cnpj:req.body.cnpj,
        longradouro:req.body.longradouro,
        conxRem:req.body.conxRem,
        tipoConxRem:req.body.tipoConxRem
    }).then(()=>{
        res.redirect('/');
    }).catch((err)=>{
        res.send("Erro ao cadastrar Ususario"+err)
    })
})

//Ticket
app.get('/Ticket', function(req,res){
    res.render('Ticket');
})

app.post('/addTicket', function(req,res){
    Ticket.create({
        titulo: req.body.titulo,
        cliente: req.body.cliente,
        cnpj:req.body.cnpj,
        tecnicoRes: req.body.tecnicoRes,
        descricao: req.body.descricao


    }).then(()=>{
        res.redirect('/');
    }).catch((err)=>{
        res.send("Erro ao Criar Ticket")
    })
})

app.get('/ListTickets', function(req,res){
    Ticket.findAll({order:[['id','DESC']]}).then((tickets)=>{
        res.render('ListaDeChamados',{tickets: tickets});
    })
})




//update
app.get('/updateTicket/:id', function(req, res){
    Ticket.findByPk(req.params.id)
      .then(tickets => {
        res.render('updateTicket', {
          id: req.params.id,
          titulo: tickets.titulo,
          cliente: tickets.cliente,
          cnpj: tickets.cnpj,
          tecnicoRes: tickets.tecnicoRes,
          descricao: tickets.descricao

        })
      })
      .catch(err => {
        res.send('Post não encontrado!')
      })
  })

app.post('/controllerUpdate/:id', function(req,res){
    Ticket.update({

        titulo:req.body.titulo,
        descricao:req.body.descricao

    },
    {
        where:{id:req.params.id}
    }).then(function(){
        res.redirect("/")
    }).catch(function(err){
        res.send("erro ao atualizar")
    })
    
});

//callback
app.listen(8083, function(){
    console.log("Servido Ativo!")
})