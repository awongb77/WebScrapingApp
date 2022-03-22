import React, { Component }   from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Axios from 'axios';
import '../../index.css';

// const StyledDiv = styled.div`
//   margin-bottom: 5px ? 1 : 0;
// `;

// const divStyle = {
//     margin: '5px' 
//   };


  
 

class Service extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            temas: '',
            fechai: '',
            fechaf: '',
            procesando : '',
            user: ''   ,
            replies: false 
        }

       

    }

    

    mostrarGif(){
        let arrDiv = [];
        arrDiv.push(
            <div  key='gif'><img src={require(`../../images/processing.gif`).default} alt="" width="100" height="100"></img></div>
        );          

        this.setState({procesando: arrDiv});
      
    }

    onKeyPress = (e) => {
        
        if (e.keyCode === 13 && e.shiftKey) {
            e.preventDefault();
            this.addNewLineToTextArea();
        }
    }; 

    addNewLineToTextArea(){
        let msg_text = this.state.temas+"\r\n";
        this.setState({temas: msg_text});
    }

    handleTemasChange = (event) => {
        this.setState({temas: event.target.value })
        event.target.setCustomValidity("");
    }

    handleSubmit = (event) => {
        
        // <Router>
        //     <Route exact path="/contact" component={Contact} />
        // </Router>
        // const offset = this.state.fechai.getTimezoneOffset()
        // const yourDate = new Date(this.state.fechai.getTime() - (offset*60*1000))
        // yourDate = yourDate.toLocaleDateString('en-GB')
        // return yourDate.toISOString().split('T')[0]

        event.preventDefault()

        // let tema1 = this.state.temas;
        // let tema2 = tema1.replace(/\n/g, " ");

        // window.location.href = `/contact/${this.state.fechai}/${this.state.fechaf}/${tema2}`;

        let fi = new Date(this.state.fechai);
        let dd = String(fi.getDate()).padStart(2, '0');
        let mm = String(fi.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = fi.getFullYear();
        // const fechaini = dd + '/' + mm + '/' + yyyy;  
        const fechaini = yyyy + '-' + mm + '-' +dd;
    
        let ff = new Date(this.state.fechaf);
        dd = String(ff.getDate()).padStart(2, '0');
        mm = String(ff.getMonth() + 1).padStart(2, '0'); //January is 0!
        yyyy = ff.getFullYear();        
        const fechafin = yyyy + '-' + mm + '-' +dd;

        let twitterhandle = this.state.user.toLowerCase();

        if (this.state.temas === '') {
            alert('Debe ingresar uno o mas temas de busqueda');
            return;
        }    
        if (this.state.replies===true) {
            if (this.state.user !== '') {
                alert('No es posible buscar replies y usuario especifico al mismo tiempo');
                this.setState({user: '' })
                return;
            }
            let oneWeekBack = new Date();
            oneWeekBack.setDate(oneWeekBack.getDate()-7);
            if (fi < (oneWeekBack) ) {
                alert('Debe ingresar fecha inicial de hasta una semana atras para obtener replies');
                return;
            }            
        }   
        if  (this.state.fechai === '' || this.state.fechaf === '') {
            alert('Debe ingresar fechas para la busqueda');
            return;
        } else {
            if (fi > ff) {
                alert('La fecha final debe ser mayor a la inicial');
                return;
            }
        }




      

        this.mostrarGif();

        // alert(this.state.replies);

        let api = '';
        if (this.state.replies===true){
            api = "/api3/twitterScrapingReplies";
        } else {
            api = "/api1/twitterScraping";
         
        }

        // alert(api);

        // window.location.href = `/mostrararchivos/${this.state.replies }`; 

        Axios.post(api,{
            fechai: fechaini,
            fechaf: fechafin,
            temas: this.state.temas,
            user: twitterhandle,
            replies : this.state.replies 
        }).then(res => {
            console.log(res.data.lista_archivos);
            console.log(res.data.replies);

            window.sessionStorage.setItem("lista_archivos",res.data.lista_archivos)
            // window.location.href = `/mostrararchivos/${res.data.lista_archivos}`;
            window.location.href = `/mostrararchivos/${res.data.replies}`; 


        });

    }

    handleDateChange = (date) => {
        this.setState({fechai: date})
    }

    handleDateChangef = (date) => {
        this.setState({fechaf: date})
    }

    handleUserChange = (event) => {
        this.setState({user: event.target.value })
    }    

    handleRepliesChange = (event) => {
        this.setState({replies: event.target.checked })

    }    


    render() {
        
        


        const {temas, fechai, fechaf, procesando,user,replies} = this.state
        // console.log(this.state.show);
        
        return (
            <form onSubmit={this.handleSubmit} id="paramForm" method="post" >
                <div className='intro'>
                    <label htmlFor="user">Twitter user&nbsp;</label>
                    <span>
                    {/* <Input id="user" value={user ||''} type='text' variant='outlined' size='small' margin='normal' label='Twitter user'
                    onChange={this.handleUserChange} ></Input> */}
                    <input id="user" value={user ||''} type='text' onChange={this.handleUserChange} 
                    style={{width: '150px',height:'20px'}} />
                    
                    </span>
                    <label htmlFor="replies">Obtener Replies&nbsp;</label>
                    <span>
                    <input
                        name="replies"
                        type="checkbox"
                        checked={replies}
                        onChange={this.handleRepliesChange} />
                    </span>
                </div>
                <div >
               
                    <label htmlFor="temas">Temas&nbsp;</label>
                    <span> 
                    <textarea id="temas" value={temas ||''} onChange={this.handleTemasChange} onKeyDown={this.onKeyPress} 
                    cols = "50" rows= "10" ></textarea>
                </span>
                </div>
                
                <div  >
                <label htmlFor="fechai">Fecha desde</label>
                <span>
                <DatePicker 
                    selected={fechai} 
                    onChange={this.handleDateChange} 
                    name="fechai"
                    id="fechai"
                    label='Fecha desde'
                    dateFormat='dd/MM/yyyy'
                    maxDate={new Date()} />
                    </span>
                </div>
                <div >
                <label htmlFor="fechai">Fecha hasta&nbsp;</label>
                <span>
                <DatePicker 
                    selected={fechaf} 
                    onChange={this.handleDateChangef} 
                    name="fechaf"
                    dateFormat='dd/MM/yyyy'
                    maxDate={new Date()} />
                </span>
                </div>
                <div id="inner_med">
                    <span>
                        {procesando}
                    </span>
                </div>
                <button type="submit" >Enviar</button>
            </form>
        )
    }
    
}
export default Service;