/* eslint-disable @next/next/no-img-element */
// Product.tsx
import { ProductType } from '@/types/ProductType';
import React from 'react';


function Product({product:{ image, title, price }} : {product: ProductType}) {

  return (
    <div className="p-4 h-full rounded-lg shadow-lg bg-white flex flex-col hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col text-sm text-start mt-8 space-y-1 overflow-hidden">
        <p className="text-lg text-gray-800 text-ellipsis">{title}</p>
        <p className="ml-auto text-lg font-bold text-green-500">
          {Number.parseFloat(price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </p>
      </div>
    </div>
  );

}

export default Product;
