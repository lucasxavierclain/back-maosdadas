const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Produto = new Schema({

    username: {
        type:String
    },
    produto:{
        type:String
    },
    categoria:{
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


mongoose.model('produto', Produto)