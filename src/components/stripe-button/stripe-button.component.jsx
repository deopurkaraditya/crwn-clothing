import React from 'react';
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) =>   {
    const priceForStripe = price * 100;   // Stripe needs payments in cents. so $1 = 100cents
    const publishableKey = 'pk_test_51HK5pyLa6kzDbvLlj55lArlsKMjVqM26aqX2gKo9GBPjOcW0qnRqhCCjhopKvW3CMzpyGQzRaetY5Yant5EPjFXB00GAgW9pYn';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful!')
    }
    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN-Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;