import dotenv from "dotenv";
dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  mongoUrl: string;
  clientUrl: string;
  serverUrl: string;
  jwtSecret: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongoUrl: process.env.MONGO_URL || "",
  clientUrl: process.env.CLIENT_URL || "",
  serverUrl: process.env.SERVER_URL || "",
  jwtSecret: process.env.JWT_SECRET || "defaultsecret",
};

export default config;
