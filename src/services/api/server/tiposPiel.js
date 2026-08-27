import { apiFetch } from "../api";

export async function ObtenerTiposPiel() {
  return apiFetch('/api/tiposPiel', {
    cache: 'no-store'
  });
}

export async function ObtenerTiposPielByNombre(data) {
  return apiFetch('/api/tiposPiel/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function CrearTiposPiel(data) {
  return apiFetch('/api/tiposPiel/insertar', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}