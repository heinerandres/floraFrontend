'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import {ObtenerIngredientes} from '@/services/api/server/ingredientes';
import { IIngrediente } from "@/types/ingrediente";
import { IngredientesColumns } from "@/app/components/admin/tableColumns/ingredientes";


export default async function IngredientesPage() {
  let errorMsg = null;
  let ingredientes : IIngrediente[] | [] = [];

  const respuesta = await ObtenerIngredientes();
  if(respuesta.ok) ingredientes = respuesta.ingredientes;
  else errorMsg = respuesta.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Ingredientes", href: "/admin/ingredientes" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            <ListPage 
                titulo = "Ingredientes"
                icon = "testTubeDiagonal"
                subtitulo = "Administra los ingredientes disponibles en Floraphine."
                placeholderBuscar="Buscar ingrediente"
                textoBoton="Agregar Ingrediente"
                data={ingredientes}
            />
            
        </div>
    )
}