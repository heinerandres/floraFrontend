import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { Network } from "lucide-react";
import { IProducto } from "@/types/producto";
import { obtenerVariantePorSlug } from "@/services/api/server/variantes";
import { IVariantes } from "@/types/variantes";
import { IIngrediente } from "@/types/ingrediente";
import { IAromas } from "@/types/aromas";
import { IBeneficios } from "@/types/beneficios";
import { ITiposPiel } from "@/types/tiposPiel";
import { obtenerAromas } from "@/services/api/server/aromas";
import { obtenerIngredientes } from "@/services/api/server/ingredientes";
import { obtenerBeneficios } from "@/services/api/server/beneficios";
import { obtenerTiposPiel } from "@/services/api/server/tiposPiel";
import { obtenerProductoPorVarianteSlug } from "@/services/api/server/productos";
import { VarianteEditar } from "@/app/components/admin/productos/VarianteEditar";

interface Props {
    params: {
        slug: string;
    }
}

export default async function EditarVariantePage({ params }: Props) {
    const _params = await params;
    let variante : IVariantes | null = null;
    let producto : IProducto | null = null;
    let ingredientes: IIngrediente[] = [];
    let aromas: IAromas[] = [];
    let beneficios: IBeneficios[] = [];
    let tiposPiel: ITiposPiel[] = [];
    let errorMsg = null;

    const respuestaAromas = await obtenerAromas();
    if(respuestaAromas.ok) aromas = respuestaAromas.aromas;
    else errorMsg = respuestaAromas.msg;

    const respuestaIngredientes = await obtenerIngredientes();
    if(respuestaIngredientes.ok) ingredientes = respuestaIngredientes.ingredientes;
    else errorMsg = respuestaIngredientes.msg;

    const respuestaBeneficios = await obtenerBeneficios();
    if(respuestaBeneficios.ok) beneficios = respuestaBeneficios.beneficios;
    else errorMsg = respuestaBeneficios.msg;

    const respuestaTiposPiel = await obtenerTiposPiel();
    if(respuestaTiposPiel.ok) tiposPiel = respuestaTiposPiel.tiposPiel;
    else errorMsg = respuestaTiposPiel.msg;

    const respuesta = await obtenerVariantePorSlug({slug: _params.slug});
    if(respuesta.ok) variante = respuesta.variante;
    else errorMsg = respuesta.msg;

    const respuestaProducto = await obtenerProductoPorVarianteSlug(_params.slug);
    if(respuestaProducto.ok) producto = respuestaProducto.producto;
    else errorMsg = respuestaProducto.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/admin/productos" },
                { label: "Variantes", href: `/admin/productos/variantes/${producto?.slug}` },
                { label: "Editar Variante", href: `/admin/productos/variantes/editar/${_params.slug}` },
            ]}/>
            <div className="px-20 pt-7 pb-3">
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                <div className="flex flex-col">
                    <div className="flex gap-3">
                        <p className="text-2xl font-semibold">Editar Variante</p>
                        <Network className="text-acento" size={26}/>
                        <div className="flex items-center gap-2 p-2 ml-auto bg-acento/10 border border-acento/50 rounded-lg text-sm text-gray-500 select-none">
                            <Network size={14} className="text-acento"/>
                            <p>Los campos marcados con * son obligatorios</p>
                        </div>
                    </div>
                    <p className="text-sm">Completa la información para editar la variante</p>
                    
                </div>
            </div>
            <VarianteEditar
                producto={producto}
                variante={variante}
                ingredientes={ingredientes}
                aromas={aromas}
                beneficios={beneficios}
                tiposPiel={tiposPiel}
            />


        </div>
    )
}