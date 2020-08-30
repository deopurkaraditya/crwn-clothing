import React from 'react';
import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

import {ReactComponent as Logo} from '../../assets/crown.svg';

import {HeaderContainer, LogoConatiner, OptionsContainer, OptionLink} from './header.styles'
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'



const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoConatiner to ="/">
            <Logo className="logo" /> 
        </LogoConatiner>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                    <OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
                :
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
            }

            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
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