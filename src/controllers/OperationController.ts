import { Request, Response } from "express";

import { handleSuccessResponse, handleErrorResponse } from "../messages/HTTPResponse.ts";
import OperationService from "../services/OperationService.ts";

class OperationController {

    private operationService: OperationService;

    constructor() {
        this.operationService = new OperationService();
    }

    public checkInventory = async (req: Request, res: Response): Promise<void> => {

        const { idSucursal } = req.query as { idSucursal: string };

        try {
            const responseData = await this.operationService.checkInventory(idSucursal);
            handleSuccessResponse(res, 200, responseData);
        } catch (error) {
            handleErrorResponse(res, error);
        }
    }

    public requestOrder = async (req: Request, res: Response): Promise<void> => {

        const { idSucursal } = req.query as { idSucursal: string };

        try {
            const responseData = await this.operationService.requestOrder(idSucursal);
            handleSuccessResponse(res, 200, responseData);
        } catch (error) {
            handleErrorResponse(res, error);
        }
    }

    public confirmOrder = async (req: Request, res: Response): Promise<void> => {

        const { idOrder } = req.query as { idOrder: string };

        try {
            const responseData = await this.operationService.confirmOrder(idOrder);
            handleSuccessResponse(res, 200, responseData);
        } catch (error) {
            handleErrorResponse(res, error);
        }
    }

}

export default OperationController;