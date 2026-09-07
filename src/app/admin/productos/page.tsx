'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import { ProductosListPage } from "@/app/components/admin/productos/ProductosListPage";
import { obtenerProductos } from '@/services/api/server/productos';
import { IProducto } from "@/types/producto";

export default async function ProductosPage() {


  let errorMsg = null;
  let productos : IProducto[] | [] = [];

  const respuesta = await obtenerProductos();
  if(respuesta.ok) productos = respuesta.productos;
  else errorMsg = respuesta.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/admin/productos" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            <ProductosListPage data={productos}/>
        </div>
    )
}