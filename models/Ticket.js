const db = require('./db');

const Ticket = db.sequelize.define('tickets',{


    titulo:{
        type:db.Sequilize.STRING
    },

    cliente:{
        type:db.Sequilize.STRING
    },
    cnpj:{
        type:db.Sequilize.STRING
    },

    tecnicoRes:{
        type:db.Sequilize.STRING
    },
    
    descricao:{
        type:db.Sequilize.TEXT
    },

    finalizado:{
        type:db.Sequilize.BOOLEAN
    }



})

module.exports = Ticket;


