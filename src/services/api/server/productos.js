import { apiFetch } from "../api";

export async function obtenerProductos() {
  return apiFetch('/api/productos', {
    cache: 'no-store'
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
    body: JSON.stringify(data)
  });
}