import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary/Aux';
import './Home.css';

class Home extends Component {
    render () {
        return (
            <Aux>
                <div className="panel panel-default container">
                    <div className="panel-body Home"> 
                        HOME CONTAINER
                    </div>
                </div>
                <div className="panel panel-default container">
                    <div className="panel-body Home"> 
                        <p>Welcome to the Coven App. Please select an option on the navigation bar</p>
                    </div>
                </div>
                <div className="panel panel-default container">
                    <div className="panel-body Home"> 
                        <strong><p>The current stack:</p></strong>
                        <p>React, JS, firebase, axios, bootstrap</p>
                        <strong><p>To be included:</p></strong>
                        <p>Redux, Web connection, better UI</p>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Home; 