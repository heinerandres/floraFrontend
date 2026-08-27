import { Leaf, Plus, Search } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { TableComponent } from "./TableComponent";
import { ColumnDef } from "@tanstack/react-table";

type Props<T> = {
  titulo: string;
  icon: LucideIcon;
  subtitulo: string;
  placeholderBuscar: string;
  textoBoton: string;
  data: T[];
  columns: ColumnDef<T>[];
};

export const ListPage = <T,> ({titulo, icon: Icon, subtitulo, placeholderBuscar, textoBoton, data, columns} : Props<T>) => {
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
                    <button className="flex items-center px-2 py-3 bg-acento text-white rounded-md text-sm mr-5 cursor-pointer">
                        <Plus size={20} className="mr-2"/>
                        {textoBoton}
                    </button>
                </div>
            </div>

            <TableComponent data={data} columns={columns} />
        </div>
    )
}