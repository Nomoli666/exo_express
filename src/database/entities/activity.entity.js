import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

const Activity = sequelize.define('Activities', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},{
  tableName: 'Activity',
});

export default Activity;
