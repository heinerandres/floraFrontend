
import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { Leaf, Network } from "lucide-react";
import { ProductosAgregar } from "@/app/components/admin/productos/ProductosAgregar"
import { ICategoria } from "@/types/categoria";
import { obtenerCategorias } from "@/services/api/server/categorias"; 
import { VariantesAgregar } from "@/app/components/admin/productos/VariantesAgregar";
import { IProducto } from "@/types/producto";
import { obtenerProductoPorSlug } from "@/services/api/server/productos";
import { IIngrediente } from "@/types/ingrediente";
import { IAromas } from "@/types/aromas";
import { IBeneficios } from "@/types/beneficios";
import { ITiposPiel } from "@/types/tiposPiel";
import { obtenerAromas } from "@/services/api/server/aromas";
import { obtenerIngredientes } from "@/services/api/server/ingredientes";
import { obtenerBeneficios } from "@/services/api/server/beneficios";
import { obtenerTiposPiel } from "@/services/api/server/tiposPiel";

interface Props {
    params: {
        slug: string;
    }
}

export default async function InsertarVariantesPage({ params }: Props) {
    const _params = await params;
    let producto : IProducto | null = null;
    let ingredientes: IIngrediente[] = [];
    let aromas: IAromas[] = [];
    let beneficios: IBeneficios[] = [];
    let tiposPiel: ITiposPiel[] = [];
    let errorMsg = null;

    const respuesta = await obtenerProductoPorSlug(_params.slug);
    if(respuesta.ok) producto = respuesta.producto;
    else errorMsg = respuesta.msg;

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

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/admin/productos" },
                { label: "Variantes", href: `/admin/productos/variantes/${_params.slug}` },
                { label: "Nueva Variante", href: "/admin/productos/variantes/insertar" },
            ]}/>
            <div className="px-20 pt-7 pb-7">
                {errorMsg && <p className="text-red-500">{errorMsg}</p>}
                <div className="flex flex-col">
                    <div className="flex gap-3">
                        <p className="text-2xl font-semibold">Nueva Variante</p>
                        <Network className="text-acento" size={26}/>
                        <div className="flex items-center gap-2 p-2 ml-auto bg-acento/10 border border-acento/50 rounded-lg text-sm text-gray-500 select-none">
                            <Network size={14} className="text-acento"/>
                            <p>Los campos marcados con * son obligatorios</p>
                        </div>
                    </div>
                    <p className="text-sm">Completa la información para agregar una nueva variante a tu catálogo</p>
                    
                </div>
            </div>
            <VariantesAgregar 
                producto={producto}
                aromas = {aromas}
                ingredientes = {ingredientes}
                beneficios = {beneficios}
                tiposPiel = {tiposPiel}
            />


        </div>
    )
}