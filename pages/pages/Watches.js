import React from 'react';
import Products from '../Product';
import { productData, productDataTwo } from '../Product/data';


export default function Watches() {


  return (
    <>
      <Products heading='Choose your favorite' data={productData} />
      <Products heading='Bling Bling' data={productDataTwo} />
    </>
  );
}