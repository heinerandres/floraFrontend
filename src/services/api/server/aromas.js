import { apiFetch } from "../api";

export async function ObtenerAromas() {
  return apiFetch('/api/aromas', {
    cache: 'no-store'
  });
}

export async function ObtenerAromasByNombre(data) {
  return apiFetch('/api/aromas/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function CrearAromas(data) {
  return apiFetch('/api/aromas/insertar', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}