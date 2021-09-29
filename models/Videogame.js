const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class VideoGame extends Model {}

VideoGame.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        videogame_name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        undescored: true, 
        modelName: 'videogame'
    }
);

module.exports = VideoGame;