import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles/Navbar.css';

export default class Navbar extends Component{


    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Ejercicio 1</Link></li>
                    <li><Link to="/ejercicio2">Ejercicio 2</Link></li>
                    <li><Link to='/ejercicio3'>Ejercicio 3</Link></li>
                    <li><Link>Ejercicio 4</Link></li>
                </ul>
            </div>
        )
    }

}