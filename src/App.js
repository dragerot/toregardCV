import React, { Component, PropTypes } from 'react';

import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="container-fluid">
            <p>Tore Gard CV</p>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes ={
    children: PropTypes.object.isRequired
};

export default App;

