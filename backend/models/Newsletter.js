import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Newsletter = sequelize.define(
  'Newsletter',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        isEmail: true,
      },
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
  },
  {
    timestamps: true,
    tableName: 'newsletters',
  }
);

export default Newsletter;
