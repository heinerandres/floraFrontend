import { apiFetch } from "../api";

export async function obtenerTiposPiel() {
  return apiFetch('/api/tiposPiel', {
    cache: 'no-store'
  });
}

export async function obtenerTiposPielByNombre(data) {
  return apiFetch('/api/tiposPiel/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function crearTiposPiel(data) {
  return apiFetch('/api/tiposPiel/insertar', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function editarTiposPiel(data){
  return apiFetch('/api/tiposPiel/editar', {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function eliminarTipoPiel(data){
  return apiFetch('/api/tiposPiel/eliminar', {
    method: 'DELETE',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}