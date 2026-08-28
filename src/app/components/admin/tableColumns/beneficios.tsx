'use client';
import { Pencil, Trash2 } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import type { IBeneficios } from "@/types/beneficios";

export const BeneficiosColumns = (
  onEditar: (beneficio: IBeneficios) => void,
  onEliminar: (beneficio: IBeneficios) => void
): ColumnDef<IBeneficios>[] => [
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    id: "editar",
    header: "Editar",
    cell: ({ row }) => {
      const beneficio = row.original;

      return (
        <button
          className="text-gray-600 hover:text-acento cursor-pointer flex"
          onClick={() => {
            onEditar(beneficio);
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
      const beneficio = row.original;

      return (
        <button
          className="text-gray-600 hover:text-red-500 cursor-pointer flex"
          onClick={() => {
            console.log("Eliminar:", beneficio._id);
          }}
        >
          <Trash2 size={18} strokeWidth={1.5} className="mr-2" />
          Eliminar
        </button>
      );
    },
  },
];