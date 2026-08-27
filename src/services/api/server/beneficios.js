import { apiFetch } from "../api";

export async function ObtenerBeneficios() {
  return apiFetch('/api/beneficios', {
    cache: 'no-store'
  });
}

export async function ObtenerBeneficiosByNombre(data) {
  return apiFetch('/api/beneficios/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function CrearBeneficios(data) {
  return apiFetch('/api/beneficios/insertar', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}