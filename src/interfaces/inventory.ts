export interface InventoryDBResponse {
    idSucursal: number;
    idInventario: number;
    cantidad: number;
    idStock: number;
    stockColor: string;
    stockTalle: string;
    stockTalleTipoTalle: string;
    idArticulo: number;
    codigoBarra: string;
    articuloCategoria: string;
    articuloDescripcion: string;
    articuloMarca: string;
    nombreSucursal: string;
};

export interface Inventory {
    idSucursal: number;
    nombreSucursal: string;
    articulos: Article[];
}

interface Article {
    // idInventario: number;
    idArticulo: number;
    codigoBarra: string;
    // idStock: number;
    cantidad: number;
    color: string;
    talle: {
        tipoTalle: string;
        detalle: string;
    }
    categoria: string;
    descripcion: string;
    marca: string;
}