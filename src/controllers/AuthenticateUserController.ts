import { Request, response, Response } from "express";
import { AuthenticateUserSerivce } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { code } = request.body;
        const service = new AuthenticateUserSerivce();

        try {
            const result = await service.execute(code);
            return response.json(result);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
}

export { AuthenticateUserController };