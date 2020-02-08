import { createSelector } from "reselect";

const selectCart = state => state.cart; //input selector

export const selectCartItems = createSelector(
    //createselctor takes two parameters all possbile input selector and a function that returns the values you want to output from the selector
    [selectCart],
    cart =>cart.cartItems
);
//This createSlector takes the component memroised and prevent the componenet from rendering anytime any other events is called

export const selectCartItemsCount = createSelector(
    //createselctor takes two parameters all possbile input selector and a function that returns the values you want to output from the selector
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);

