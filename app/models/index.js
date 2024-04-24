const dbConfig = require('../config/db.config.js');
const sequelizeConfig = require('../config/sequelize.config.js');

let Sequelize = sequelizeConfig.Sequelize;
let sequelize = sequelizeConfig.sequelize;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.uploads = require('./uploads.model.js')(sequelize, Sequelize);

module.exports = db;
