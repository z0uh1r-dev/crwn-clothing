import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkoutpage.styles.jsx';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import StripeButton from '../../components/stripe-button/stripe-button.component.jsx';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>

      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    { 
      cartItems.map(cartItem => ( 
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))
    }

    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 12/20 - 123
    </WarningContainer>
    <StripeButton price={total}/>
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);