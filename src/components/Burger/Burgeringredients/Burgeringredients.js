import React, { Component } from 'react';
import StyleClasses from './Burgeringredients.css';
import propTypes from 'prop-types';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch ( this.props.type ) {
            case( 'bread-bottom' ):
                ingredient = <div className={StyleClasses.BreadBottom}></div>;
            break;

            case( 'bread-top' ):
                ingredient = (
                    <div className={StyleClasses.BreadTop}>
                        <div className={StyleClasses.Seeds1}></div>
                        <div className={StyleClasses.Seeds2}></div>
                    </div>);
            break;

            case ( 'meat' ):
                ingredient = <div className={StyleClasses.Meat}></div>;
            break;

            case ( 'cheese' ):
                ingredient = <div className={StyleClasses.Cheese}></div>;
            break;

            case ( 'salad' ):
                ingredient = <div className={StyleClasses.Salad}></div>;
            break;

            case ( 'bacon' ):
                ingredient = <div className={StyleClasses.Bacon}></div>;
            break;

            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
};

export default BurgerIngredient;