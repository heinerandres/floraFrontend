import { ICategoria } from "./categoria";

export interface IProducto {
  _id?: string;
  categoria: ICategoria;
  nombre: string;
  slug: string;
  descripcion: string;
  precio: Number;
  cantidad: Number;
}