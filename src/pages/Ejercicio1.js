import React, { Component } from 'react';

import './styles/Ejercicio1.css';

function Lista(props) {
    const datos = props.datos;
    const listItems = datos.map((dato) =>
        <li className="item">{dato}</li>
    );
    return (
        <ul className="contenedorUl">{listItems}</ul>
    );
}

export default class Ejercicio1 extends Component {

    state = {
        datos: [1, 2, 3,'a','s',7,2]
    }


    darVuelta = (lista) =>{
        for(let i = 0; i < lista.length / 2; i++){
            let temporal = lista[i]
            lista[i] = lista[lista.length - (i + 1)]
            lista[lista.length - (i + 1)] = temporal;
        }
        this.setState({datos : lista})
    }

    render() {
        return (
            <div className="container">
                <h1 className="h1">TASK 1: List Reverse</h1>
                <p className="descripcion">Escriba una función que reciba una lista cualquiera y le de la vuelta a sus elementos, esto debe hacerse en la lista recibida, no puede declarar nuevas listas, variables auxiliares, ni implementar funciones externas. Su función debe devolver dicha lista.</p>
                <Lista datos={this.state.datos}/>
                <button className="button1" onClick={() => this.darVuelta(this.state.datos)}>Invertir</button>
            </div>
        )
    }
}