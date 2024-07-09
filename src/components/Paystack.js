// src/PaystackPayment.js

import React from 'react';
import { PaystackButton } from 'react-paystack';

const PaystackPayment = () => {
  const publicKey = ' pk_test_15f0d05dacd760b3799ea26afad4f13b62d37186'; // Replace with your Paystack public key
  const amount = 10000; // Amount in kobo (10000 kobo = 100 Naira)
  const email = 'user@example.com'; // Replace with the user's email
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
 
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: () => alert('Thanks for doing business with us! Come back soon!!'),
    onClose: () => alert('Wait! You need this oil, don\'t go!!!!'),
  };

  return (
    <div>
      <h1>Paystack Integration in React</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default PaystackPayment;
