import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_b9VsnxdSGgpQ6GC0tKjWxdS3';

  const onToken = token => {
    axios({ url: 'payment',method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(res => {
      alert('payment successful');
    })
    .catch(err => {
      alert('There was an issue aith your payment, please make sure you use the provided credit card');  
    });
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total id $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}/>
  );
};

export default StripeButton;