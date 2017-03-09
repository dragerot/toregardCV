import React, { Component } from 'react';
import ReactDom from 'react-dom';

//http://underscorejs.org/#uniqueId
import Util from 'underscore';

var KundeRegistrer  = React.createClass({
    getInitialState: function () {
        return {init: ""};
    },

    /**
     * Hvis du skal få editert
     */
    onChangeEvent : function (e) {
        console.log(e.target.value);
        this.setState(
            {
                init : e.target.value
            }


        );
    },
    componentDidMount : function(){
        ReactDom.findDOMNode(this.refs.id).value = "unik verid";
    },
    handleSubmit : function(){

      var id =   ReactDom.findDOMNode(this.refs.id).value;
      var fornavn = ReactDom.findDOMNode(this.refs.fornavn).value;
        console.log("Du skrev: "+id+ " "+ fornavn);
        console.log("Submitter...")
    },
    render : function(){
        return(
            /**
             * Merk at ukontroll kontroll har ikke value= (men defaultvalue)
             *
             * this.refs = referanse til egne komponenter (koblet til input ref="id"
             */
            <form role="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label>Id :
                    <input id="id" ref="id" type="text"  placeholder="ssn"/> <br/>
                </label>
                </div>
                <div className="form-group">
                <label>Fornavn :
            <input id="fornavn" ref="fornavn" onChange={this.onChangeEvent} type="text" value={this.state.init} placeholder="fornavn"/>
                </label>
                </div>
            <button type="submit" className="btn btn-default">Submit</button>
            </form>
                )
            }
});

export default KundeRegistrer;
