import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles.jsx';

import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Header = ({ currentUser, hidden }) => {

  return (
  
    <HeaderContainer>
      <LogoContainer className="logo-container" to="/">
        <Logo className="logo" />
      </LogoContainer>
  
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
  
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>
        {
          currentUser ? 
          <OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
          <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
  
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);