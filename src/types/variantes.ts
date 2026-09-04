import { IImagenes } from "./imagenes";

export interface IVariantes {
  _id?: string;
  producto: string;
  nombre: string;
  precio: Number;
  stock: Number;
  presentacion: Number;
  unidadMedida: string;
  imagenes: IImagenes[];
}