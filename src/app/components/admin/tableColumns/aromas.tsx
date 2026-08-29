'use client';
import { Pencil, Trash2 } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import { IAromas } from "@/types/aromas";

export const AromasColumns = (
  onEditar: (aroma: IAromas) => void,
  onEliminar: (aroma: IAromas) => Promise<void>
): ColumnDef<IAromas>[] => [
  {
    accessorKey: "nombre",
    header: "Nombre",
    cell: ({ getValue }) => (
      <span className="font-semibold ">
        {getValue() as string}
      </span>
    ),
  },
  {
    id: "editar",
    header: "Editar",
    cell: ({ row }) => {
      const aroma = row.original;

      return (
        <button
          className="text-gray-600 hover:text-acento cursor-pointer flex"
          onClick={() => {
            onEditar(aroma);
          }}
        >
          <Pencil size={18} strokeWidth={1.5} className="mr-2"/>
          Editar
        </button>
      );
    },
  },
  {
    id: "eliminar",
    header: "Eliminar",
    cell: ({ row }) => {
      const aroma = row.original;

      return (
        <button
          className="text-gray-600 hover:text-red-500 cursor-pointer flex"
          onClick={() => {
            onEliminar(aroma);
          }}
        >
          <Trash2 size={18} strokeWidth={1.5} className="mr-2" />
          Eliminar
        </button>
      );
    },
  },
];