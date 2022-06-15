// Image Model - imports below
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Image Models via extend
class Image extends Model {}

// Create Image Table and Columns
Image.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        imageName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'post',
              key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: "image",
    }
);

// Export for External
module.exports = Image;