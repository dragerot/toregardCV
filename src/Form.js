import React from "react";
import Meny from './Meny';

var Form  = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();

      },
    skrivutinntasting : function (event){
        console.log(event.target.value);
    },
    render : function(){
        return (
          <form  className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit}>

              <input placeholder="søk" ref="login" onChange={this.skrivutinntasting}/>
              <button>Søk</button>
              <Meny list={["2017", "2016", "2015", "2014", "2013"]}/>
          </form>
        );
    }

});

export default Form;

