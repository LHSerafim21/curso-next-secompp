// Product.tsx
import React, { FC } from 'react';

interface ProductProps {
  image: string;
  name: string;
  price: string;
}

const Product: FC<ProductProps> = ({ image, name, price }) => {
  return (
    <div className="p-2 rounded shadow bg-white">
      <img className="w-60 h-30 object-cover" src={image} alt={name} />
      <div className="flex flex-col text-sm text-start">
        <p>{name}</p>
        <p className="ml-auto text-green-300">{price}</p>
      </div>
    </div>
  );
};

export default Product;
