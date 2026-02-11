import sequelize from './config.js';
import Destination from './entities/destination.entity.js';
import Activity from './entities/activity.entity.js';

Activity.belongsTo(Destination, {
  as: 'destination',
  foreignKey: {
    allowNull: false,
  },
});

Destination.hasMany(Activity, {
  as: 'activity',
  foreignKey: 'destinationId',
});
export default {sequelize, Destination, Activity};