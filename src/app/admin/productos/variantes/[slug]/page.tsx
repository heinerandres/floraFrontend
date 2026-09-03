'use server';
import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { VariantesListPage } from "@/app/components/admin/productos/VariantesListPage";
import { obtenerProductoPorSlug } from "@/services/api/server/productos";
import { IProducto } from "@/types/producto";

interface Props {
    params: {
        slug: string;
    }
}


export default async function VariantesProductoPage({ params }: Props) {
  const _params = await params;
  let producto : IProducto | null = null;
  
  let errorMsg = null;

  const respuesta = await obtenerProductoPorSlug(_params.slug);
  if(respuesta.ok) producto = respuesta.producto;
  else errorMsg = respuesta.msg;

  

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/admin/productos" },
                { label: "Variantes", href: `/admin/productos/variantes/${_params.slug}` },
            ]}/>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}

            <VariantesListPage 
                producto={producto} 
            />

        </div>
    )
}