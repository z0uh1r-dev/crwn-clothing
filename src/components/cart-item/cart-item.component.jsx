import React from 'react';

import { CartItemContainer, CartImgContainer, ItemDetailsContainer, NameContainer, PriceContainer } from './cart-item.styles.jsx';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartImgContainer src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <NameContainer>{ name }</NameContainer>
      <PriceContainer>{ quantity } x ${ price }</PriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem;