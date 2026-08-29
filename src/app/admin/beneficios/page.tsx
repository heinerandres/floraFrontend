'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import {obtenerBeneficios} from '@/services/api/server/beneficios';
import { IBeneficios } from "@/types/beneficios";


export default async function BeneficiosPage() {
  let errorMsg = null;
  let beneficios : IBeneficios[] | [] = [];

  const respuesta = await obtenerBeneficios();
  if(respuesta.ok) beneficios = respuesta.beneficios;
  else errorMsg = respuesta.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Beneficios", href: "/admin/beneficios" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            <ListPage 
                titulo = "Beneficios"
                icon = "heart"
                subtitulo = "Administra los beneficios disponibles en Floraphine."
                placeholderBuscar="Buscar beneficio"
                textoBoton="Agregar Beneficio"
                data={beneficios}
            />
            
        </div>
    )
}