import React from 'react';
import { connect } from 'react-redux';

import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.styles.jsx';

import { removeItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, increaseQty, decreaseQty}) => {

  const { name, imageUrl, price, quantity } = cartItem

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"/>
      </ImageContainer>
  
      <TextContainer>{ name }</TextContainer>
      <QuantityContainer>
        <div onClick={() => decreaseQty(cartItem)} className="arrow">&#10094;</div>
        <div className="value">{ quantity }</div>
        <div onClick={() => increaseQty(cartItem)} className="arrow">&#10095;</div>
      </QuantityContainer>
      <TextContainer>{ price }</TextContainer>
      <RemoveButtonContainer onClick={() => removeItem(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
  increaseQty: item => dispatch(addItem(item)),
  decreaseQty: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);