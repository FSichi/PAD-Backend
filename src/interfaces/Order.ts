import { Inventory } from "./inventory";

export interface Order extends Inventory{
    pedido: {
        idPedido: number;
        fechaPedido: string;
        fechaEntrega: string;
        estado: 'Enviada' | 'Aprobada' | 'En camino' | 'Entregada';
    }
}