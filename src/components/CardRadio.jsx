// Para exibir rádio individual

import React from 'react';

function CardRadio({radio}){
    return(
        <div style={{border:'1px solid #ccc', borderRadius:'8px', padding:'1rem', marginBottom:'1rem'}}>
            <h3>{radio.name}</h3>
            <p>País: {radio.country}</p>
            <audio controls src={radio.url_resolved}>   
                Seu navegador não suporta o player de áudio.
            </audio>
        </div>
    );
}
export default CardRadio;