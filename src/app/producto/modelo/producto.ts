export interface Producto {
  imagen: string;
  nombre: string;
  detalle: string;
  precio: number;
  stock: number;
}
export interface ProductoConID extends Producto {
  id: number;
}
