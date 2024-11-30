import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export const validarCampos = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 'BAD REQUEST - Parameters are not valid',
            errors: errors.array(),
          });
    }

    next();
}

export default validarCampos;
