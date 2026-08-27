import { apiFetch } from "../api";

export async function ObtenerIngredientes() {
  return apiFetch('/api/ingredientes', {
    cache: 'no-store'
  });
}

export async function ObtenerIngredienteByNombre(data) {
  return apiFetch('/api/ingredientes/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function CrearIngrediente(data) {
  return apiFetch('/api/ingredientes/insertar', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}