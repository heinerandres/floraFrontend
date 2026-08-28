'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import {ObtenerTiposPiel} from '@/services/api/server/tiposPiel';
import { ITiposPiel } from "@/types/tiposPiel";


export default async function TiposPielPage() {
  let errorMsg = null;
  let tiposPiel : ITiposPiel[] | [] = [];

  const respuesta = await ObtenerTiposPiel();
  if(respuesta.ok) tiposPiel = respuesta.tiposPiel;
  else errorMsg = respuesta.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Tipos de Piel", href: "/admin/tiposPiel" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            <ListPage 
                titulo = "Tipos de Piel"
                icon = "heartHandshake"
                subtitulo = "Administra los tipos de piel en los que se pueden aplicar los productos disponibles en Floraphine."
                placeholderBuscar="Buscar tipo de piel"
                textoBoton="Agregar Tipo de Piel"
                data={tiposPiel}
            />
            
        </div>
    )
}