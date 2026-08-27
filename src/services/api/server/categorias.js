import { apiFetch } from "../api";

export async function ObtenerCategorias() {
  return apiFetch('/api/categorias', {
    cache: 'no-store'
  });
}

export async function ObtenerCategoriaByNombre(data) {
  return apiFetch('/api/categorias/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function CrearCategoria(data) {
  return apiFetch('/api/categorias/insertar', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}