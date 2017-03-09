import React from "react";

var Knapp = React.createClass(
    {
        getInitialState : function () {
            return {counter:0}
        },
        kallmegbubleopp : function(){
            console.log("hallo")
        },
        handleClick : function(){
            this.setState({counter: this.state.counter+1});
            this.props.kallmeg("Her kommer tittel fra child");
        },
        render: function () {
            return <button onClick={this.handleClick}>{this.state.counter}</button>;

        }
    }
);

export default Knapp;