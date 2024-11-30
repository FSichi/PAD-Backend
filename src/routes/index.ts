import { Express } from 'express';

// Importar los enrutadores
import AuthRouter from './Auth.ts';
import OperationsRouter from './Operations.ts';

// Enrutadores
const routerPaths = {
    AUTH: AuthRouter,
    OPERATIONS: OperationsRouter,
}

// Direcciones de la API
const routesPaths = {
    AUTH: '/api/auth',
    OPERATIONS: '/api/operations',
}

export const loadRouters = (app: Express) => {
    app.use(routesPaths.AUTH, routerPaths.AUTH);
    app.use(routesPaths.OPERATIONS, routerPaths.OPERATIONS);
};

export default loadRouters;