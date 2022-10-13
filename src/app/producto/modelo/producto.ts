export interface Producto {
  imagen: string;
  nombre: string;
  detale: string;
  precio: number;
  stock: number;
}

export interface ProductoConId extends Producto {
  id: number;
}
