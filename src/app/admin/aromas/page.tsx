'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import { FlaskConical } from "lucide-react";
import { ObtenerAromas } from '@/services/api/server/aromas';
import { AromasColumns } from "@/app/components/admin/tableColumns/aromas";
import { IAromas } from "@/types/Aromas";



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
                icon = {FlaskConical}
                subtitulo = "Administra los aromas disponibles en Floraphine."
                placeholderBuscar="Buscar aroma"
                textoBoton="Agregar Aroma"
                data={aromas}
                columns={AromasColumns}
            />
            
        </div>
    )
}