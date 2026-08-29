'use server';

import { BreadCrumb } from "@/app/components/admin/Breadcrumb";
import { ListPage } from "@/app/components/admin/ListPage";
import { obtenerProductos } from '@/services/api/server/productos';
import { IProducto } from "@/types/producto";

export default async function ProductosPage() {


  let errorMsg = null;
  let productos : IProducto[] | [] = [];

  const respuestaProductos = await obtenerProductos();
  if(respuestaProductos.ok) productos = respuestaProductos.productos;
  else errorMsg = respuestaProductos.msg;

    return (
        <div className="flex-1">
            <BreadCrumb items={[
                { label: "Inicio", href: "/" },
                { label: "Productos", href: "/productos" },
                /* { label: "Nuevo producto", href: "/productos/nuevo" }, */
            ]}/>
            <ListPage 
                titulo = "Productos"
                icon = "leaf"
                subtitulo = "Administra los productos disponibles en Floraphine."
                placeholderBuscar="Buscar productos"
                textoBoton="Agregar Productos"
                data={productos}
            />
        </div>
    )
}