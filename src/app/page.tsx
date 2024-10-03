// Home.js
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  );
}
