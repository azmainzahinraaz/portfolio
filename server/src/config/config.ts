import dotenv from "dotenv";
dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  forceDNSChange: boolean;
  mongoUrl: string;
  clientUrl: string;
  serverUrl: string;
  jwtSecret: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  forceDNSChange: process.env.FORCE_DNS_CHANGE === "true" || false,
  mongoUrl: process.env.MONGO_URL || "",
  clientUrl: process.env.CLIENT_URL || "",
  serverUrl: process.env.SERVER_URL || "",
  jwtSecret: process.env.JWT_SECRET || "defaultsecret",
};

export default config;
