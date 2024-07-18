import dotenv from 'dotenv';
dotenv.config();

const config = {
  host: process.env.HOST,
  port: Number(process.env.PORT),
  db: {
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
};

export default config;
