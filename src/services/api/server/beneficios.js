import { apiFetch } from "../api";

export async function obtenerBeneficios() {
  return apiFetch('/api/beneficios', {
    cache: 'no-store'
  });
}

export async function obtenerBeneficiosByNombre(data) {
  return apiFetch('/api/beneficios/',{
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export async function crearBeneficios(data) {
  return apiFetch('/api/beneficios/insertar', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function editarBeneficio(data){
  return apiFetch('/api/beneficios/editar', {
    method: 'PUT',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}

export async function eliminarBeneficio(data){
  return apiFetch('/api/beneficios/eliminar', {
    method: 'DELETE',
    cache: 'no-store',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
}