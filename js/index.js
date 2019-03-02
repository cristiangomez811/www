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
var app = {
    // Application Constructor
    initialize: function() {
        
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById("iniciar").addEventListener("click", mostrarMenu);
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
        //document.getElementById("trivia_51").addEventListener("click", mostrarMenu);
        //document.getElementById("trivia_52").addEventListener("click", mostrarMenu);
        //document.getElementById("trivia_53").addEventListener("click", mostrarMenu);
        //document.getElementById("trivia_54").addEventListener("click", mostrarMenu);
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

function ocultar(){

    document.getElementById("divPrincipal").className = "ocultar";
    document.getElementById("divMenu").className = "ocultar";
    document.getElementById("trivia1").className = "ocultar";
    document.getElementById("trivia2").className = "ocultar";
    document.getElementById("trivia3").className = "ocultar";
    document.getElementById("trivia4").className = "ocultar";
    document.getElementById("trivia5").className = "ocultar";
}

function mostrarMenu(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoMenu";
    document.getElementById("divMenu").className = "centroMenu animated fadeInDownBig";
}

function mostrarPrincipal(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoPrincipal";
    document.getElementById("divPrincipal").className = "centrado animated jello";
}

function mostrarTrivia1(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia1";
    document.getElementById("trivia1").className = "centroTrivia";
}

function mostrarTrivia2(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia2";
    document.getElementById("trivia2").className = "centroTrivia";
}

function mostrarTrivia3(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia3";
    document.getElementById("trivia3").className = "centroTrivia";
}

function mostrarTrivia4(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia4";
    document.getElementById("trivia4").className = "centroTrivia";
}

function mostrarTrivia5(){

    ocultar();
    document.getElementById("bodyIndex").className = "fondo fondoTrivia5";
    document.getElementById("trivia5").className = "centroTrivia";
}

app.initialize();