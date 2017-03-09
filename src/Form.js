import React from "react";

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
          </form>
        );
    }

});

export default Form;

