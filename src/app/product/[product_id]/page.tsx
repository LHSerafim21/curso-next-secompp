/* eslint-disable @next/next/no-img-element */
'use client';


import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { ProductType } from '../../types/productType';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const { product_id } = useParams()
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${product_id}`);
      if (!res.ok) {
        throw new Error('Erro ao buscar produto');
      }
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [product_id]);

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full max-w-xl mx-auto">
        {product && (
          <div className="flex flex-col items-center gap-4 mt-16">
            <h1 className="text-3xl">{product.title}</h1>
            <p className="text-lg">{product.description}</p>
            <img src={product.image} alt={product.title} className="h-96 w-96 object-contain" />
            <p className="text-lg font-bold">
              {Number.parseFloat(product.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
