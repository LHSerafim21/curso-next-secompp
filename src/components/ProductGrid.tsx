'use client'
import { useEffect, useState } from "react";
import Product from "./Product";
import { Box } from "@mui/material";

const ProductGrid = () => {
  const products = [
    { image: "/camisas/camisa1.png", name: "Nome do produto", price: "R$ 100,00" },
    { image: "/camisas/camisa2.png", name: "Nome do produto", price: "R$ 100,00" },
    { image: "/camisas/camisa3.png", name: "Nome do produto", price: "R$ 100,00" },
    { image: "/camisas/camisa4.png", name: "Nome do produto", price: "R$ 100,00" },
    { image: "/camisas/camisa5.png", name: "Nome do produto", price: "R$ 100,00" },
    { image: "/camisas/camisa6.png", name: "Nome do produto", price: "R$ 100,00" },
    { image: "/camisas/camisa7.png", name: "Nome do produto", price: "R$ 100,00" },
    { image: "/camisas/camisa1.png", name: "Nome do produto", price: "R$ 100,00" },
  ];

  const [productsList, setProductsList] = useState(products)

  const deleteProduct = (index: number) => {
    const products = productsList.filter((val, i) => {
      return i != index
    })
    setProductsList(products)
  }

  return (
    <div className="py-16 h-full w-full bg-gray-300 flex items-center">
      <div className="flex flex-col w-full max-w-2xl mx-auto text-center gap-4">
        <h2 className="text-3xl">Produtos</h2>
        <p>Encontre o estilo que combina com você</p>
        <div className="grid grid-cols-4 gap-4">
          {productsList.map((product, index) => (
            <Box className='cursor-pointer' onClick={() => deleteProduct(index)}>
              <Product key={index} image={product.image} name={product.name} price={product.price} />
            </Box >
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
