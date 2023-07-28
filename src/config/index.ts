import { config } from "dotenv";
config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const { NODE_ENV, LOG_FORMAT, ORIGIN } = process.env;
export const LOG_DIR = "../logs";
export const DB_PORT = 3306;
export const PORT = process.env.PORT;
export const SECRET_KEY = "my_secret_key";
export const DB_USER = "root";
export const DB_PASSWORD = "0414";
export const DB_HOST = "127.0.0.1";
export const DB_DATABASE = "todolist";
