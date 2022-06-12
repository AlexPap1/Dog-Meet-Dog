const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Pet extends Model {}

// create fields/columns for Post model
Pet.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        petname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_info: {
            //leaving as text until cloudinary images are setup
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'post',
              key: 'id'
            }
        }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'pet'
    }
    );

module.exports = Pet;
