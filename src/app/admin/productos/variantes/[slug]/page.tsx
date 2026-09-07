'use server';
import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { VariantesListPage } from "@/app/components/admin/productos/VariantesListPage";
import { obtenerVariantesPorProductoSlug } from "@/services/api/server/variantes";
import { IProducto } from "@/types/producto";
import { IVariantes } from "@/types/variantes";

interface Props {
    params: {
        slug: string;
    }
}


export default async function VariantesProductoPage({ params }: Props) {
  const _params = await params;
  let variantes : IVariantes [] = [];
  let errorMsg = null;

  const respuesta = await obtenerVariantesPorProductoSlug({slug: _params.slug});
  if(respuesta.ok) variantes = respuesta.variantes;
  else errorMsg = JSON.stringify(respuesta);

  console.log(respuesta.variantes);

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/admin/productos" },
                { label: "Variantes", href: `/admin/productos/variantes/${_params.slug}` },
            ]}/>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}

            <VariantesListPage 
                slug={_params.slug}
                variantes={variantes} 
            />

        </div>
    )
}