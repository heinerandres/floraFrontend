'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import { Heart } from "lucide-react";
import {ObtenerBeneficios} from '@/services/api/server/beneficios';
import { BeneficiosColumns } from "@/app/components/admin/tableColumns/beneficios";
import { IBeneficios } from "@/types/beneficios";


export default async function BeneficiosPage() {
  let errorMsg = null;
  let beneficios : IBeneficios[] | [] = [];

  const respuesta = await ObtenerBeneficios();
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
                icon = {Heart}
                subtitulo = "Administra los beneficios disponibles en Floraphine."
                placeholderBuscar="Buscar beneficio"
                textoBoton="Agregar Beneficio"
                data={beneficios}
                columns={BeneficiosColumns}
            />
            
        </div>
    )
}