module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('task', {
    title: DataTypes.STRING,
    complete: DataTypes.STRING,
  });

  return Task;
};
