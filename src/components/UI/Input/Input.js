import React from 'react';

import styleclasses from './Input.css';

const input = ( props ) => {
    let inputType = null;
    const inputClasses = [styleclasses.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(styleclasses.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputType = (
                <input 
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                />);
            break;
        case ( 'textarea' ):
            inputType = (
                <textarea 
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                />);
            break;
        case ( 'select' ):
            inputType = (
                <select
                    className={inputClasses.join(' ')} 
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option
                            key={option.value} 
                            value={option.value}
                        >
                            {option.displayValue}
                        </option>
                    ))}                    
                </select>
            );
            break;
        default:
            inputType = (
                <input 
                    className={inputClasses.join(' ')} 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}
                />);
    }
    
    return (
        <div className={styleclasses.Input}>
            <label className={styleclasses.Label}>{props.label}</label>
            {inputType}
        </div>
    );
}

export default input;