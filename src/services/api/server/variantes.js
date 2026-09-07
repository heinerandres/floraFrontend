import { apiFetch } from "../api";

export async function crearVariante(data) {
  return apiFetch('/api/variantes/insertar', {
    method: 'POST',
    cache: 'no-store',
    body: data
  });
}

export async function editarVariante(data) {
  return apiFetch('/api/variantes/editar', {
    method: 'PUT',
    cache: 'no-store',
    body: data
  });
}

export async function obtenerVariantesPorProductoSlug(data){
  return apiFetch("/api/variantes/obtenerVariantesPorProductoSlug", {
    method: "POST",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}


export async function obtenerVariantePorSlug(data){
  return apiFetch("/api/variantes/obtenerVariantePorSlug", {
    method: "POST",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function eliminarVariante(data){
  return apiFetch('/api/variantes/eliminar', {
    method: 'DELETE',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}