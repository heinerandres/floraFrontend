'use client';
import { FlaskConical, Heart, HeartHandshake, Leaf, Plus, Search, Tag, TestTubeDiagonal } from "lucide-react";
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
import { crearCategoria, editarCategoria, eliminarCategoria } from "@/services/api/server/categorias";
import { useRouter } from 'next/navigation';
import { crearAroma, editarAroma, eliminarAroma } from "@/services/api/server/aromas";
import { crearBeneficios, editarBeneficio, eliminarBeneficio } from "@/services/api/server/beneficios";
import { crearIngrediente, editarIngrediente, eliminarIngrediente } from "@/services/api/server/ingredientes";
import { crearTiposPiel, editarTiposPiel, eliminarTipoPiel } from "@/services/api/server/tiposPiel";
import Swal from "sweetalert2";

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
    const router = useRouter();
    const Icon = icons[icon];
    const [modalOpen, setModalOpen] = useState(false);
    const [tipo, setTipo] = useState("");
    const [_nombre, set_Nombre] = useState("");
    const [filtro, setFiltro] = useState("");
    const [successFunction, setSuccessFunction] =
        useState<((nombre: string) => void) | undefined>(undefined);

    /*
    * =========================
    * INSERTAR
    * =========================
    */
    const handleInsertar = () => {
        switch (titulo) {
            case "Categorías":
                setSuccessFunction( () => async (nombre: string) => {
                    const respuesta = await crearCategoria({nombre});
                    if (respuesta.ok) router.push('/admin/categorias');
                    else console.log(respuesta);
                });
                break;
            case "Aromas":
                setSuccessFunction(() => async (nombre: string) => {
                    const respuesta = await crearAroma({nombre});
                    if (respuesta.ok) router.push('/admin/aromas');
                    else console.log(respuesta);
                });
                break;
            case "Beneficios":
                setSuccessFunction(() => async (nombre: string) => {
                    const respuesta = await crearBeneficios({nombre});
                    if (respuesta.ok) router.push('/admin/beneficios');
                    else console.log(respuesta);
                });
                break;
            case "Ingredientes":
                setSuccessFunction(() => async (nombre: string) => {
                    const respuesta = await crearIngrediente({nombre});
                    if (respuesta.ok) router.push('/admin/ingredientes');
                    else console.log(respuesta);
                });
                break;
            case "Tipos de Piel":
                setSuccessFunction(() => async (nombre: string) => {
                    const respuesta = await crearTiposPiel({nombre});
                    if (respuesta.ok) router.push('/admin/tiposPiel');
                    else console.log(respuesta);
                });
                break;
        }
        setTipo("Agregar");
        set_Nombre("");
        setModalOpen(true);
    };

    /*
    * =========================
    * EDITAR
    * =========================
    */
    const handleEditar = (item: T) => {
        switch (titulo) {
            case "Categorías": 
                setSuccessFunction(() => async (nombre: string) => {
                    const categoria = item as ICategoria;
                    const respuesta = await editarCategoria({_id: categoria._id, nombre});
                    if (respuesta.ok) router.push('/admin/categorias');
                    else console.log(respuesta);
                });
                break;
            case "Aromas": {
                setSuccessFunction(() => async (nombre: string) => {
                    const aroma = item as IAromas;
                    const respuesta = await editarAroma({_id: aroma._id, nombre});
                    if (respuesta.ok) router.push('/admin/aromas');
                    else console.log(respuesta);
                });
                break;
            }
            case "Beneficios": {
                setSuccessFunction(() => async (nombre: string) => {
                    const beneficio = item as IBeneficios;
                    const respuesta = await editarBeneficio({_id: beneficio._id, nombre});
                    if (respuesta.ok) router.push('/admin/beneficios');
                    else console.log(respuesta);
                });
                break;
            }
            case "Ingredientes": {
                setSuccessFunction(() => async (nombre: string) => {
                    const ingrediente = item as IIngrediente;
                    const respuesta = await editarIngrediente({_id: ingrediente._id, nombre});
                    if (respuesta.ok) router.push('/admin/ingredientes');
                    else console.log(respuesta);
                });
                break;
            }

            case "Tipos de Piel": {
                setSuccessFunction(() => async (nombre: string) => {
                    const tipoPiel = item as ITiposPiel;
                    const respuesta = await editarTiposPiel({_id: tipoPiel._id, nombre});
                    if (respuesta.ok) router.push('/admin/tiposPiel');
                    else console.log(respuesta);
                });
                break;
            }
        }
        set_Nombre((item as { nombre: string }).nombre);
        setTipo("Editar");
        setModalOpen(true);
    };

    /*
   * =========================
   * ELIMINAR
   * =========================
   */
  const handleEliminar = async (item: T) => {
    switch (titulo) {
      case "Categorías": {
            const categoria = item as ICategoria;
            const result = await Swal.fire({
                title: "Eliminar",
                text: `Está seguro que desea eliminar la Categoría ${categoria.nombre}`,
                icon: "warning",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "Cancelar",
            });

            if (result.isConfirmed) {
                const respuesta = await eliminarCategoria({_id: categoria._id});
                if (respuesta.ok) router.push('/admin/categorias');
                else console.log(respuesta);
            }
        break;
      }

      case "Aromas": {
            const aroma = item as IAromas;
            const result = await Swal.fire({
                title: "Eliminar",
                text: `Está seguro que desea eliminar el Aroma ${aroma.nombre}`,
                icon: "warning",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "Cancelar",
            });

            if (result.isConfirmed) {
                const respuesta = await eliminarAroma({_id: aroma._id});
                if (respuesta.ok) router.push('/admin/aromas');
                else console.log(respuesta);
            }
        break;
      }

      case "Beneficios": {
            const beneficio = item as IBeneficios;
            const result = await Swal.fire({
                title: "Eliminar",
                text: `Está seguro que desea eliminar el Beneficio ${beneficio.nombre}`,
                icon: "warning",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "Cancelar",
            });

            if (result.isConfirmed) {
                const respuesta = await eliminarBeneficio({_id: beneficio._id});
                if (respuesta.ok) router.push('/admin/beneficios');
                else console.log(respuesta);
            }
        break;
      }

      case "Ingredientes": {
            const ingrediente = item as IIngrediente;
            const result = await Swal.fire({
                title: "Eliminar",
                text: `Está seguro que desea eliminar el Ingrediente ${ingrediente.nombre}`,
                icon: "warning",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "Cancelar",
            });

            if (result.isConfirmed) {
                const respuesta = await eliminarIngrediente({_id: ingrediente._id});
                if (respuesta.ok) router.push('/admin/ingredientes');
                else console.log(respuesta);
            }
        break;
      }

      case "Tipos de Piel": {
            const tipoPiel = item as ITiposPiel;
            const result = await Swal.fire({
                title: "Eliminar",
                text: `Está seguro que desea eliminar el Tipo de Piel ${tipoPiel.nombre}`,
                icon: "warning",
                showCancelButton: true,
                reverseButtons: true,
                confirmButtonText: "Si, eliminar",
                cancelButtonText: "Cancelar",
            });

            if (result.isConfirmed) {
                const respuesta = await eliminarTipoPiel({_id: tipoPiel._id});
                if (respuesta.ok) router.push('/admin/tiposPiel');
                else console.log(respuesta);
            }
        break;
      }
    }
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
          handleEliminar as (item: ICategoria) => Promise<void>,
        ) as ColumnDef<T, unknown>[];

      case "Aromas":
        return AromasColumns(
          handleEditar as (item: IAromas) => void,
          handleEliminar as (item: IAromas) => Promise<void>,
        ) as ColumnDef<T, unknown>[];

      case "Beneficios":
        return BeneficiosColumns(
          handleEditar as (item: IBeneficios) => void,
          handleEliminar as (item: IBeneficios) => Promise<void>,
        ) as ColumnDef<T, unknown>[];

      case "Ingredientes":
        return IngredientesColumns(
          handleEditar as (item: IIngrediente) => void,
          handleEliminar as (item: IIngrediente) => Promise<void>,
        ) as ColumnDef<T, unknown>[];

      case "Tipos de Piel":
        return TiposPielColumns(
          handleEditar as (item: ITiposPiel) => void,
          handleEliminar as (item: ITiposPiel) => Promise<void>,
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
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
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

            <TableComponent 
                data={data} 
                columns={getColumns()}
                filtro={filtro}
            />
            <Modal 
                tipo={titulo}
                entidad={tipo}
                open={modalOpen}
                onOpenChange={setModalOpen}
                onSuccess={successFunction}
                _nombre={_nombre}
            />
        </div>
    )
}