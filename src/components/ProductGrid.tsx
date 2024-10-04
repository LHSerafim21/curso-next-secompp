import Product from "./Product";
import { Box } from "@mui/material";
import { ProductType } from "@/types/ProductType";

const ProductGrid = ({ products }: {products: ProductType[]}) => {
  return (
    <div className="py-16 h-full w-full bg-gray-300 flex items-center">
      <div className="flex flex-col w-full max-w-2xl mx-auto text-center gap-4">
        <h2 className="text-3xl">Produtos</h2>
        <p>Encontre o estilo que combina com você</p>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Box key={index} className='cursor-pointer'>
              <Product
                key={index}
                product={product}
              />
            </Box >
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
