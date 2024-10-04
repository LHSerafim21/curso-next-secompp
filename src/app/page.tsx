import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  const products = await res.json();

  console.log(products);

  return (
    <div className="w-full h-full">
      <Header />
      <HeroSection />
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
}
