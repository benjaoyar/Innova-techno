// pages/single-purchase.js

import React from 'react';
import { useRouter } from 'next/router';
import SingleProductCheckoutForm from '../components/SingleProductCheckoutForm';
import DefaultLayout from "@/layouts/default";
const SinglePurchasePage = () => {
  const router = useRouter();
  const { productId, quantity } = router.query;

  return (
    <DefaultLayout title='Ingresa tus datos!!' >
      <h1 className='flex justify-center font-bold text-3xl mb-4 '>Checkout</h1>
      <SingleProductCheckoutForm productId={productId} quantity={quantity} />
    </DefaultLayout>
  );
};

export default SinglePurchasePage;
