// Home.js
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className='h-40 w-full mt-30 flex align-bottom'>
        <h1 className=' text-black'>
            Contate-nos
        </h1>
      </div>
      <Footer />
    </div>
  );
}
