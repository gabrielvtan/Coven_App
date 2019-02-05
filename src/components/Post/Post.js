import React from 'react';
import './Post.css';

const post = (props) => (
    <div className="panel panel-default post-body">
        <div className="panel-footer">
            Name - Date - Category
        </div>
        <div className="panel-body">
            {props.children}
        </div>
    </div>
);

export default post;