import "dotenv/config";
import express from "express";
import "./shared/services/TranslationsYup.ts";

import { router } from "./routes/index.ts";

const server = express();

server.use(express.json());

server.use(router);

export { server };
