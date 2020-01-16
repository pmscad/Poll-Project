const Sequelize = require("sequelize");
const sequelize = new Sequelize("pollApp", "root", "test", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;