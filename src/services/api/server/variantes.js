import { apiFetch } from "../api";

export async function crearVariante(data) {
  return apiFetch('/api/variantes/insertar', {
    method: 'POST',
    cache: 'no-store',
    body: data
  });
}

export async function obtenerVariantesPorSlug(data){
  return apiFetch("/api/variantes/obtenerVariantesPorSlug", {
    method: "POST",
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}