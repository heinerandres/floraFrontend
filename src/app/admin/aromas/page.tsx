'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import { ObtenerAromas } from '@/services/api/server/aromas';
import { IAromas } from "@/types/aromas";



export default async function AromasPage() {
  let errorMsg = null;
  let aromas : IAromas[] | [] = [];

  const respuesta = await ObtenerAromas();
  if(respuesta.ok) aromas = respuesta.aromas;
  else errorMsg = respuesta.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Aromas", href: "/admin/aromas" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            <ListPage 
                titulo = "Aromas"
                icon = "flaskConical"
                subtitulo = "Administra los aromas disponibles en Floraphine."
                placeholderBuscar="Buscar aroma"
                textoBoton="Agregar Aroma"
                data={aromas}
            />
            
        </div>
    )
}