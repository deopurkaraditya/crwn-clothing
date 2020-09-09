import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

import {selectCartItems} from '../../redux/cart/cart.selectors'

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
})


const CartDropdownContainer = compose(
    connect(mapStateToProps),
    withRouter
)

export default CartDropdownContainer