import jwt from "jsonwebtoken";

declare global {
    namespace Express {
        export interface Request {
            decoded?: string | object;
        }
    }
}
