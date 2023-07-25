import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, LOG_FORMAT, ORIGIN } = process.env;
export const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = process.env;
export const LOG_DIR = '../logs'
export const DB_PORT = 3306;
export const PORT = process.env.PORT
export const SECRET_KEY = 'my_secret_key'