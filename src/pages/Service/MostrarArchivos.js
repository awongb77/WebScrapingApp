import React, {useState} from "react";
import Axios from 'axios';
import '../../index.css';

function MostrarArchivos (props) {
    const [procesando, setProcesando] = useState('');

    console.log(window.sessionStorage.getItem("lista_archivos"))
    let lista_archivos = window.sessionStorage.getItem("lista_archivos");

    console.log(props)
    // console.log(lista_archivos.length);

    

    const handleSubmit = (event) => {
        event.preventDefault();

        let arrDiv = [];
        arrDiv.push(
            <div  key='gif'><img src={require(`../../images/processing.gif`).default} alt='' width="100" height="100"></img></div>
        );          

        setProcesando (arrDiv);

        console.log(props.match.params.replies );

        Axios.post("/api2/twitterSentiment",{
            lista_archivos: lista_archivos,
            replies:props.match.params.replies 
        }).then(res => {
            console.log(res.data.lista_graficos.length);

            
            // window.location.href = `/mostrararchivos/${res.data.lista_archivos}`;
            window.location.href = `/mostrarresultados/${res.data.lista_graficos}`;
            // window.location.href = url;

        });

    }

  

    return (
        <form onSubmit={(e) => handleSubmit(e)} id="paramForm" method="post" >
            <div className="container">
                <h3 className= "text-center" style={{paddingTop:"2%"}}>
                    Archivos generados : <br />
                </h3>
            </div>
            <div>
                    
                    <span>
                    <textarea id="temas" value={lista_archivos ||''} cols = "50" rows= "10" readOnly></textarea>
                    </span>
                </div>    
                <div id="inner_med">
                    <span>
                        {procesando}
                    </span>
                </div>                        
            <button type="submit" >Procesar archivos</button>
        </form>
    )
}
export default MostrarArchivos;