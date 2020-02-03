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
        datos: [1, 2, 3, 4, 5, 6]
    }

    darVuelta = (lista) =>{
        console.log('entra')
        this.setState({datos : lista.reverse()})
    }

    render() {
        return (
            <div className="container">
                <h1 className="h1">TASK 1: List Reverse</h1>
                <p className="descripcion">Escriba una función que reciba una lista cualquiera y le de la vuelta a sus elementos, esto debe hacerse en la lista recibida, no puede declarar nuevas listas, variables auxiliares, ni implementar funciones externas. Su función debe devolver dicha lista.</p>
                <Lista datos={this.state.datos}/>
                <button className="button" onClick={() => this.darVuelta(this.state.datos)}>Invertir</button>
            </div>
        )
    }
}