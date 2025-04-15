import React, { useState } from 'react';
import CampoBusca from '../components/CampoBusca';
import ListaRadios from '../components/ListaRadios';
import { buscarRadios } from '../services/radioApi';

function Home() {
  const [radios, setRadios] = useState([]);

  const buscar = async (filtros) => {
    try {
      const resultado = await buscarRadios(filtros);
      setRadios(resultado);
    } catch (erro) {
      console.error('Erro ao buscar rádios:', erro);
      setRadios([]); // Se der erro, mostra "Nenhuma rádio encontrada"
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Busca de Rádios</h1>
      <CampoBusca aoBuscar={buscar} />
      <ListaRadios radios={radios} />
    </div>
  );
}

export default Home;
