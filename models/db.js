const Sequelize = require('sequelize');
const sequelize = new Sequelize('Ticket', 'root','123',{
    host:"localhost",
    dialect: "mysql"
});

module.exports = {
    Sequilize: Sequelize,
    sequelize: sequelize
}


