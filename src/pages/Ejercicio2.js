import React, { Component } from 'react';

import './styles/Ejercicio2.css';

function Lista(props) {
    const datos = props.datos;
    const listItems = datos.map((dato) =>
        <>
            <li className="item2">{dato[0]}  ,  {dato[1]}</li>
        </>
    );
    return (
        <ul className="contenedorUl2">{listItems}</ul>
    );
}

export default class Ejercicio2 extends Component {

    state = {
        coordenadas: [[1, 1], [1,3], [3,1], [3, 3]],
        cuadrado: ''
    }

    validar = (lista) => {
        var dato1;
        var dato2;
        var dato3;
        var dato4;

        dato1 = lista[0][0]
        console.log(dato1,'x')
        let paso1 = lista.filter((item) => item[0] == dato1)
        if (paso1.length == 2) {
            let paso2 = lista.filter((item) => item[0] != dato1)
            if (paso2.length != 0) {
                dato2 = paso2[0][0];
                console.log(dato2,'x2')
                let paso3 = lista.filter((item) => item[0] == paso2[0][0])
                if (paso3.length == 2) {

                    //Validando el punto Y
                    dato3 = lista[0][1]
                    console.log(dato3,'y')
                    let paso4 = lista.filter((item) => item[1] == dato3)
                    if (paso4.length == 2) {
                        let paso5 = lista.filter((item) => item[1] != dato3)
                        if(paso5.length != 0){
                            dato4 = paso5[0][1];
                            console.log(dato4,'y2')
                            let paso6 = lista.filter((item) => item[1] == paso5[0][1] )
                            if(paso6.length == 2){
                                let resta = dato1 - dato2;
                                let resta2 = dato3 - dato4;
                                if(Math.abs(resta) == Math.abs(resta2)){
                                    console.log('Si es cuadrado')
                                    this.setState({cuadrado : 'True'})
                                }else{
                                    this.setState({cuadrado : 'False'})
                                }
                            }else{
                                console.log('no es cuadrado Y 1')
                                this.setState({cuadrado : 'False'})
                            }
                        }else{
                            console.log('no es cuadrado Y 2')
                            this.setState({cuadrado : 'False'})
                        }
                    }else{
                        console.log('no es cuadrado Y 3')
                        this.setState({cuadrado : 'False'})
                    }

                } else {
                    console.log('no es cuadrado1')
                    this.setState({cuadrado : 'False'})

                }
            } else {
                console.log('no es cuadrado2')
                this.setState({cuadrado : 'False'})

            }
        } else {
            console.log('no es cuadrado3')
            this.setState({cuadrado : 'False'})

        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="h1">TASK 2: Perfect Square</h1>
                <p className="descripcion">Escriba una función que reciba cuatro tuplas de dos dimensiones (representando cuatro puntos en el espacio bidimensional). Su función debe devolver True si estos cuatro puntos forman un cuadrado perfecto, o False si no.</p>

                <div className="row">
                    <Lista datos={this.state.coordenadas} />
                    <h2>Cuadrado: {this.state.cuadrado}</h2>
                </div>
                <button className="button" onClick={() => this.validar(this.state.coordenadas)}>Validar</button>
            </div>
        )
    }
}