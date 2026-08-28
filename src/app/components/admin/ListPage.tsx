'use client';
import { FlaskConical, Heart, HeartHandshake, Leaf, Plus, Search, Tag, TestTubeDiagonal } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { TableComponent } from "./TableComponent";
import { ColumnDef } from "@tanstack/react-table";
import Modal from "@/utilities/modal";
import { useState } from "react";
import { ICategoria } from "@/types/categoria";
import { CategoriaColumns } from "@/app/components/admin/tableColumns/categorias";
import { IAromas } from "@/types/aromas";
import { IBeneficios } from "@/types/beneficios";
import { IIngrediente } from "@/types/ingrediente";
import { ITiposPiel } from "@/types/tiposPiel";
import { AromasColumns } from "./tableColumns/aromas";
import { BeneficiosColumns } from "./tableColumns/beneficios";
import { IngredientesColumns } from "./tableColumns/ingredientes";
import { TiposPielColumns } from "./tableColumns/tiposPiel";

type Props<T> = {
  titulo: string;
  icon: keyof typeof icons;
  subtitulo: string;
  placeholderBuscar: string;
  textoBoton: string;
  data: T[];
};

const icons = {
    leaf: Leaf,
    tag: Tag,
    flaskConical: FlaskConical,
    testTubeDiagonal: TestTubeDiagonal,
    heart: Heart,
    heartHandshake: HeartHandshake,
};

export const ListPage = <T,> ({titulo, icon, subtitulo, placeholderBuscar, textoBoton, data} : Props<T>) => {
    const Icon = icons[icon];
    const [modalOpen, setModalOpen] = useState(false);
    const [tipo, setTipo] = useState("");
    const [successFunction, setSuccessFunction] =
        useState<((nombre: string) => void) | undefined>(undefined);


    /* setSuccessFunction(() => {
        console.log("Operación exitosa");
    }); */

    // Elemento seleccionado para editar
  const [elementoSeleccionado, setElementoSeleccionado] =
    useState<T | null>(null);
    /*
    * =========================
    * INSERTAR
    * =========================
    */
    const handleInsertar = () => {
        switch (titulo) {
            case "Categorías":
                setSuccessFunction(() => (nombre: string) => {
                    console.log("Insertar categoría:", nombre);
                });
                break;
            case "Aromas":
                setSuccessFunction(() => (nombre: string) => {
                    console.log("Insertar Aroma:", nombre);
                });
                break;
            case "Beneficios":
                setSuccessFunction(() => (nombre: string) => {
                    console.log("Insertar Beneficio:", nombre);
                });
                break;
            case "Ingredientes":
                setSuccessFunction(() => (nombre: string) => {
                    console.log("Insertar Ingrediente:", nombre);
                });
                break;
            case "Tipos de Piel":
                setSuccessFunction(() => (nombre: string) => {
                    console.log("Insertar TipoPiel:", nombre);
                });
                break;
        }
        setElementoSeleccionado(null);
        setTipo("Agregar");
        setModalOpen(true);
    };

    /*
    * =========================
    * EDITAR
    * =========================
    */
    const handleEditar = (item: T) => {
        setElementoSeleccionado(item);

        switch (titulo) {
            case "Categorías": 
                setSuccessFunction(() => (nombre: string) => {
                    const categoria = item as ICategoria;

                    console.log("Editar categoría:", categoria._id);
                    console.log("nombre", nombre);
                });
                break;
            case "Aromas": {
                setSuccessFunction(() => (nombre: string) => {
                    const aroma = item as IAromas;
                    console.log("Editar aroma:", aroma._id);
                    console.log("nombre", nombre);
                });
                break;
            }
            case "Beneficios": {
                setSuccessFunction(() => (nombre: string) => {
                    const beneficio = item as IBeneficios;
                    console.log("Editar beneficio:", beneficio._id);
                    console.log("nombre", nombre);
                });
                break;
            }
            case "Ingredientes": {
                setSuccessFunction(() => (nombre: string) => {
                    const ingrediente = item as IIngrediente;
                    console.log("Editar ingrediente:", ingrediente._id);
                    console.log("nombre", nombre);
                });
                break;
            }

            case "Tipos de Piel": {
                setSuccessFunction(() => (nombre: string) => {
                    const tipoPiel = item as ITiposPiel;
                    console.log("Editar tipo de piel:", tipoPiel._id);
                    console.log("nombre", nombre);
                });
                break;
            }
        }
        setModalOpen(true);
        setTipo("Editar");
    };

    /*
   * =========================
   * ELIMINAR
   * =========================
   */
  const handleEliminar = (item: T) => {
    switch (titulo) {
      case "Categorias": {
        const categoria = item as ICategoria;

        console.log("Eliminar categoría:", categoria._id);
        break;
      }

      case "Aromas": {
        const aroma = item as IAromas;

        console.log("Eliminar aroma:", aroma._id);
        break;
      }

      case "Beneficios": {
        const beneficio = item as IBeneficios;

        console.log("Eliminar beneficio:", beneficio._id);
        break;
      }

      case "Ingredientes": {
        const ingrediente = item as IIngrediente;

        console.log("Eliminar ingrediente:", ingrediente._id);
        break;
      }

      case "TiposPiel": {
        const tipoPiel = item as ITiposPiel;

        console.log("Eliminar tipo de piel:", tipoPiel._id);
        break;
      }
    }
    setModalOpen(true);
    setTipo("Editar");
  };

   /*
   * =========================
   * COLUMNAS
   * =========================
   */
  const getColumns = (): ColumnDef<T, unknown>[] => {
    switch (titulo) {
      case "Categorías":
        return CategoriaColumns(
          handleEditar as (item: ICategoria) => void,
          handleEliminar as (item: ICategoria) => void,
        ) as ColumnDef<T, unknown>[];

      case "Aromas":
        return AromasColumns(
          handleEditar as (item: IAromas) => void,
          handleEliminar as (item: IAromas) => void
        ) as ColumnDef<T, unknown>[];

      case "Beneficios":
        return BeneficiosColumns(
          handleEditar as (item: IBeneficios) => void,
          handleEliminar as (item: IBeneficios) => void
        ) as ColumnDef<T, unknown>[];

      case "Ingredientes":
        return IngredientesColumns(
          handleEditar as (item: IIngrediente) => void,
          handleEliminar as (item: IIngrediente) => void
        ) as ColumnDef<T, unknown>[];

      case "Tipos de Piel":
        return TiposPielColumns(
          handleEditar as (item: ITiposPiel) => void,
          handleEliminar as (item: ITiposPiel) => void
        ) as ColumnDef<T, unknown>[];

      default:
        return [];
    }
  };

    return (
        <div className="p-5">
            <div className="flex items-center h-25 p-5">
                <div>
                    <div className="flex">
                        <p className="text-2xl font-semibold pr-3">{titulo}</p>
                        <Icon className="text-acento mt-1"/>
                    </div>
                    <p className="text-sm text-gray-800">{subtitulo}</p>
                </div>
                <div className="flex gap-10 ml-auto">
                    <div className="relative w-90">
                        <input
                            type="text"
                            placeholder={placeholderBuscar}
                            className="w-full rounded-md border border-gray-200 py-3 pl-4 pr-10 text-sm outline-none focus:border-acento placeholder:text-gray-700"
                        />

                        <Search
                            size={20}
                            strokeWidth={1.5}
                            className="absolute right-3 top-4.5 -translate-y-1/2 text-gray-800"
                        />
                    </div>
                    <button 
                        className="flex items-center px-2 py-3 bg-acento text-white rounded-md text-sm mr-5 cursor-pointer"
                        onClick={() => {
                            handleInsertar();
                        }}
                        >
                        <Plus size={20} className="mr-2"/>
                        {textoBoton}
                    </button>
                </div>
            </div>

            <TableComponent data={data} columns={getColumns()} />
            <Modal 
                tipo={titulo}
                entidad={tipo}
                open={modalOpen}
                onOpenChange={setModalOpen}
                onSuccess={successFunction}
            />
        </div>
    )
}