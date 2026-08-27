'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import { ICategoria } from "@/types/categoria";
import { Tag } from "lucide-react";
import {ObtenerCategorias} from '@/services/api/server/categorias';
import { CategoriaColumns } from "@/app/components/admin/tableColumns/categorias";


export default async function CategoriasPage() {
  let errorMsg = null;
  let categorias : ICategoria[] | [] = [];

  const respuesta = await ObtenerCategorias();
  if(respuesta.ok) categorias = respuesta.categorias;
  else errorMsg = respuesta.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Categorías", href: "/admin/categorias" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            <ListPage 
                titulo = "Categorías"
                icon = {Tag}
                subtitulo = "Administra las categorías disponibles en Floraphine."
                placeholderBuscar="Buscar categoría"
                textoBoton="Agregar Categoría"
                data={categorias}
                columns={CategoriaColumns}
            />
            
        </div>
    )
}