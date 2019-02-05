import React from 'react';
import './Deal.css';

const deal = (props) => (
    <div className="panel panel-default deal-body">
        <div className="panel-footer">
            Company - Date - Category - Funding
        </div>
        <div className="panel-body">
            Brief summary of the deal 
        </div>
    </div>
);

export default deal;    