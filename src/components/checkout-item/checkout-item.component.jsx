import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

import { removeItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, increaseQty, decreaseQty}) => {

  const { name, imageUrl, price, quantity } = cartItem

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
  
      <span className="name">{ name }</span>
      <span className="quantity">
        <div onClick={() => decreaseQty(cartItem)} className="arrow">&#10094;</div>
        <div className="value">{ quantity }</div>
        <div onClick={() => increaseQty(cartItem)} className="arrow">&#10095;</div>
      </span>
      <span className="price">{ price }</span>
      <div onClick={() => removeItem(cartItem)} className="remove-button">&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItemFromCart(item)),
  increaseQty: item => dispatch(addItem(item)),
  decreaseQty: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);