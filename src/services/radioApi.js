import axios from 'axios';

const api = axios.create({
  baseURL: 'https://at1.api.radio-browser.info/json'
});

export async function buscarRadios({ nome, pais, idioma , offset=0}) {
  const parametros = new URLSearchParams();

  if (nome && nome.trim() !== '') parametros.append('name', nome.trim());
  if (pais && pais.trim() !== '') parametros.append('country', pais.trim());
  if (idioma && idioma.trim() !== '') parametros.append('language', idioma.trim());

  parametros.append('limit', '10');
  parametros.append('offset', offset.toString());

  const resposta = await api.get(`/stations/search?${parametros.toString()}`);
  return resposta.data;
}

export const listarPaises = async () => {
  const resposta = await api.get('/countries');
  return resposta.data;
};

export const listarIdiomas = async () => {
  const resposta = await api.get('/languages');
  return resposta.data;
};
