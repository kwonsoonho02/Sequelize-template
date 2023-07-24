import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import TodoModel from '@models/todos.model'
import { logger } from '@utils/logger';


const sequelize = new Sequelize.Sequelize('todolist', 'root', '0414', {
  dialect: 'mysql',
  host: DB_HOST,
  port: 3306,
  timezone: '+09:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});
sequelize.authenticate();

const Users = UserModel(sequelize);
const TodoLists = TodoModel(sequelize);

Users.hasMany(TodoLists, {foreignKey : 'userId'})
TodoLists.belongsTo(Users, {foreignKey : 'userId'})

export const DB = {
  Users,
  TodoLists,
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};
