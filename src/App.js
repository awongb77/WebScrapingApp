import React from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import ServiceFace from "./pages/Service/ServiceFace";
import ServiceInstagram from "./pages/Service/ServiceInstagram";
import NotFound from "./pages/NotFound";
import MostrarArchivos from "./pages/Service/MostrarArchivos";
import MostrarResultados from "./pages/Service/MostrarResultados";


import {BrowserRouter as Router, Route,  NavLink, Switch } from "react-router-dom";

function App(){
  return (
    <Router>
      <div className="App">
        <h2>Menu Principal</h2>
        {/* &nbsp;<Link to="/">No Page</Link>&nbsp; */}
        <NavLink activeStyle={{color: "red"}} to="/home">Home</NavLink>&nbsp;
        {/* <NavLink activeStyle={{color: "red"}} to="/about">About</NavLink>&nbsp; */}
        {/* <NavLink activeStyle={{color: "red"}} to="/contact">Contact</NavLink>&nbsp; */}
        <NavLink activeStyle={{color: "red"}} to="/service">Twitter</NavLink>&nbsp;
        <NavLink activeStyle={{color: "red"}} to="/serviceFace">Facebook</NavLink>&nbsp;
        <NavLink activeStyle={{color: "red"}} to="/serviceInstagram">Instagram</NavLink>&nbsp;
        <hr />

        <Switch>
          <Route path={"/home"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/contact/:fechai/:fechaf/:temas"} component={Contact} />
          <Route path={"/service"} component={Service} />
          <Route path={"/serviceFace"} component={ServiceFace} />
          <Route path={"/serviceInstagram"} component={ServiceInstagram} />
          <Route path={"/mostrararchivos/:replies"} component={MostrarArchivos} />
          <Route path={"/mostrarresultados/:lista_graficos"} component={MostrarResultados} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
