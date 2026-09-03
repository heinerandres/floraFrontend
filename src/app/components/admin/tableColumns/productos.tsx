'use client';
import { Network, Pencil, Trash2 } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import { IProducto } from "@/types/producto";
import { _base } from "@/utilities/url-imgBase";
import { useRouter } from "next/navigation";

export const ProductosColumns = (
  router: ReturnType<typeof useRouter>
): ColumnDef<IProducto>[] => [
  {
    accessorKey: "imagen",
    header: "Imágen",
    cell: ({ row }) => (
      <img
        src={ _base + row.original.imagenes[0].url}
        alt={ _base + row.original.imagenes[0].url}
        className="w-15 h-15 rounded-md object-cover"
      />
    ),
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "categoria.nombre",
    header: "Categoría",
  },
  {
    accessorKey: "precio",
    header: "Precio",
    cell: ({ row }) => `$ ${row.getValue<number>("precio").toFixed(2)}`,
  },
  {
    id: "editar",
    header: "Editar",
    cell: ({ row }) => {
      const producto = row.original;

      return (
        <button
          className="text-gray-600 hover:text-acento cursor-pointer flex"
          onClick={() => {
            console.log("Editar:", producto._id);
          }}
        >
          <Pencil size={18} strokeWidth={1.5} className="mr-2"/>
          Editar
        </button>
      );
    },
  },
  {
    id: "variantes",
    header: "Variantes",
    cell: ({ row }) => {
      const producto = row.original;

      return (
        <button
          className="text-gray-600 hover:text-acento cursor-pointer flex"
          onClick={() => {
            router.replace(`/admin/productos/variantes/${producto.slug}`)
          }}
        >
          <Network size={18} strokeWidth={1.5} className="mr-2"/>
          Variantes
        </button>
      );
    },
  },
  {
    id: "eliminar",
    header: "Eliminar",
    cell: ({ row }) => {
      const producto = row.original;

      return (
        <button
          className="text-gray-600 hover:text-red-500 cursor-pointer flex"
          onClick={() => {
            console.log("Eliminar:", producto._id);
          }}
        >
          <Trash2 size={18} strokeWidth={1.5} className="mr-2" />
          Eliminar
        </button>
      );
    },
  },
];