import { apiFetch } from "../api";

export async function obtenerProductos() {
  return apiFetch('/api/productos', {
    cache: 'no-store'
  });
}

export async function obtenerProductoPorSlug(slug) {
  return apiFetch("/api/productos/obtenerProductoPorSlug", {
    method: "POST",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({slug}),
  });
}

export async function obtenerProductoPorVarianteSlug(slug) {
  return apiFetch("/api/productos/obtenerProductoPorVarianteSlug", {
    method: "POST",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({slug}),
  });
}


export async function obtenerProductoByNombre(data) {
  return apiFetch('/api/productos/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function crearProducto(data) {
  return apiFetch('/api/productos/insertar', {
    method: 'POST',
    cache: 'no-store',
    body: data
  });
}

export async function editarProducto(data){
  return apiFetch('/api/productos/editar', {
    method: 'PUT',
    cache: 'no-store',
    body: data
  });
}

export async function eliminarProducto(data){
  return apiFetch('/api/productos/eliminar', {
    method: 'DELETE',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}