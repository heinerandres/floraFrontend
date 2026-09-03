'use client';
import { Network, Pencil, Trash2 } from "lucide-react";
import type { ColumnDef } from "@tanstack/react-table";
import { IProducto } from "@/types/producto";
import { _base } from "@/utilities/url-imgBase";
import { useRouter } from "next/navigation";
import { IVariantes } from "@/types/variantes";

export const VariantesColumns = (
  router: ReturnType<typeof useRouter>
): ColumnDef<IVariantes>[] => [
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  
];