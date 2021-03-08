const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
require('./src/models/Produtos')
require('./src/models/Servicos')
require('./src/models/Usuarios')
require('./src/db/connect')
const Usuario = mongoose.model('usuario')
const Produto=mongoose.model('produto')
const Servico=mongoose.model('servico')
app.use(express.json())
app.use(cors());

// puxar dados dos produtos
app.get('/minhaconta/:username',cors(), async(req, res, next) => {
   
        const produtos=await Produto.find({"username": req.params.username})
        const servicos= await Servico.find({"username": req.params.username})
        const dados=[]
        if(produtos){
            dados.push(produtos)
        }
        if(servicos){
            dados.push(servicos)
        }
        return res.json(dados)
    
})
app.get('/produtos',cors(),async(req, res)=>{
    const produtos =await Produto.find()
    return res.json(produtos)
})

// puxar dados dos servicos
app.get('/servicos',cors(), (req, res, next) => {
    
        res.json(  result)

    
})

app.post('/login',async (req, res, next) => {
   
    const novoUsuario=new Usuario({
        email:   req.body.email  ,
        senha:   req.body.senha  
    })

    const usuario=await Usuario.findOne({username: req.body.username, senha: req.body.senha});
   if(usuario){
       return res.json({message: 'Logado', usuario: usuario})
   }
   else{
       return res.json({message: 'Acesso negado', })
   }
})




app.post('/cadastrarprodutos',async (req, res) => {
    const novoProduto=new Produto({
        username: req.body.username,
        servico:req.body.servico,
        categoria:req.body.categoria,
        valor:req.body.valor,
        descricao:req.body.descricao
       })
       novoProduto.save()
       return res.json({message: 'Produto cadastrado'})
});

// enviar dados cadastrarservicos
app.post('/cadastrarservicos', async(req, res) => {
   const novoServico=new Servico({
    username: req.body.username,
    servico:req.body.servico,
    categoria:req.body.categoria,
    valor:req.body.valor,
    descricao:req.body.descricao
   })
   novoServico.save()
   return res.json({message: 'Serviço cadastrado'})
});

// enviar dados cadastrar ou cadastrese
app.post('/cadastrese', async(req, res) => {
  
    const novoUsuario=new Usuario({
        email:   req.body.email  ,
        senha:   req.body.senha  ,
        username:req.body.username  ,
        cpf:     req.body.cpf  ,
        celular: req.body.celular  ,
        nis:     req.body.nis  ,
        nome:    req.body.nome  ,
    })
   const usuario=await Usuario.findOne({username: req.body.username});
   if(usuario){
       return res.json({message: 'Username já cadastrado'})
   }
   else{
       novoUsuario.save()
       return res.json({message: 'Usuário cadastrado', usuario:novoUsuario})
   }
});

// enviar dados contato
app.post('/contato', (req, res) => {

});

app.listen(3005, ()=>{
    console.log('Servidor ativo');
})
