import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import styleclasses from './CheckoutSummary.css';

const checkoutSummary = ( props ) => {
    return (
        <div className={styleclasses.CheckoutSummary}>
            <h1>Here is a summary of your delicious burger! Enjoy!!!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>
                CANCEL
            </Button>
            <Button
                btnType="Success"
                clicked={props.checkoutContinued}>
                PLACE ORDER
            </Button>
        </div>
    );

}

export default checkoutSummary;