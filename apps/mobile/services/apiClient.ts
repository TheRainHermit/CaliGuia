const API_URL = 'https://tu-backend.com/api';

export async function fetchLugares() {
  const res = await fetch(`${API_URL}/lugares`);
  return res.json();
}

export async function fetchEventos() {
  const res = await fetch(`${API_URL}/eventos`);
  return res.json();
}