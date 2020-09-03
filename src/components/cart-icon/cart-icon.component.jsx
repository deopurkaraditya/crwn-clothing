import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {toggleCartHidden} from '../../redux/cart/cart.actions'

// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

// import './cart-icon.styles.scss'
import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles'


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <CartIconContainer>
        <ShoppingIcon onClick={toggleCartHidden} />
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);