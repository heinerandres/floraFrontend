'use client';
import { Pencil, Trash2 } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import type { ICategoria } from "@/types/categoria";
import { IProducto } from "@/types/producto";

export const ProductosColumns: ColumnDef<IProducto>[] = [
  {
    accessorKey: "nombre",
    header: "Nombre",
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
            console.log("Editar:", categoria._id);
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
            console.log("Eliminar:", categoria._id);
          }}
        >
          <Trash2 size={18} strokeWidth={1.5} className="mr-2" />
          Eliminar
        </button>
      );
    },
  },
];