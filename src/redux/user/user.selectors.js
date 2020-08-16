import {createSelector} from 'reselect'

const selectUser = state => state.user;

// const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
    // [selectUser, selectCart], OR
    // selectUser,
    // selectCart,
    [selectUser],
    user => user.currentUser
)