import { Connection, createConnection } from "typeorm";

// Model Importation
import { User } from "../UserModel";
import config from "../../config";

export class Database {
    static connection: Connection;

    static async intialize() {
        this.connection = await createConnection({
            type: "mariadb",
            username: config.DB_LOGIN,
            password: config.DB_PASS,
            database: config.DB_NAME,
            port: config.DB_PORT,
            entities: [User],
        });

        await this.connection.synchronize(config.DB_DROP_SYNC);

        if (!this.connection.isConnected) {
            console.log("Database connection error!");
            process.exit(1);
        }
    }

    static getConnection(): Connection {
        return this.connection;
    }
}
