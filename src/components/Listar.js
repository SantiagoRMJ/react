import React from "react"

export default function Listar(props) {
    return (      
          <li>se llama {props.nombre} tiene {props.edad} y su telefono es{props.telefono} </li> 
    );
  }
