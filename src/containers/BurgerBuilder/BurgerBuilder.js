import React, { Component } from 'react';
import axios from '../../axios-orders';

import Aux from '../../hoc/hoc';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice: 4,
        canPurchase: false,
        purchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount () {
        console.log(this.props);
        axios.get('https://react-burger-app-6b6ae.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    updateOrderButton = (ingredients) => {
        const ingredientKeys = Object.keys(ingredients);

        let totalSum = 0;
        
        ingredientKeys.map((igKey) => 
            (totalSum = totalSum + ingredients[igKey])
        );

        this.setState( { canPurchase: totalSum > 0  } );
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };
        
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );

        this.updateOrderButton(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount > 0) {
            const updatedCount = oldCount - 1;

            const updatedIngredients = {
                ...this.state.ingredients
            };
    
            updatedIngredients[type] = updatedCount;

            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
    
            this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );

            this.updateOrderButton(updatedIngredients);
        }
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        const queryParams = [];

        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }

        queryParams.push('price=' + this.state.totalPrice);

        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: "/checkout",
            search: '?' + queryString
        });
    }

    render () {
        const disabledInfo = {...this.state.ingredients};

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error? <p>Ingredient's Can't be Loaded </p> : <Spinner />; 
        
        if ( this.state.ingredients ) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        toggleUpdateButton={this.state.canPurchase}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                    />                
                </Aux>
            );

            orderSummary = (
                <OrderSummary
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} 
                />
            );
        }

        if ( this.state.loading ) {
            orderSummary = <Spinner />;
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);