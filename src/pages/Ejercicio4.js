import React, { Component } from 'react';

import './styles/Ejercicio4.css';
import $ from "jquery";

export default class Ejercicio1 extends Component {


    componentDidMount() {
        var simonMovements = [];
        var answers = [];
        var rounds = 0;

        //Agregando movientos que usuario tendra que hacer
        var addColor = function (arr) {
            var colorsArray = ["green", "red", "yellow", "blue"];
            return arr.push(colorsArray[Math.floor(Math.random() * colorsArray.length)]);
        };

        //Movimientos que el usuario tendra que hacer
        var flashLights = function (arr) {
            var i = 0;

            var interval = setInterval(function () {
                $("#" + arr[i]).fadeTo("slow", 0).fadeTo("slow", 1);
                $("#sound-" + arr[i])[0].play();
                i++;
                if (i >= arr.length) {
                    clearInterval(interval);
                }
            }, 1000);
        };

        //Limpia las respuestas
        var resetAnswers = function () {
            answers = [];
        };

        //Actualiza el nuevo de rondas
        var updateRounds = function () {
            rounds++;
            $("#show-rounds").html(rounds);
        };

        //Reinicio del juego
        var resetGame = function () {
            rounds = 0;
            $("#show-rounds").html(rounds);
            simonMovements = [];
            resetAnswers();
        };

        var playerTurn = function () {

            //Termina el juego saliendo victorioso
            if (rounds === 5) {
                alert("Felicidades!");
                resetGame();
            }

            updateRounds();
            addColor(simonMovements);
            flashLights(simonMovements);

            //Detecta la respuesta del usuario tras la secuencia de colores
            $(".button").off("click").on("click", function () {
                $("#sound-" + $(this).attr("id"))[0].play();
                answers.push($(this).attr("id"));

                for (var i = 0; i < answers.length; i++) {
                    //Respuesta correcta
                    if (JSON.stringify(simonMovements) === JSON.stringify(answers)) {
                        resetAnswers();
                        playerTurn();
                        break;
                    }

                    //Fin del juego
                    if (answers[i] !== simonMovements[i]) {
                            alert("Game Over! Vuelve a intentarlo");
                            resetGame();
                            break;
                    }
                }
            });
        };

        //Inicia el juego
        $("#start").click(function () {
            playerTurn();
        });

    }


    render() {

        return (
            <div className="container">
                <audio preload="auto" id="sound-green"> <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"></source></audio>
                <audio preload="auto" id="sound-red"><source src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"></source></audio>
                <audio preload="auto" id="sound-yellow"><source src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"></source></audio>
                <audio preload="auto" id="sound-blue"><source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"></source></audio>
                <h1 className="h1">TASK 4: Simón</h1>
                <p className="descripcion">Cree un juego de Simón (https://www.youtube.com/watch?v=1Yqj76Q4jJ4). Su programa deberá proveer un mecanismo para distinguir qué secuencias de colores debe el usuario replicar, y debe generar una secuencia incremental cada vez que el usuario acierta un color.</p>

                <div id='container'>
                    <div className='button' id='green'> </div>
                    <div className='button' id='red'> </div>
                    <div className='button' id='yellow'> </div>
                    <div className='button' id='blue'> </div>
                </div>
                <div id='menu'>
                    <div className='box' id='show-rounds'>0</div>
                    <div className='box' id='start'>Empezar</div>
                </div>
            </div >
        )
    }
}