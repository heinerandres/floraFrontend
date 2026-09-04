import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ProductosEditar } from "@/app/components/admin/productos/ProductosEditar";
import { obtenerCategorias } from "@/services/api/server/categorias";
import { obtenerProductoPorSlug } from "@/services/api/server/productos";
import { ICategoria } from "@/types/categoria";
import { IProducto } from "@/types/producto";
import { Leaf } from "lucide-react";

interface Props {
    params: {
        slug: string;
    }
}

export default async function EditarProductosPage({ params }: Props) {
    const _params = await params;
    let errorMsg = null;
    let categorias : ICategoria[] | [] = [];
    let producto : IProducto | null = null;

    const respuesta = await obtenerCategorias();
    if(respuesta.ok) categorias = respuesta.categorias;
    else errorMsg = respuesta.msg;

    const respuestaProducto = await obtenerProductoPorSlug(_params.slug);
  if(respuestaProducto.ok) producto = respuestaProducto.producto;
  else errorMsg = JSON.stringify(respuestaProducto);

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/admin/productos" },
                { label: "Editar producto", href: `/admin/productos/${_params.slug}` },
            ]}/>
            <div className="px-20 pt-7 pb-7">
                <div className="flex flex-col">
                    <div className="flex gap-3">
                        <p className="text-2xl font-semibold">Editar Producto</p>
                        <Leaf className="text-acento" size={26}/>
                        <div className="flex items-center gap-2 p-2 ml-auto bg-acento/10 border border-acento/50 rounded-lg text-sm text-gray-500 select-none">
                            <Leaf size={14} className="text-acento"/>
                            <p>Los campos marcados con * son obligatorios</p>
                        </div>
                    </div>
                    <p className="text-sm">Completa la información para editar el producto en tu catálogo</p>
                    
                </div>
            </div>
            <ProductosEditar categorias={categorias} producto={producto}/>
        </div>
    )
}