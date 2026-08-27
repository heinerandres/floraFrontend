'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import { Leaf } from "lucide-react";

export default async function ProductosPage() {


  /* let errorMsg = null;
  let productos : IProducto[] | null = null;

  const respuestaProductos = await getProductos();
  if(respuestaProductos.ok) productos = respuestaProductos.productos;
  else errorMsg = respuestaProductos.msg; */

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/productos" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            <ListPage 
                titulo = "Productos"
                icon = {Leaf}
                subtitulo = "Administra los productos disponibles en Floraphine."
                placeholderBuscar="Buscar producto"
                textoBoton="Agregar Producto"/>
        </div>
    )
}