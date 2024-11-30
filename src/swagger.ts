import swaggerJSDoc from 'swagger-jsdoc';

const isProduction = process.env.NODE_ENV === 'production';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Proveedor de TIENDITA', 
      version: '1.0.0',
      description: 'Documentación de la API de Tiendita',
    },
    servers: [
      {
        url: isProduction
          ? 'https://tu-dominio-en-produccion.com/api' // URL del servidor en producción
          : 'http://localhost:4000/api', // URL local en desarrollo
        description: isProduction ? 'Servidor de Producción' : 'Servidor Local',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
