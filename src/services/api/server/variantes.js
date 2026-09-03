import { apiFetch } from "../api";

export async function crearVariante(data) {
  return apiFetch('/api/variantes/insertar', {
    method: 'POST',
    cache: 'no-store',
    body: data
  });
}