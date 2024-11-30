import { AxiosInstance } from "../db/api/axiosInstance.ts";
import { INVENTORY_API } from "../db/constants/api.constants.ts";
import { Inventory, InventoryDBResponse } from "../interfaces/inventory.ts";
import { Order } from "../interfaces/Order.ts";
import { handleProcessError } from "../messages/ErrorHandlers.ts";

class OperationService {

    public checkInventory = async (idSucursal: string): Promise<Inventory> => {
        try {

            const response = await AxiosInstance.get<InventoryDBResponse[]>(`${INVENTORY_API}`, {
                params: { idSucursal },
            });

            const inventoryRegistry: Inventory = {
                idSucursal: Number(idSucursal),
                nombreSucursal: response.data[0].nombreSucursal,
                articulos: response.data.map((article) => ({
                    idArticulo: article.idArticulo,
                    codigoBarra: article.codigoBarra,
                    cantidad: article.cantidad,
                    color: article.stockColor,
                    categoria: article.articuloCategoria,
                    descripcion: article.articuloDescripcion,
                    marca: article.articuloMarca,
                    talle: {
                        tipoTalle: article.stockTalleTipoTalle,
                        detalle: article.stockTalle,
                    },
                })),
            }

            return inventoryRegistry;

        } catch (error) {
           return handleProcessError({ status: (error as any).status, error: (error as any).message || '' });
        }
    }

    public requestOrder = async (idSucursal: string): Promise<Order> => {
        try {

            const response = await AxiosInstance.get<InventoryDBResponse[]>(`${INVENTORY_API}`, {
                params: { idSucursal },
            });

            const fechaEntrega = new Date();
            fechaEntrega.setDate(fechaEntrega.getDate() + 10);


            const orderRegisty: Order = {
                idSucursal: Number(idSucursal),
                nombreSucursal: response.data[0].nombreSucursal,
                pedido:{
                    idPedido: 1,
                    fechaPedido: new Date().toLocaleDateString(),
                    fechaEntrega: fechaEntrega.toLocaleDateString(),
                    estado: 'Enviada',
                },
                articulos: response.data.map((article) => ({
                    idArticulo: article.idArticulo,
                    codigoBarra: article.codigoBarra,
                    cantidad: article.cantidad,
                    color: article.stockColor,
                    categoria: article.articuloCategoria,
                    descripcion: article.articuloDescripcion,
                    marca: article.articuloMarca,
                    talle: {
                        tipoTalle: article.stockTalleTipoTalle,
                        detalle: article.stockTalle,
                    },
                }))
            }

            return orderRegisty;

        } catch (error) {
           return handleProcessError({ status: (error as any).status, error: (error as any).message || '' });
        }
    }

    public confirmOrder = async (idOrder: string): Promise<string> => {
        try {

            // const response = await AxiosInstance.get<InventoryDBResponse[]>(`${INVENTORY_API}`, {
            //     params: { idSucursal },
            // });

            return `Orden ${idOrder} validada y confirmada con éxito`;

        } catch (error) {
           return handleProcessError({ status: (error as any).status, error: (error as any).message || '' });
        }
    }

}

export default OperationService;