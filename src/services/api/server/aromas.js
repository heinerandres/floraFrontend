import { apiFetch } from "../api";

export async function obtenerAromas() {
  return apiFetch('/api/aromas', {
    cache: 'no-store'
  });
}

export async function obtenerAromasByNombre(data) {
  return apiFetch('/api/aromas/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function crearAroma(data) {
  return apiFetch('/api/aromas/insertar', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function editarAroma(data){
  return apiFetch('/api/aromas/editar', {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function eliminarAroma(data){
  return apiFetch('/api/aromas/eliminar', {
    method: 'DELETE',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}