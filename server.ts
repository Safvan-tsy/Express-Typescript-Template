import app from './src/app'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

process.on('uncaughtException', (err:Error) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
})

dotenv.config({ path: './.env' });

const port:number = Number(process.env.PORT) || 4000;
const DB :string = process.env.MONGODB_URI;

mongoose.connect(DB, {
  dbName: process.env.DB_NAME,
}).then(() => {
  app.listen(port, () => {
      console.log(`App started successfully on ${port}`);
  })
})
