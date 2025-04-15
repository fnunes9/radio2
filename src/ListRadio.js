import React,{useState, useEffect} from "react";
import axios from "axios";

function ListRadio(){
    const [lista, setLista]=useState([]);
    const [loading, setLoading]=useState(true);

    useEffect(() =>{
        axios.get('http://at1.api.radio-browser.info/json/countries')
        .then(response =>{
            setLista(response.data);
            setLoading(false);
        })
        .catch(error=>{
            console.error(error);
            setLoading(false);
        })
    },[]
);
if(loading){
    return<div>
        carregando
    </div>
}


    return(
        <div>
            <h1>Lista rádios</h1>
            <ul>
                {lista.map(lista=>(
                    <li key={lista.name}>{lista.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListRadio;