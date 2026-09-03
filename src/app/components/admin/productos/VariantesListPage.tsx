'use client';
import { Network, Plus, Search } from "lucide-react";
import { useState } from "react";
import { TableComponent } from "../TableComponent";
import { IProducto } from "@/types/producto";
import { useRouter } from "next/navigation";
import { VariantesColumns } from "../tableColumns/variantes";

type Props = {
    producto: IProducto | null;
}

export const VariantesListPage = ({producto}: Props) => {
    const router = useRouter();
    const [filtro, setFiltro] = useState("");

    const handleInsertar = () => {
        router.push(`/admin/productos/variantes/insertar/${producto?.slug}`);
    }

    return (
        <div className="p-5">
            <div className="flex items-center h-25 p-5">
                <div>
                    <div className="flex">
                        <p className="text-2xl font-semibold pr-3">Variantes</p>
                        <Network className="text-acento mt-1"/>
                    </div>
                    <p className="text-sm text-gray-800">Gestiona el catálogo de Variantes disponibles en Floraphine.</p>
                </div>
                <div className="flex gap-10 ml-auto">
                    <div className="relative w-90">
                        <input
                            type="text"
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                            placeholder="Buscar variante"
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
                        Agregar Variante
                    </button>
                </div>
            </div>

            <TableComponent 
                data={producto!.variantes} 
                columns = {VariantesColumns(router)}
                filtro={filtro}
            />
        </div>
    )
}