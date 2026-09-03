import { ICategoria } from "./categoria";
import { IImagenes } from "./imagenes";
import { IVariantes } from "./variantes";

export interface IProducto {
  _id?: string;
  nombre: string;
  slug: string;
  descripcion: string;
  categoria: ICategoria;
  imagenes: IImagenes[];
  variantes: IVariantes[];
  precio: Number;
  cantidad: Number;
}