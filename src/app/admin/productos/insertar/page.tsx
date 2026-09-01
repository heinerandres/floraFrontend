import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { Leaf } from "lucide-react";
import { ProductosAgregar } from "@/app/components/admin/productos/ProductosAgregar"
import { ICategoria } from "@/types/categoria";
import { obtenerCategorias } from "@/services/api/server/categorias";


export default async function InsertarProductosPage() {
    let errorMsg = null;
    let categorias : ICategoria[] | [] = [];

    const respuesta = await obtenerCategorias();
    if(respuesta.ok) categorias = respuesta.categorias;
    else errorMsg = respuesta.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/admin/productos" },
                { label: "Nuevo producto", href: "/admin/productos/insertar" },
            ]}/>
            <div className="px-20 pt-7 pb-7">
                <div className="flex flex-col">
                    <div className="flex gap-3">
                        <p className="text-2xl font-semibold">Nuevo Producto</p>
                        <Leaf className="text-acento" size={26}/>
                        <div className="flex items-center gap-2 p-2 ml-auto bg-acento/10 border border-acento/50 rounded-lg text-sm text-gray-500 select-none">
                            <Leaf size={14} className="text-acento"/>
                            <p>Los campos marcados con * son obligatorios</p>
                        </div>
                    </div>
                    <p className="text-sm">Completa la información para agregar un nuevo producto a tu catálogo</p>
                    
                </div>
            </div>
            <ProductosAgregar categorias={categorias}/>


        </div>
    )
}