'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import { ICategoria } from "@/types/categoria";
import {obtenerCategorias} from '@/services/api/server/categorias';


export default async function CategoriasPage() {
  let errorMsg = null;
  let categorias : ICategoria[] | [] = [];

  const respuesta = await obtenerCategorias();
  if(respuesta.ok) categorias = respuesta.categorias;
  else errorMsg = respuesta.msg;


  

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Categorías", href: "/admin/categorias" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            {errorMsg && <p className="text-red-500">{ errorMsg }</p>}
            <ListPage 
                titulo = "Categorías"
                icon = "tag"
                subtitulo = "Administra las categorías disponibles en Floraphine."
                placeholderBuscar="Buscar categoría"
                textoBoton="Agregar Categoría"
                data={ categorias }
            />
            
        </div>
    )
}