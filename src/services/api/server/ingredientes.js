import { apiFetch } from "../api";

export async function obtenerIngredientes() {
  return apiFetch('/api/ingredientes', {
    cache: 'no-store'
  });
}

export async function obtenerIngredienteByNombre(data) {
  return apiFetch('/api/ingredientes/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function crearIngrediente(data) {
  return apiFetch('/api/ingredientes/insertar', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function editarIngrediente(data){
  return apiFetch('/api/ingredientes/editar', {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}
export async function eliminarIngrediente(data){
  return apiFetch('/api/ingredientes/eliminar', {
    method: 'DELETE',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}