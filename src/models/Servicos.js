const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Servico = new Schema({

    username: {
        type:String
    },
    servico:{
        type:String
    },
    categoria:{
        type:String
    },
    valor:{
        type:String
    },
    descricao:{
        type:String
    }


})


mongoose.model('servico', Servico)