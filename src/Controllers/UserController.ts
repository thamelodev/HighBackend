import { Response, Request } from "express";
import { User } from "../Entities/UserModel";
import { Database } from "../Entities/Kernel/DatabaseKernel";
import { getRepository } from "typeorm";

export class UserController {
    static async create(req: Request, res: Response) {
        let repo = await Database.getConnection().manager.getRepository(User);

        let new_user: User = new User();

        new_user.firstName = "Julimar";
        new_user.lastName = "Melo";
        new_user.age = 10;

        await repo.save(new_user);

        res.status(200).json({ user: new_user });
    }

    static async index(req: Request, res: Response) {
        let repo = await Database.getConnection().manager.getRepository(User);

        res.status(200).json({
            users: [await repo.find()],
        });
    }
}
