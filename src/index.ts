// Start-up Dependencies
import express from "express";
import { Router } from "./route";
import { Database } from "./Entities/Kernel/DatabaseKernel";
import config from "./config";

const app = express();

// Intialize Kernel Database
Database.intialize();

// Use Router
app.use(Router);

// Listen to port on config file
app.listen(3000 | config.PORT);
