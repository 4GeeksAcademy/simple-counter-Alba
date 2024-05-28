import React from "react";
import ReactDOM from "react-dom";
import style from "/src/styles/index.css";

import { TfiAlarmClock } from "react-icons/tfi";
 

const Card = (props) =>{
    return(
        <div>
        <div className="container">
                <h1 className="tittle"><strong>Counter</strong></h1>
            <div className="BigCounter" style={{fontSize: "50px"}}>
            <TfiAlarmClock />
                <span className="Horas ms-5">{props.Horas}h</span>
                
                <span className="Minutos">{props.Minutos}m</span>
                
                <span className="Segundos">{props.Segundos}s</span>

                
            </div>

               
            </div>
           
            

        </div>
    )
}

export default Card; 