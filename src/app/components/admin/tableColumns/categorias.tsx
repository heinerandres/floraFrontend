'use client';
import { Pencil, Trash2 } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import type { ICategoria } from "@/types/categoria";

export const CategoriaColumns = (
  onEditar: (categoria: ICategoria) => void,
  onEliminar: (categoria: ICategoria) => Promise<void>,
): ColumnDef<ICategoria>[] => [
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
      const categoria = row.original;

      return (
        <button
          className="text-gray-600 hover:text-acento cursor-pointer flex"
          onClick={() => {
            onEditar(categoria);
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
      const categoria = row.original;

      return (
        <button
          className="text-gray-600 hover:text-red-500 cursor-pointer flex"
          onClick={() => {
            onEliminar(categoria);
          }}
        >
          <Trash2 size={18} strokeWidth={1.5} className="mr-2" />
          Eliminar
        </button>
      );
    },
  },
];