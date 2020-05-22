import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
    
    if (!req.headers["X-Access-Token"]) {
        res.status(400).json({ error: "Malformed request" });
        return;
    }

    let token = String(req.headers["X-Access-Token"]);

    try {
        req.decoded = jwt.verify(token, config.JWT_SECRET);
        next();
    } catch {
        res.status(403).json({ error: "Forbidden" });
    }
}

export { AuthMiddleware };
