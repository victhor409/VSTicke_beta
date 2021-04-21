const db = require('./db');

const Cliente = db.sequelize.define('cliente',{

    razaoSocial:{
        type:db.Sequilize.STRING
    },
    nomeFantasia:{
        type:db.Sequilize.STRING
    },
    cnpj:{
        type:db.Sequilize.STRING
    },
    longradouro:{
        type:db.Sequilize.STRING
    },
    conxRem:{
        type:db.Sequilize.STRING
    },
    tipoConxRem:{
        type:db.Sequilize.STRING
    }



});

module.exports=Cliente;
