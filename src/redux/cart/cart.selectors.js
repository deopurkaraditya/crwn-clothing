import {createSelector} from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaledQuantity, cartItem)=> accumaledQuantity + cartItem.quantity, 0)
)

// process 
// selectCart -> selectCartItems -> selectCartItemsCount