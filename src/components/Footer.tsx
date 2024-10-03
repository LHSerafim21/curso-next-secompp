const Footer = () => {
    return (
      <div className="w-full bg-black text-white text-xs p-10">
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <img className="w-40 h-20 object-contain" src="/images/Logo.png" alt="Logo" />
            <p>Sua camiseta mais confortável, feita para seu estilo e seu conforto.</p>
          </div>
          <div className="flex pt-10 flex-col gap-4">
            <div className="flex gap-8 text-green-700">
              <p>Discovery</p>
              <p>Sobre</p>
              <p>Contate-nos</p>
            </div>
            <div className="flex gap-8">
              <p>Nova temporada</p>
              <p>Ajuda</p>
              <p>Contate-nos</p>
            </div>
            <div className="flex gap-8">
              <p>Mais pesquisado</p>
              <p>Envio</p>
              <p>Políticas de Privacidade</p>
            </div>
            <div className="flex gap-8">
              <p>Mais vendido</p>
              <p>Afiliado</p>
              <p>Termos e Condições</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  