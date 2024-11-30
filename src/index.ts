import express, { json, Request, RequestHandler, Response } from 'express';
import cors from 'cors';
import { notFoundURL} from './middlewares/index.ts';
import { loadRouters } from './routes/index.ts';
import { envVars } from './constants/env.constants.ts';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpecs } from './swagger.ts';

const app = express();

// Middlewares
app.use(cors());
app.use(json());

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve as unknown as RequestHandler, swaggerUi.setup(swaggerSpecs) as unknown as RequestHandler);

// Cargar los enrutadores
loadRouters(app);

// Direccion por Defecto
app.get('/', (_req: Request, res: Response) => {
    res.send('Programacion de Aplicaciones Distribuidas - Proveedor - API Consume');
})

app.use(notFoundURL);

// Escuchar peticiones
app.listen(envVars.port, () => {
    console.log(`Servidor corriendo en puerto ${envVars.port}`);
    console.log(`Swagger Docs disponible en http://localhost:${envVars.port}/api-docs`);
});