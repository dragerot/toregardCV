import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Form.js';
import Knapp from './Knapp.js';
import Meny from './Meny';
import Timer from './Timer';
import KundeRegistrer from './KundeRegistrer.react';

function thinksToDo(){
   console.log("tick");
}

class Appfjern extends Component {

    handterbarnKlick(title){
        console.log("App kaller fra med argumentet: "+title);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2 style={{color: "blue" }} >Velkommen til Tore Gard CV</h2>
                </div>
                <div className="App-intro">
                    <Hello toWhat="Tore Gard"/>
                    <Knapp kallmeg={this.handterbarnKlick} /> <br/>
                    <Meny list={["2017", "2016", "2015", "2014", "2013"]}/>
                    <Timer onInterval={thinksToDo} interval={1000}/>
                    <KundeRegistrer/>
                    )
                </div>
            </div>
        )
    }
};



export default Appfjern;

