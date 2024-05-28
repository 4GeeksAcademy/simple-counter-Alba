//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home";
import Card from "./component/Card.jsx";

//import your own components
//import Home from "./component/home.jsx";
let segundos = 0;
let minutos = 0;
let horas = 0;



const SimpleCounter = () => {
    segundos++;
    if(segundos == 60 ){
        segundos = 0;
        minutos++;
    }
    if(minutos == 60){
        minutos = 0;
        horas++;
    }
    
   
    contador();
    


    
}

//render your react application
let contador = () => {

    ReactDOM.render(<Card Horas = {horas} Minutos = {minutos} Segundos = {segundos} />, document.querySelector("#app"));
};
contador();
setInterval(SimpleCounter, 1000);




  