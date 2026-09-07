import { IAromas } from "./aromas";
import { IBeneficios } from "./beneficios";
import { IImagenes } from "./imagenes";
import { IIngrediente } from "./ingrediente";
import { ITiposPiel } from "./tiposPiel";

export interface IVariantes {
  _id?: string;
  producto: string;
  nombre: string;
  slug: string;
  precio: number;
  stock: number;
  presentacion: number;
  unidadMedida: string;
  imagenes: IImagenes[];
  ingredientes?: IIngrediente[];
  aromas?: IAromas[];
  tiposPiel?: ITiposPiel[];
  beneficios?: IBeneficios[];

}