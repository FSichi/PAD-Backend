import { Request, Response } from "express";

import { handleErrorLogin, handleSuccessResponse } from "../messages/HTTPResponse.ts";
import AuthService from "../services/AuthService.ts";

class AuthController {

    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public login = async (req: Request, res: Response): Promise<void> => {

        const { correo, password } = req.body;

        try {
            const { token, usuario } = await this.authService.checkStatusForLogin(correo, password);
            handleSuccessResponse(res, 200, { authenticated: true, user: usuario, token: token });
        } catch (error) {
            handleErrorLogin(res, error);
        }
    }

}

export default AuthController;