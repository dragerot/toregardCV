import React from "react";

/**
 * Setter opp en timer.
 *
 * I parent må du etablere en function:
 * function xxxx(){
 *   console.log("tick");
 * }
 *
 * Så må du legge in et element
 *  <Timer onInterval={xxxx} interval={1000} />
 * @type {*}
 */
 var Timer = React.createClass({
    render : function () {
        return <div style={{display: 'none'}}></div>
    },
     componentDidMount : function(){
        setInterval(this.props.onInterval,
                    this.props.interval);
     }
});
export default Timer;