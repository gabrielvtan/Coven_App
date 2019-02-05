import React from 'react';

import './Deal.css';

const deal = (props) => (
        <div className="panel panel-default Deal-Body" onClick={props.clicked}>
            <div className="panel-footer">
            <strong>{props.name} - {props.industry}</strong>
            </div>
            <div className="panel-body">
            {props.description}
            </div>
        </div>
    );

    

export default deal;    