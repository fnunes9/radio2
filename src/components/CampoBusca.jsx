//preparando os dados para buscar
import React, {useState, useEffect} from 'react';
import {listarPaises, listarIdiomas} from '../services/radioApi';

function CampoBusca({aoBuscar}){
    const [nome, setNome]=useState('');
    const [paisSelecionado, setPaisSelecionado]=useState('');
    const [idiomaSelecionado, setIdiomaSelecionado]=useState('');

    const [listaDePaises, setListaDePaises]=useState([]);
    const [listaDeIdiomas, setListaDeIdiomas]=useState([]);

    useEffect(() => {
        async function carregarFiltros() {
          try {
            const paises = await listarPaises();
            const idiomas = await listarIdiomas();
            setListaDePaises(paises);
            setListaDeIdiomas(idiomas);
          } catch (erro) {
            console.error('Erro ao carregar países ou idiomas:', erro);
          }
        }
    
        carregarFiltros();
      }, []);
      const aoSubmeter = (evento)=>{
        evento.preventDefault();
        aoBuscar({
            nome,
            pais:paisSelecionado,
            idioma:idiomaSelecionado
        });
      };
      return (
        
        
        <form onSubmit={aoSubmeter}>
            <input
            type="text"
            placeholder='Nome da rádio'
            value={nome}
            onChange={(evento)=>setNome(evento.target.value)}
        /> 

        <select value={paisSelecionado} onChange={(e)=> setPaisSelecionado(e.target.value)}>
            <option value="">Todos os países</option>
            {listaDePaises.map((pais)=>(
                <option key={pais.name} value={pais.name}>
                    {pais.name}
                </option>
            ))}
        </select>
        <select value={idiomaSelecionado} onChange={(e)=> setIdiomaSelecionado(e.target.value)}>
            <option value="">Todos os idiomas</option>
            {listaDeIdiomas.map((idioma)=> (
                <option key={idioma.name} value={idioma.name}>
                    {idioma.name}
                </option>
            ))}
        </select>
        <button type="submit">Buscar</button>
        </form>
        
      );
      
    }
    export default CampoBusca;