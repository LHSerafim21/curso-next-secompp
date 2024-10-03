import { Button } from "@mui/material";


const HeroSection = () => {
    return (
      <div className="pt-16 h-screen bg-gray-800 text-white flex items-center">
        <div className="flex flex-col w-96 mx-auto text-center gap-4">
          <h2 className="text-3xl">Coleção Streetwear</h2>
          <p>
            Explore o estilo urbano com nossas camisetas. Seja autêntico e faça parte da cultura streetwear com nossas peças únicas e de alta qualidade.
          </p>
          <Button variant='contained' className="bg-green-300 rounded px-4 py-1 cursor-pointer font-bold">
            Descubra nossa coleção
          </Button>
        </div>
      </div>
    );
  };

  export default HeroSection;
