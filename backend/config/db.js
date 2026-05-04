import { Sequelize } from 'sequelize';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../data/vantedge-security.db');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ SQLite connected successfully');
    
    // Sync all models with the database
    await sequelize.sync({ alter: false });
    console.log('✅ Database models synchronized');
    
    return true;
  } catch (error) {
    console.error('❌ SQLite connection failed:', error.message);
    process.exit(1);
  }
};

export { sequelize, connectDB };
export default connectDB;
