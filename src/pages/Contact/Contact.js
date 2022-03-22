import React, { useEffect} from "react";


function Contact(props)  {

    useEffect(() =>{
        fetch("/companies").then(response =>
            response.json().then(data => {
                console.log(data);
            })
        );
    }, []);


    const { fechai } = props.match.params;
    const { fechaf } = props.match.params;
    var { temas } = props.match.params;
    var y = temas.split(" ");

    let fi = new Date(fechai);
    let dd = String(fi.getDate()).padStart(2, '0');
    let mm = String(fi.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = fi.getFullYear();
    const fechaini = dd + '/' + mm + '/' + yyyy;  

    let ff = new Date(fechaf);
    dd = String(ff.getDate()).padStart(2, '0');
    mm = String(ff.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = ff.getFullYear();        
    const fechafin = dd + '/' + mm + '/' + yyyy;     
    
    return (
        
        <div className="container">
            <h1 className= "text-center" style={{paddingTop:"30%"}}>
                Contact
            </h1>
            <p>Fecha inicio :{fechaini}</p>
            <p>Fecha fin:{fechafin}</p>
            <p>Temas:{y[1]}</p>
        </div>
    )
}



export default Contact;