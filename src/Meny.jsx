import React from "react";
import Button from 'react-bootstrap/lib/Button';


var Meny = React.createClass({

    eventJalla : function(event){
        console.log("eventJalla"+event.toString());
    },

    render: function () {

        return <div>
            <button type="button"  onClick={this.eventJalla}>Default</button>

            <ul>
                {this.props.list.map(function(data){
                    return <li>{data}</li>;
                })}
            </ul>
        </div> ;
    }
 }
 );

export default Meny;
