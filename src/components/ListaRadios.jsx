/*
    recebe lista dos rádios vinda da api como props
    renderiza nome e país
*/
import React from 'react';
import CardRadio from './CardRadio';
function ListaRadios({radios}){
    if(!radios || radios.length===0){
        return <p>Nenhuma rádio encontrada</p>
    }
    return(
        <div>
            <h2>Resultados da busca:</h2>
            {radios.map((radio)=>(
                <CardRadio key={radio.stationnuuid} radio={radio}/>
            ))}
        </div>
    );
}
export default ListaRadios;