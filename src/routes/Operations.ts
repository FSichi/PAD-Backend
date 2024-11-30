import { Router } from 'express';
import { query } from 'express-validator';

import { validarCampos } from '../middlewares/index.ts';
import OperationController from "../controllers/OperationController.ts";

const router = Router();
const controller = new OperationController();

/**
 * @swagger
 * /operations/checkInventory:
 *   get:
 *     summary: Verifica el inventario de una sucursal
 *     tags:
 *       - Operaciones
 *     parameters:
 *       - in: query
 *         name: idSucursal
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la sucursal a consultar
 *     responses:
 *       200:
 *         description: Inventario de la sucursal
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idSucursal:
 *                   type: integer
 *                 nombreSucursal:
 *                   type: string
 *                 articulos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       idArticulo:
 *                         type: integer
 *                       codigoBarra:
 *                         type: string
 *                       cantidad:
 *                         type: integer
 *                       color:
 *                         type: string
 *                       categoria:
 *                         type: string
 *                       descripcion:
 *                         type: string
 *                       marca:
 *                         type: string
 *                       talle:
 *                         type: object
 *                         properties:
 *                           tipoTalle:
 *                             type: string
 *                           detalle:
 *                             type: string
 *       400:
 *         description: Parámetros inválidos
 */
router.get("/checkInventory", [
    query('idSucursal')
        .notEmpty().withMessage('El id de la sucursal es obligatorio')
        .isNumeric().withMessage('El id de la sucursal debe ser un número'),    
    validarCampos
], controller.checkInventory);

/**
 * @swagger
 * /operations/requestOrder:
 *   post:
 *     summary: Solicita un pedido para una sucursal
 *     tags:
 *       - Operaciones
 *     parameters:
 *       - in: query
 *         name: idSucursal
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la sucursal para la cual se realiza el pedido
 *     responses:
 *       200:
 *         description: Detalles del pedido solicitado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idSucursal:
 *                   type: integer
 *                 nombreSucursal:
 *                   type: string
 *                 pedido:
 *                   type: object
 *                   properties:
 *                     idPedido:
 *                       type: integer
 *                     fechaPedido:
 *                       type: string
 *                       format: date
 *                     fechaEntrega:
 *                       type: string
 *                       format: date
 *                     estado:
 *                       type: string
 *                 articulos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       idArticulo:
 *                         type: integer
 *                       codigoBarra:
 *                         type: string
 *                       cantidad:
 *                         type: integer
 *                       color:
 *                         type: string
 *                       categoria:
 *                         type: string
 *                       descripcion:
 *                         type: string
 *                       marca:
 *                         type: string
 *                       talle:
 *                         type: object
 *                         properties:
 *                           tipoTalle:
 *                             type: string
 *                           detalle:
 *                             type: string
 *       400:
 *         description: Parámetros inválidos
 */
router.post("/requestOrder", [
    query('idSucursal')
        .notEmpty().withMessage('El id de la sucursal es obligatorio')
        .isNumeric().withMessage('El id de la sucursal debe ser un número'),        
    validarCampos
], controller.requestOrder);

/**
 * @swagger
 * /operations/confirmOrder:
 *   put:
 *     summary: Confirma un pedido para una sucursal
 *     tags:
 *       - Operaciones
 *     parameters:
 *       - in: query
 *         name: idOrder
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del pedido a confirmar
 *     responses:
 *       200:
 *         description: Confirmación del pedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Orden 1 validada y confirmada con éxito"
 *       400:
 *         description: Parámetros inválidos
 */
router.put("/confirmOrder", [
    query('idOrder')
        .notEmpty().withMessage('El id de la orden es obligatorio')
        .isNumeric().withMessage('El id de la orden debe ser un número'),    
    validarCampos
], controller.confirmOrder);

export default router;
