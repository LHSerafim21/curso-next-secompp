import Product from "./product";

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

  return (
    <div className="py-16 h-full w-full bg-gray-300 flex items-center">
      <div className="flex flex-col w-full max-w-2xl mx-auto text-center gap-4">
        <h2 className="text-3xl">Produtos</h2>
        <p>Encontre o estilo que combina com você</p>
        <div className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Product key={index} image={product.image} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
