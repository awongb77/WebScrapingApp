import React from "react";
// import Axios from 'axios';
// import temas from 'C:\\Users\\andre\\Workspace\\main-menu\\src\\plots\\temas.png'
// import temas from '../../plots/temas.png'
import '../../index.css';


function MostrarResultados (props) {

    let detallesShow = []
    let lista_img = []
    var { lista_graficos } = props.match.params;
    // let lista_g = 
    console.log(lista_graficos)

    lista_img = lista_graficos.split(',');
    // console.log(lista_img.length)

    
    for (var i= 1; i < lista_img.length; i++){
        detallesShow.push(
            <div id="inner" key={i}><img src={require(`../../plots/${lista_img[i]}`).default} alt='' width="400" height="300"></img></div>
        );
    }   


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("SUBMIT")


    }

    return (
        
        

        <>
        <div id="outer">
            <div id="inner">
                <h3 className="text-center" style={{ paddingTop: "1%" }}>
                    TEMAS PROCESADOS
                </h3>
            </div>
            <div id="inner"><img src={require(`../../plots/${lista_img[0]}`).default} alt="" width="400" height="300"></img></div>
        </div>
        <div id="outer">
            <div id="inner">
                <h3 className="text-center" style={{ paddingTop: "1%" }}>
                    GRAFICOS POR TEMA
                </h3>
            </div>
            {detallesShow}
        </div>        

        <form onSubmit={(e) => handleSubmit(e)} id="paramForm" method="post">
                <button type="submit">Volver</button>
        </form>
        </>
    )
}
export default MostrarResultados;