const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Usuario = new Schema({
    email: {
        type: String
    },
    senha: {
        type: String
    },
    cpf:{
        type:String
    },
    username: {
        type:String
    },
    celular:{
        type:String
    },
    nis:{
        type:String
    },
    nome:{
        type: String
    }
})



mongoose.model('usuario', Usuario)