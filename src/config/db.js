const db_configs = require('./config.json')
const Sequelize = require('sequelize')


const connection = new Sequelize(
    db_configs.development.database,
    db_configs.development.username,
    db_configs.development.password,
    {
      host: db_configs.development.host,
      dialect: db_configs.development.dialect,
      port : 3306,
      logging : false
    }
  )
  
if(connection.authenticate())
console.log('Connected to database');
else{
  console.log('Could not connect to database');
}

module.exports = connection