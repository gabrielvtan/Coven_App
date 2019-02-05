import React from 'react';

import './Input.css';

// Here we are creating customized input elements for our app 
const input = (props) => {
    let inputElement = null;

    const inputClasses = ["InputElement"];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push("Invalid");
    }

    switch(props.elementType) {
        case('input'): 
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
            break;
        // We will create our options in between the select tags
        // elementConfig is not necessary becuase we are simply receiving options so we now have to map the options 
        // we map the options here so that it will display dynamically on the dropdown menu 
        case ('select'):
            inputElement = (
            <select
                className={inputClasses.join(' ')} 
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            );
            break;

        default: 
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig} 
                value={props.value} 
                onChange={props.changed}/>;
    }
    
    return(
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input; 