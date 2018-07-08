import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [
                ...Array(props.ingredients[igKey])].map((_, index) => {
                   return <BurgerIngredient key={igKey + index} type={igKey} />
                })
        })
        .reduce((prev, curr) => {            
            return prev.concat(curr)
        }, []);
        //Above, takes the keys of an object and maps them into an array
        //it then returns an Array with Arrays in it
        //the inner arrays are arrays are the individuall elemets that were mapped previously i.e(cheese array, salad array, meat array, etc..)
        //it then maps through all the inner arrays
        //then, it returns JSX that passes a unique key and type as a prop to the BurgerIngredient component
        //lastly it reduces all (flattens/combines) the inner arrays into one array i.e.([1],[2],[3] to [1,2,3])
        if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;