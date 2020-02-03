import React, { Component } from 'react';

import './styles/Ejercicio1.css';


export default class Ejercicio1 extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="h1">TASK 3: 1,000 billetes de $1</h1>
                <p className="descripcion">Imagine que tiene mil billetes de $1 y 10 sobres. Y debe encontrar una manera de poner una cantidad determinada de billetes de $1 en cada uno de los sobres de tal forma que, sin importar la cantidad de dinero que se les pida (entre $1 y $1000), simplemente entreguen una combinación de los sobres y que siempre esté seguro de que está dando la cantidad correcta. Debe responder este task de manera descriptiva.</p>
                <h2>Respuesta: </h2>
                <p>Sobre 1: 1$</p>
                <p>Sobre 2: 2$</p>
                <p>Sobre 3: 3$</p>
                <p>Sobre 4: 5$</p>
                <p>Sobre 5: 10$</p>
                <p>Sobre 6: 20$</p>
                <p>Sobre 7: 40$</p>
                <p>Sobre 8: 80$</p>
                <p>Sobre 9: 150$</p>
                <p>Sobre 10: 400$</p>
            </div>
        )
    }
}