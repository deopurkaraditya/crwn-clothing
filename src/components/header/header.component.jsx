import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'



const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to ="/">
            <Logo className="logo" /> 
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? 
                    <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
            }

            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

// const mapStateToProps = state =>({
//     currentUser: state.user.currentUser
// })

// const mapStateToProps = state =>({
//     currentUser : selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// }) 

// OR passing createStructuredSelector

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);