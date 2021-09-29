const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model {}

Reviews.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        videogame_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'videogame',
                key: 'id',
            }, 
        },
        review_description: {
            type: DataTypes.STRING,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            } 
        },
    },
    {
        sequelize, 
        timestamps: false, 
        freezeTableName: true,
        underscored: true,
        modelName: 'reviews'
    }
);

module.exports = Reviews;
