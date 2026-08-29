import { apiFetch } from "../api";

export async function obtenerCategorias() {
  return apiFetch('/api/categorias', {
    cache: 'no-store'
  });
}

export async function obtenerCategoriaByNombre(data) {
  return apiFetch('/api/categorias/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function crearCategoria(data) {
  return apiFetch('/api/categorias/insertar', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function editarCategoria(data){
  return apiFetch('/api/categorias/editar', {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function eliminarCategoria(data){
  return apiFetch('/api/categorias/eliminar', {
    method: 'DELETE',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}