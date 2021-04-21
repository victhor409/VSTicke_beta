const db = require('./db');

const Usuario = db.sequelize.define('usuarios',{
    nome:{
        type:db.Sequilize.STRING
    },
    sobrenome:{
        type:db.Sequilize.STRING
    },
    dt_nascimento:{
        type:db.Sequilize.DATE
    },
    login:{
        type:db.Sequilize.STRING
    },
    senha:{
        type:db.Sequilize.STRING
    }


});

module.exports=Usuario;
