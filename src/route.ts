import express, { Request, Response } from "express";

// Controllers Import
import { UserController } from "./Controllers/UserController";

// Middlewares Import
import { AuthMiddleware } from "./Middlewares/AuthMiddleware";

// Router configuration
const Router = express.Router(); // Intialize the router

Router.use(express.json()); // Add body-parser to routes

// Routes
Router.get("/user", UserController.create);
Router.get("/users", UserController.index);

export { Router };
