/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var audio, play, stop;

var app = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById("iniciar").addEventListener("click", mostrarMenuBack);
        document.getElementById("backMenu").addEventListener("click", mostrarPrincipal);
        document.getElementById("menu1").addEventListener("click", mostrarTrivia1);
        document.getElementById("trivia_11").addEventListener("click", mostrarTrivia2);
        document.getElementById("trivia_12").addEventListener("click", mostrarTrivia2);
        document.getElementById("trivia_13").addEventListener("click", mostrarTrivia2);
        document.getElementById("trivia_14").addEventListener("click", mostrarTrivia2);
        document.getElementById("trivia_21").addEventListener("click", mostrarTrivia3);
        document.getElementById("trivia_22").addEventListener("click", mostrarTrivia3);
        document.getElementById("trivia_23").addEventListener("click", mostrarTrivia3);
        document.getElementById("trivia_24").addEventListener("click", mostrarTrivia3);
        document.getElementById("trivia_31").addEventListener("click", mostrarTrivia4);
        document.getElementById("trivia_32").addEventListener("click", mostrarTrivia4);
        document.getElementById("trivia_33").addEventListener("click", mostrarTrivia4);
        document.getElementById("trivia_34").addEventListener("click", mostrarTrivia4);
        document.getElementById("trivia_41").addEventListener("click", mostrarTrivia5);
        document.getElementById("trivia_42").addEventListener("click", mostrarTrivia5);
        document.getElementById("trivia_43").addEventListener("click", mostrarTrivia5);
        document.getElementById("trivia_44").addEventListener("click", mostrarTrivia5);
        document.getElementById("trivia_51").addEventListener("click", mostrarMenu);
        document.getElementById("trivia_52").addEventListener("click", mostrarMenu);
        document.getElementById("trivia_53").addEventListener("click", mostrarMenu);
        document.getElementById("trivia_54").addEventListener("click", mostrarMenu);
        document.getElementById("menu2").addEventListener("click", mostrarResultado1);
        document.getElementById("resultado_11").addEventListener("click", mostrarResultado2);
        document.getElementById("resultado_12").addEventListener("click", mostrarResultado2);
        document.getElementById("resultado_13").addEventListener("click", mostrarResultado2);
        document.getElementById("resultado_14").addEventListener("click", mostrarResultado2);
        document.getElementById("resultado_21").addEventListener("click", mostrarResultado3);
        document.getElementById("resultado_22").addEventListener("click", mostrarResultado3);
        document.getElementById("resultado_23").addEventListener("click", mostrarResultado3);
        document.getElementById("resultado_24").addEventListener("click", mostrarResultado3);
        document.getElementById("resultado_31").addEventListener("click", mostrarResultado4);
        document.getElementById("resultado_32").addEventListener("click", mostrarResultado4);
        document.getElementById("resultado_33").addEventListener("click", mostrarResultado4);
        document.getElementById("resultado_34").addEventListener("click", mostrarResultado4);
        document.getElementById("resultado_41").addEventListener("click", mostrarResultado5);
        document.getElementById("resultado_42").addEventListener("click", mostrarResultado5);
        document.getElementById("resultado_43").addEventListener("click", mostrarResultado5);
        document.getElementById("resultado_44").addEventListener("click", mostrarResultado5);
        document.getElementById("resultado_51").addEventListener("click", mostrarMenu);
        document.getElementById("resultado_52").addEventListener("click", mostrarMenu);
        document.getElementById("resultado_53").addEventListener("click", mostrarMenu);
        document.getElementById("resultado_54").addEventListener("click", mostrarMenu);
        document.getElementById("menu3").addEventListener("click", mostrarRecuerda);
        document.getElementById("span_recuerda_11").addEventListener("click", mostrarFoto);
        document.getElementById("span_recuerda_12").addEventListener("click", mostrarFoto);
        document.getElementById("span_recuerda_13").addEventListener("click", mostrarFoto);
        document.getElementById("recuerda_11").addEventListener("click", mostrarFoto);
        document.getElementById("recuerda_11").addEventListener("click", mostrarFoto);
        document.getElementById("scoreIcon").addEventListener("click", mostrarPuntaje);
        document.getElementById("credits").addEventListener("click", mostrarCreditos);
        document.getElementById("backCredito").addEventListener("click", mostrarPrincipal);
        document.getElementById("backPuntaje").addEventListener("click", mostrarMenuBack);
        document.getElementById("backRecuerda").addEventListener("click", mostrarMenuBack);
        document.getElementById("trash").addEventListener("click", reiniciarPuntaje);

        audio = document.createElement('audio');
        audio.setAttribute('autoplay', 'autoplay');
        audio.setAttribute('loop', 'loop');
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var puntaje = 0;
var recuerda = 0;

function ocultar(){

    document.getElementById("correcto").className = "ocultar";
    document.getElementById("incorrecto").className = "ocultar";
    document.getElementById("divPrincipal").className = "ocultar";
    document.getElementById("divMenu").className = "ocultar";
    document.getElementById("trivia1").className = "ocultar";
    document.getElementById("trivia2").className = "ocultar";
    document.getElementById("trivia3").className = "ocultar";
    document.getElementById("trivia4").className = "ocultar";
    document.getElementById("trivia5").className = "ocultar";
    document.getElementById("resultado1").className = "ocultar";
    document.getElementById("resultado2").className = "ocultar";
    document.getElementById("resultado3").className = "ocultar";
    document.getElementById("resultado4").className = "ocultar";
    document.getElementById("resultado5").className = "ocultar";
    document.getElementById("recuerda").className = "ocultar";
    document.getElementById("interfazPuntaje").className = "ocultar";
    document.getElementById("interfazCreditos").className = "ocultar";
}

function mostrarMenu(){
    
    audio.pause();
    audio.setAttribute('src', 'audio/Sonos.mp3');
    audio.play();
    if (this.id == "resultado_54") {
        puntaje++;
        document.getElementById("correcto").classList.remove("ocultar");
    } else if (this.id == "trivia_54") {
        puntaje++;
        document.getElementById("correcto").classList.remove("ocultar");
    }else {
        document.getElementById("incorrecto").classList.remove("ocultar");

    }
    setTimeout(() => {
        ocultar();
        document.getElementById("bodyIndex").className = "fondo fondoMenu";
        document.getElementById("divMenu").className = "centroMenu animated fadeInDownBig";
    }, 500);

}
function mostrarMenuBack(){
        recuerda = 0;
        ocultar();
        document.getElementById("span_recuerda_11").addEventListener("click", mostrarFoto);
        document.getElementById("span_recuerda_12").addEventListener("click", mostrarFoto);
        document.getElementById("span_recuerda_13").addEventListener("click", mostrarFoto);
        audio.setAttribute('src', 'audio/Sonos.mp3');
        audio.play();
        document.getElementById("bodyIndex").className = "fondo fondoMenu";
        document.getElementById("divMenu").className = "centroMenu animated fadeInDownBig";
}

function mostrarPrincipal(){

    audio.pause();
    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoPrincipal";
    document.getElementById("divPrincipal").className = "centrado animated jello";
}

function mostrarTrivia1(){

    ocultar();

    var numeroRandom = getRandom();
    var opcion1 = numeroRandom[0]+1;
    var opcion2 = numeroRandom[1]+1;
    var opcion3 = numeroRandom[2]+1;
    var opcion4 = numeroRandom[3]+1;
    

    document.getElementById("trivia_11").src = "img/Trivia 1/trivia-"+opcion1+".png";
    document.getElementById("trivia_12").src = "img/Trivia 1/trivia-"+opcion2+".png";
    document.getElementById("trivia_13").src = "img/Trivia 1/trivia-"+opcion3+".png";
    document.getElementById("trivia_14").src = "img/Trivia 1/trivia-"+opcion4+".png";

    if (opcion1 == 5){
        document.getElementById("trivia_11").id = "trivia_10";
        document.getElementById("trivia_14").id = "trivia_11";
        document.getElementById("trivia_10").id = "trivia_14";
    }
    else if (opcion2 == 5){
        document.getElementById("trivia_12").id = "trivia_10";
        document.getElementById("trivia_14").id = "trivia_12";
        document.getElementById("trivia_10").id = "trivia_14";
    }
    else if (opcion3 == 5){
        document.getElementById("trivia_13").id = "trivia_10";
        document.getElementById("trivia_14").id = "trivia_13";
        document.getElementById("trivia_10").id = "trivia_14";
    }   

    document.getElementById("bodyIndex").className = "fondo fondoTrivia1";
    document.getElementById("trivia1").className = "centroTrivia animated bounce";

    audio.pause();
    audio.setAttribute('src', 'audio/SONIDO DE PREGUNTA.mp3');
    audio.play();
    
}

function mostrarTrivia2(){

    if (this.id == "trivia_14") {      
        document.getElementById("correcto").classList.remove("ocultar");
        puntaje++;
    }else{
        document.getElementById("incorrecto").classList.remove("ocultar");
    }
    setTimeout(() => {
        ocultar();

        var numeroRandom = getRandom();
        var opcion1 = numeroRandom[0]+1;
        var opcion2 = numeroRandom[1]+1;
        var opcion3 = numeroRandom[2]+1;
        var opcion4 = numeroRandom[3]+1;
        

        document.getElementById("trivia_21").src = "img/Trivia 2/trivia-"+opcion1+".png";
        document.getElementById("trivia_22").src = "img/Trivia 2/trivia-"+opcion2+".png";
        document.getElementById("trivia_23").src = "img/Trivia 2/trivia-"+opcion3+".png";
        document.getElementById("trivia_24").src = "img/Trivia 2/trivia-"+opcion4+".png";

        if (opcion1 == 2){
            document.getElementById("trivia_21").id = "trivia_20";
            document.getElementById("trivia_24").id = "trivia_21";
            document.getElementById("trivia_20").id = "trivia_24";
        }
        else if (opcion2 == 2){
            document.getElementById("trivia_22").id = "trivia_20";
            document.getElementById("trivia_24").id = "trivia_22";
            document.getElementById("trivia_20").id = "trivia_24";
        }
        else if (opcion3 == 2){
            document.getElementById("trivia_23").id = "trivia_20";
            document.getElementById("trivia_24").id = "trivia_23";
            document.getElementById("trivia_20").id = "trivia_24";
        }      

        document.getElementById("bodyIndex").className = "fondo fondoTrivia2";
        document.getElementById("trivia2").className = "centroTrivia animated bounce";
        
    }, 500);
}

function mostrarTrivia3(){
    if (this.id == "trivia_24") {
        document.getElementById("correcto").classList.remove("ocultar");
        puntaje++;
    } else {
        document.getElementById("incorrecto").classList.remove("ocultar");
    }
    setTimeout(() => {
        ocultar();

        var numeroRandom = getRandom();
        var opcion1 = numeroRandom[0]+1;
        var opcion2 = numeroRandom[1]+1;
        var opcion3 = numeroRandom[2]+1;
        var opcion4 = numeroRandom[3]+1;
        

        document.getElementById("trivia_31").src = "img/Trivia 3/trivia-"+opcion1+".png";
        document.getElementById("trivia_32").src = "img/Trivia 3/trivia-"+opcion2+".png";
        document.getElementById("trivia_33").src = "img/Trivia 3/trivia-"+opcion3+".png";
        document.getElementById("trivia_34").src = "img/Trivia 3/trivia-"+opcion4+".png";

        if (opcion1 == 5){
            document.getElementById("trivia_31").id = "trivia_30";
            document.getElementById("trivia_34").id = "trivia_31";
            document.getElementById("trivia_30").id = "trivia_34";
        }
        else if (opcion2 == 5){
            document.getElementById("trivia_32").id = "trivia_30";
            document.getElementById("trivia_34").id = "trivia_32";
            document.getElementById("trivia_30").id = "trivia_34";
        }   
        else if (opcion3 == 5){
            document.getElementById("trivia_33").id = "trivia_30";
            document.getElementById("trivia_34").id = "trivia_33";
            document.getElementById("trivia_30").id = "trivia_34";
        }      

        document.getElementById("bodyIndex").className = "fondo fondoTrivia3";
        document.getElementById("trivia3").className = "centroTrivia animated bounce";
    }, 500);
}

function mostrarTrivia4(){
    if (this.id == "trivia_34") {
        document.getElementById("correcto").classList.remove("ocultar");
        puntaje++;
    } else {
        document.getElementById("incorrecto").classList.remove("ocultar");
    }
    setTimeout(() => {
        ocultar();

        var numeroRandom = getRandom();
        var opcion1 = numeroRandom[0]+1;
        var opcion2 = numeroRandom[1]+1;
        var opcion3 = numeroRandom[2]+1;
        var opcion4 = numeroRandom[3]+1;
        

        document.getElementById("trivia_41").src = "img/Trivia 4/trivia-"+opcion1+".png";
        document.getElementById("trivia_42").src = "img/Trivia 4/trivia-"+opcion2+".png";
        document.getElementById("trivia_43").src = "img/Trivia 4/trivia-"+opcion3+".png";
        document.getElementById("trivia_44").src = "img/Trivia 4/trivia-"+opcion4+".png";

        if (opcion1 == 3){
            document.getElementById("trivia_41").id = "trivia_40";
            document.getElementById("trivia_44").id = "trivia_41";
            document.getElementById("trivia_40").id = "trivia_44";
        }
        else if (opcion2 == 3){
            document.getElementById("trivia_42").id = "trivia_40";
            document.getElementById("trivia_44").id = "trivia_42";
            document.getElementById("trivia_40").id = "trivia_44";
        }   
        else if (opcion3 == 3){
            document.getElementById("trivia_43").id = "trivia_40";
            document.getElementById("trivia_44").id = "trivia_43";
            document.getElementById("trivia_40").id = "trivia_44";
        }      

        document.getElementById("bodyIndex").className = "fondo fondoTrivia4";
        document.getElementById("trivia4").className = "centroTrivia animated bounce";
    }, 500);
}

function mostrarTrivia5(){
    if (this.id == "trivia_44") {
        document.getElementById("correcto").classList.remove("ocultar");
        puntaje++;
    } else {
        document.getElementById("incorrecto").classList.remove("ocultar");
    }
    setTimeout(() => {
        ocultar();

        var numeroRandom = getRandom();
        var opcion1 = numeroRandom[0]+1;
        var opcion2 = numeroRandom[1]+1;
        var opcion3 = numeroRandom[2]+1;
        var opcion4 = numeroRandom[3]+1;
        

        document.getElementById("trivia_51").src = "img/Trivia 5/trivia-"+opcion1+".png";
        document.getElementById("trivia_52").src = "img/Trivia 5/trivia-"+opcion2+".png";
        document.getElementById("trivia_53").src = "img/Trivia 5/trivia-"+opcion3+".png";
        document.getElementById("trivia_54").src = "img/Trivia 5/trivia-"+opcion4+".png";

        if (opcion1 == 2){
            document.getElementById("trivia_51").id = "trivia_50";
            document.getElementById("trivia_54").id = "trivia_51";
            document.getElementById("trivia_50").id = "trivia_54";
        }
        else if (opcion2 == 2){
            document.getElementById("trivia_52").id = "trivia_50";
            document.getElementById("trivia_54").id = "trivia_52";
            document.getElementById("trivia_50").id = "trivia_54";
        }   
        else if (opcion3 == 2){
            document.getElementById("trivia_53").id = "trivia_50";
            document.getElementById("trivia_54").id = "trivia_53";
            document.getElementById("trivia_50").id = "trivia_54";
        }      

        document.getElementById("bodyIndex").className = "fondo fondoTrivia5";
        document.getElementById("trivia5").className = "centroTrivia animated bounce";
    }, 500);
}

function mostrarResultado1(){

    ocultar();
    var numeroRandom = getRandom();
    var opcion1 = numeroRandom[0]+1;
    var opcion2 = numeroRandom[1]+1;
    var opcion3 = numeroRandom[2]+1;
    var opcion4 = numeroRandom[3]+1;
    

    document.getElementById("resultado_11").src = "img/Resultado 1/resultado-"+opcion1+".png";
    document.getElementById("resultado_12").src = "img/Resultado 1/resultado-"+opcion2+".png";
    document.getElementById("resultado_13").src = "img/Resultado 1/resultado-"+opcion3+".png";
    document.getElementById("resultado_14").src = "img/Resultado 1/resultado-"+opcion4+".png";

    if (opcion1 == 3){
        document.getElementById("resultado_11").id = "resultado_10";
        document.getElementById("resultado_14").id = "resultado_11";
        document.getElementById("resultado_10").id = "resultado_14";
    }
    else if (opcion2 == 3){
        document.getElementById("resultado_12").id = "resultado_10";
        document.getElementById("resultado_14").id = "resultado_12";
        document.getElementById("resultado_10").id = "resultado_14";
    }
    else if (opcion3 == 3){
        document.getElementById("resultado_13").id = "resultado_10";
        document.getElementById("resultado_14").id = "resultado_13";
        document.getElementById("resultado_10").id = "resultado_14";
    }   

    document.getElementById("bodyIndex").className = "fondo fondoResultado1";
    document.getElementById("resultado1").className = "centroTrivia animated heartBeat";

    audio.pause();
    audio.setAttribute('src', 'audio/SONIDO DE PREGUNTA.mp3');
    audio.play();
}

function mostrarResultado2(){
    if (this.id == "resultado_14") {
        document.getElementById("correcto").classList.remove("ocultar");
        puntaje++;
    } else {
        document.getElementById("incorrecto").classList.remove("ocultar");
    }
    setTimeout(() => {
        ocultar();

        var numeroRandom = getRandom();
        var opcion1 = numeroRandom[0]+1;
        var opcion2 = numeroRandom[1]+1;
        var opcion3 = numeroRandom[2]+1;
        var opcion4 = numeroRandom[3]+1;
        

        document.getElementById("resultado_21").src = "img/Resultado 2/resultado-"+opcion1+".png";
        document.getElementById("resultado_22").src = "img/Resultado 2/resultado-"+opcion2+".png";
        document.getElementById("resultado_23").src = "img/Resultado 2/resultado-"+opcion3+".png";
        document.getElementById("resultado_24").src = "img/Resultado 2/resultado-"+opcion4+".png";

        if (opcion1 == 4){
            document.getElementById("resultado_21").id = "resultado_20";
            document.getElementById("resultado_24").id = "resultado_21";
            document.getElementById("resultado_20").id = "resultado_24";
        }
        else if (opcion2 == 4){
            document.getElementById("resultado_22").id = "resultado_20";
            document.getElementById("resultado_24").id = "resultado_22";
            document.getElementById("resultado_20").id = "resultado_24";
        }
        else if (opcion3 == 4){
            document.getElementById("resultado_23").id = "resultado_20";
            document.getElementById("resultado_24").id = "resultado_23";
            document.getElementById("resultado_20").id = "resultado_24";
        }   

        document.getElementById("bodyIndex").className = "fondo fondoResultado2";
        document.getElementById("resultado2").className = "centroTrivia animated heartBeat";
    }, 500);
}

function mostrarResultado3(){
    if (this.id == "resultado_24") {
        document.getElementById("correcto").classList.remove("ocultar");
        puntaje++;
    } else {
        document.getElementById("incorrecto").classList.remove("ocultar");
    }
    setTimeout(() => {
        ocultar();

        var numeroRandom = getRandom();
        var opcion1 = numeroRandom[0]+1;
        var opcion2 = numeroRandom[1]+1;
        var opcion3 = numeroRandom[2]+1;
        var opcion4 = numeroRandom[3]+1;
        

        document.getElementById("resultado_31").src = "img/Resultado 3/resultado-"+opcion1+".png";
        document.getElementById("resultado_32").src = "img/Resultado 3/resultado-"+opcion2+".png";
        document.getElementById("resultado_33").src = "img/Resultado 3/resultado-"+opcion3+".png";
        document.getElementById("resultado_34").src = "img/Resultado 3/resultado-"+opcion4+".png";

        if (opcion1 == 5){
            document.getElementById("resultado_31").id = "resultado_30";
            document.getElementById("resultado_34").id = "resultado_31";
            document.getElementById("resultado_30").id = "resultado_34";
        }
        else if (opcion2 == 5){
            document.getElementById("resultado_32").id = "resultado_30";
            document.getElementById("resultado_34").id = "resultado_32";
            document.getElementById("resultado_30").id = "resultado_34";
        }
        else if (opcion3 == 5){
            document.getElementById("resultado_33").id = "resultado_30";
            document.getElementById("resultado_34").id = "resultado_33";
            document.getElementById("resultado_30").id = "resultado_34";
        }   

        document.getElementById("bodyIndex").className = "fondo fondoResultado3";
        document.getElementById("resultado3").className = "centroTrivia animated heartBeat";
    }, 500);
}

function mostrarResultado4(){
    if (this.id == "resultado_34") {
        document.getElementById("correcto").classList.remove("ocultar");
        puntaje++;
    } else {
        document.getElementById("incorrecto").classList.remove("ocultar");
    }
    setTimeout(() => {
        ocultar();

        var numeroRandom = getRandom();
        var opcion1 = numeroRandom[0]+1;
        var opcion2 = numeroRandom[1]+1;
        var opcion3 = numeroRandom[2]+1;
        var opcion4 = numeroRandom[3]+1;
        

        document.getElementById("resultado_41").src = "img/Resultado 4/resultado-"+opcion1+".png";
        document.getElementById("resultado_42").src = "img/Resultado 4/resultado-"+opcion2+".png";
        document.getElementById("resultado_43").src = "img/Resultado 4/resultado-"+opcion3+".png";
        document.getElementById("resultado_44").src = "img/Resultado 4/resultado-"+opcion4+".png";

        if (opcion1 == 4){
            document.getElementById("resultado_41").id = "resultado_40";
            document.getElementById("resultado_44").id = "resultado_41";
            document.getElementById("resultado_40").id = "resultado_44";
        }
        else if (opcion2 == 4){
            document.getElementById("resultado_42").id = "resultado_40";
            document.getElementById("resultado_44").id = "resultado_42";
            document.getElementById("resultado_40").id = "resultado_44";
        }
        else if (opcion3 == 4){
            document.getElementById("resultado_43").id = "resultado_40";
            document.getElementById("resultado_44").id = "resultado_43";
            document.getElementById("resultado_40").id = "resultado_44";
        }   

        document.getElementById("bodyIndex").className = "fondo fondoResultado4";
        document.getElementById("resultado4").className = "centroTrivia animated heartBeat";
    }, 500);
}

function mostrarResultado5(){
    if (this.id == "resultado_44") {
        document.getElementById("correcto").classList.remove("ocultar");
        puntaje++;
    } else {
        document.getElementById("incorrecto").classList.remove("ocultar");
    }
    setTimeout(() => {
        ocultar();

        var numeroRandom = getRandom();
        var opcion1 = numeroRandom[0]+1;
        var opcion2 = numeroRandom[1]+1;
        var opcion3 = numeroRandom[2]+1;
        var opcion4 = numeroRandom[3]+1;
        

        document.getElementById("resultado_51").src = "img/Resultado 5/resultado-"+opcion1+".png";
        document.getElementById("resultado_52").src = "img/Resultado 5/resultado-"+opcion2+".png";
        document.getElementById("resultado_53").src = "img/Resultado 5/resultado-"+opcion3+".png";
        document.getElementById("resultado_54").src = "img/Resultado 5/resultado-"+opcion4+".png";

        if (opcion1 == 2){
            document.getElementById("resultado_51").id = "resultado_50";
            document.getElementById("resultado_54").id = "resultado_51";
            document.getElementById("resultado_50").id = "resultado_54";
        }
        else if (opcion2 == 2){
            document.getElementById("resultado_52").id = "resultado_50";
            document.getElementById("resultado_54").id = "resultado_52";
            document.getElementById("resultado_50").id = "resultado_54";
        }
        else if (opcion3 == 2){
            document.getElementById("resultado_53").id = "resultado_50";
            document.getElementById("resultado_54").id = "resultado_53";
            document.getElementById("resultado_50").id = "resultado_54";
        }   

        document.getElementById("bodyIndex").className = "fondo fondoResultado5";
        document.getElementById("resultado5").className = "centroTrivia animated heartBeat";
    }, 500);
}

function mostrarRecuerda(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoRecuerda";
    document.getElementById("recuerda").className = "centroTrivia animated flash";
    document.getElementById("recuerda_11").classList.remove("esconder");
    document.getElementById("recuerda_12").classList.remove("esconder");
    document.getElementById("recuerda_13").classList.remove("esconder");
    
    audio.pause();
    audio.setAttribute('src', 'audio/Turbo_Stasis.mp3');
    audio.play();

    setTimeout(() => {
        document.getElementById("recuerda_11").className = "esconder";
        document.getElementById("recuerda_12").className = "esconder";
        document.getElementById("recuerda_13").className = "esconder";
    }, 2000);
}

function mostrarFoto(){
    if (this.id == "span_recuerda_11") {
    // if (true) {
        document.getElementById("recuerda_11").classList.remove("esconder");
        recuerda++;
        puntaje++;
        document.getElementById("span_recuerda_11").removeEventListener("click", mostrarFoto);
    }
    if (this.id == "span_recuerda_12") {
        // if (true) {
        document.getElementById("recuerda_12").classList.remove("esconder");
        document.getElementById("span_recuerda_12").removeEventListener("click", mostrarFoto);
        recuerda++;
        puntaje++;
    }
    // if (true) {
    if (this.id == "span_recuerda_13") {
        document.getElementById("recuerda_13").classList.remove("esconder");
        recuerda++;
        puntaje++;
        document.getElementById("span_recuerda_13").removeEventListener("click", mostrarFoto);

    }
    if(recuerda == 3)
    {
        document.getElementById("correcto").classList.remove("ocultar");

        setTimeout(() => {
            ocultar();
            recuerda = 0;
            document.getElementById("bodyIndex").className = "fondo fondoMenu";
            document.getElementById("divMenu").className = "centroMenu animated fadeInDownBig";
            document.getElementById("span_recuerda_11").addEventListener("click", mostrarFoto);
            document.getElementById("span_recuerda_12").addEventListener("click", mostrarFoto);
            document.getElementById("span_recuerda_13").addEventListener("click", mostrarFoto);
            audio.pause();
            audio.setAttribute('src', 'audio/Sonos.mp3');
            audio.play();  
        }, 500);   
    }
}

function mostrarPuntaje(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoMenu";
    document.getElementById("interfazPuntaje").className = "centroMenu animated fadeInDownBig";

    if (puntaje > 13){

        puntaje = 13;
    }

    document.getElementById("puntaje").innerHTML = puntaje; 

    audio.pause();
    audio.setAttribute('src', 'audio/Taaan taan taan.mp3');
    audio.play();
}

 //HEAD
function mostrarCreditos(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoPrincipal";
    document.getElementById("interfazCreditos").className = "centroMenu animated fadeInDownBig";

    audio.pause();
    audio.setAttribute('src', 'audio/Creditos finales.mp3');
    audio.play();
}


function modal() {
   var modal = document.getElementById("resultados-modal").addEventListener("click", function() {
       var ocultar = this.getElementById("ocultar");
   });
   
}

function reiniciarPuntaje(){

    puntaje = 0;
    document.getElementById("puntaje").innerHTML = puntaje;
}

function getRandom() {
    //return Math.floor(Math.random()*(5 - 1)) + 1;
  //}

  var myArray = [1,2,3,4];

    var i,j,k;
    for (i = myArray.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = myArray[i - 1];
        myArray[i - 1] = myArray[j];
        myArray[j] = k;
    }
    
    return myArray;
}
//b4c153f0d6302202895620a5ffe5c0a65ac6805
app.initialize();