import React from 'react';
import StyleClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const buildControls = ( props ) => (
    <div className={StyleClasses.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                addButtonClicked={() => props.addIngredient( ctrl.type )}
                removeButtonClicked={() => props.removeIngredient( ctrl.type )}
                disabled={props.disabled[ctrl.type]}/>
        ))}
        <button 
            className={StyleClasses.OrderButton}
            disabled={!props.toggleUpdateButton}
            onClick={props.ordered}>
            Order Now
        </button>
    </div>
);

export default buildControls;